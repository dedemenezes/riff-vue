// composables/ui/useNotifications.js
import { ref, reactive } from 'vue'

// Global notification state
const notifications = ref([])
let notificationId = 0

export const useNotifications = () => {
  const addNotification = (notification) => {
    const id = ++notificationId
    const newNotification = {
      id,
      type: 'info',
      duration: 3000,
      ...notification,
      timestamp: Date.now()
    }

    notifications.value.push(newNotification)

    // Auto-remove if duration is set
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }

    return id
  }

  const removeNotification = (id) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    notifications.value = []
  }

  // Convenience methods
  const showSuccess = (message, options = {}) => {
    return addNotification({
      type: 'success',
      title: 'Success',
      message,
      ...options
    })
  }

  const showError = (message, options = {}) => {
    return addNotification({
      type: 'error',
      title: 'Error',
      message,
      duration: 5000, // Longer for errors
      ...options
    })
  }

  const showWarning = (message, options = {}) => {
    return addNotification({
      type: 'warning',
      title: 'Warning',
      message,
      duration: 4000,
      ...options
    })
  }

  const showInfo = (message, options = {}) => {
    return addNotification({
      type: 'info',
      title: 'Info',
      message,
      ...options
    })
  }

  const showLoading = (message, options = {}) => {
    return addNotification({
      type: 'pending',
      title: 'Loading',
      message,
      duration: 0, // Don't auto-remove loading notifications
      ...options
    })
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading
  }
}
