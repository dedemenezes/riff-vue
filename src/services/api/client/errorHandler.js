// services/api/client/errorHandler.js
class ApiErrorHandler {
  constructor() {
    this.errorMap = {
      400: 'Bad Request - Invalid data sent',
      401: 'Unauthorized - Please log in again',
      403: 'Forbidden - You don\'t have permission',
      404: 'Not Found - The requested resource doesn\'t exist',
      408: 'Request Timeout - Please try again',
      429: 'Too Many Requests - Please slow down',
      500: 'Server Error - Something went wrong on our end',
      502: 'Bad Gateway - Service temporarily unavailable',
      503: 'Service Unavailable - Please try again later',
      504: 'Gateway Timeout - Request took too long'
    };
  }

  handleError(error) {
    // Network error (no response)
    if (!error.response) {
      if (error.code === 'ECONNABORTED') {
        return this.createSafeError('Request timeout - please try again', 408);
      }
      return this.createSafeError('Network error - please check your connection', 0);
    }

    const status = error.response.status;
    const message = this.errorMap[status] || 'An unexpected error occurred';

    // Log error details for debugging (but don't expose to user)
    console.error('API Error Details:', {
      status,
      url: error.config?.url,
      method: error.config?.method,
      timestamp: new Date().toISOString()
    });

    // Don't log sensitive data in production
    if (import.meta.env.NODE_ENV === 'development') {
      console.error('Full error:', error);
    }

    return this.createSafeError(message, status);
  }

  createSafeError(message, status) {
    const safeError = new Error(message);
    safeError.status = status;
    safeError.isSafe = true; // Mark as safe to display to user
    return safeError;
  }

  // Optional: Method to show user-friendly notifications
  showErrorNotification(error) {
    // You can integrate with your notification system here
    // For example: toast.error(error.message)
    console.warn('User Error:', error.message);
  }
}

// Create singleton instance
const errorHandler = new ApiErrorHandler();

// Export the error handling function
export const handleApiError = (error) => {
  const safeError = errorHandler.handleError(error);

  // Optionally show notification to user
  errorHandler.showErrorNotification(safeError);

  return Promise.reject(safeError);
};

// Export the class for testing or advanced usage
export default errorHandler;
