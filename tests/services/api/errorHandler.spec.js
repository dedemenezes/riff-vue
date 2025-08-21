import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { handleApiError } from '@/services/api/client/errorHandler'

// Mock console methods to avoid noise in tests and verify logging
const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
const mockConsoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})

describe('errorHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset environment
    vi.stubEnv('NODE_ENV', 'test')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    mockConsoleError.mockClear()
    mockConsoleWarn.mockClear()
  })

  test('should_transform_400_error_to_user_friendly_message', async () => {
    const mockAxiosError = {
      response: {
        status: 400,
        data: { message: 'Validation failed' }
      },
      config: {
        url: '/api/movies',
        method: 'GET'
      }
    }

    await expect(handleApiError(mockAxiosError)).rejects.toThrow('Bad Request - Invalid data sent')

    try {
      await handleApiError(mockAxiosError)
    } catch (error) {
      expect(error.status).toBe(400)
      expect(error.isSafe).toBe(true)
      expect(error.message).toBe('Bad Request - Invalid data sent')
    }

    expect(mockConsoleError).toHaveBeenCalledWith('API Error Details:', {
      status: 400,
      url: '/api/movies',
      method: 'GET',
      timestamp: expect.any(String)
    })

    expect(mockConsoleWarn).toHaveBeenCalledWith('User Error:', 'Bad Request - Invalid data sent')
  })
})
