class ApiErrorHandler {
  constructor() {
    this.errorMap = {
      400: "Bad Request - Invalid data sent",
      401: "Unauthorized - Please log in again",
      403: "Forbidden - You don't have permission",
      404: "Not Found - The requested resource doesn't exist",
      408: "Request Timeout - Please try again",
      429: "Too Many Requests - Please slow down",
      500: "Server Error - Something went wrong on our end",
      502: "Bad Gateway - Service temporarily unavailable",
      503: "Service Unavailable - Please try again later",
      504: "Gateway Timeout - Request took too long",
    };

    this.errorCount = new Map()
  }

  handleError(error) {
    const errorContext = this.buildErrorContext(error)

    const errorKey = `${errorContext.status}-${errorContext.url}`;
    this.errorCount.set(errorKey, (this.errorCount.get(errorKey) || 0) + 1);

    console.group('API Error');
    console.error('Error Details:', errorContext);
    console.error('Error Count for this endpoint:', this.errorCount.get(errorKey));
    console.groupEnd();

    // Network error (no response)
    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        return this.createSafeError("Request timeout - please try again", 408);
      }
      return this.createSafeError(
        "Network error - please check your connection",
        0,
      );
    }

    const status = error.response.status;
    const message = this.errorMap[status] || "An unexpected error occurred";

    // Don't log sensitive data in production
    if (import.meta.env.DEV) {
      console.group('Full Error Details (DEV)');
      console.error('Full axios error:', error);
      console.error('Request config:', error.config);
      console.error('Response data:', error.response?.data);
      console.groupEnd();
    }

    return this.createSafeError(message, status);
  }

  buildErrorContext(error) {
    return  {
      status: error.response?.status || 0,
      statusText: error.response?.statusText || 'Network Error',
      url: error.config?.url || 'Unknown',
      method: error.config?.method?.toUpperCase() || 'Unknown',

      timestamp: new Date().toISOString(),

      // userAgent: navigator.userAgent,
      // language: navigator.language,
      // online: navigator.onLine,

      // viewport: `${window.innerWidth}x${window.innerHeight}`,

      timeout: error.config?.timeout,
      responseTime: error.config?.metadata?.endTime - error.config?.metadata?.startTime,

      isNetworkError: !error.response,
      isTimeoutError: error.code === 'ECONNABORTED',
      isServerError: error.response?.status >= 500,
      isClientError: error.response?.status >= 400 && error.response?.status < 500,
    };
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
    console.warn("User Error:", error.message);
  }

  // Easy migration path for future monitoring
  getErrorStats() {
    return {
      totalErrors: Array.from(this.errorCount.values()).reduce((a, b) => a + b, 0),
      uniqueErrors: this.errorCount.size,
      errorBreakdown: Object.fromEntries(this.errorCount)
    };
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

// Export for future monitoring
export const getErrorStats = () => errorHandler.getErrorStats();

// Export the class for testing or advanced usage
export default errorHandler;
