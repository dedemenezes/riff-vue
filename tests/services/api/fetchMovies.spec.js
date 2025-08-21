import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchMovies } from '@/services/api/endpoints/movies'
import apiClient from '@/services/api/client/apiClient'

vi.mock('fast-xml-parser', () => {
  const mockParseFn = vi.fn()
  return {
    XMLParser: vi.fn().mockImplementation(() => ({
      parse: mockParseFn
    })),
    __mockParseFn: mockParseFn
  }
})

vi.mock('@/services/api/client/apiClient', () => ({
  default: {
    get: vi.fn()
  }
}))

globalThis.fetch = vi.fn()

describe("fetchMovies", () => {
  const mockXmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <programacao>
      <filme>
        <titulo>Test Movie</titulo>
        <horario>20:00</horario>
      </filme>
    </programacao>`

  const mockParsedData = {
    programacao: {
      filme: {
        titulo: 'Test Movie',
        horario: '20:00'
      }
    }
  }

  let mockParseFn
  beforeEach(async () => {
    vi.clearAllMocks()
    vi.stubEnv('DEV', false)

    const { __mockParseFn } = await import('fast-xml-parser')
    mockParseFn = __mockParseFn
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  test('fetchMovies_should_parse_xml_response_successfully', async () => {
    apiClient.get.mockResolvedValue({
      data: mockXmlData
    })

    mockParseFn.mockReturnValue(mockParsedData)

    const result = await fetchMovies()

    expect(apiClient.get).toHaveBeenCalledWith(
      '/schedules/xml/programacao',
      { responseType: 'text' }
    )

    expect(mockParseFn).toHaveBeenCalledWith(mockXmlData)
    expect(result).toEqual(mockParsedData)
  })

  test('fetchMovies_should_use_local_file_when_dev_mode_enabled', async () => {
    vi.stubEnv('DEV', true)

    globalThis.fetch.mockResolvedValue({
      text: () => Promise.resolve(mockXmlData)
    })

    mockParseFn.mockReturnValue(mockParsedData)

    globalThis.fetch.mockResolvedValue({
      text: () => Promise.resolve(mockXmlData)
    })

    const result = await fetchMovies()

    expect(result).toEqual(mockParsedData)
  })

  test('fetchMovies_should_handle_api_request_failures', async () => {
    const apiError = new Error('Network Error')
    apiClient.get.mockRejectedValue(apiError)

    await expect(fetchMovies()).rejects.toThrow('Network Error')
    expect(apiClient.get).toHaveBeenCalledWith(
      '/schedules/xml/programacao',
      { responseType: 'text' }
    )
  })

  test('fetchMovies_should_handle_xml_parsing_errors', async () => {
    apiClient.get.mockResolvedValue({
      data: 'invalid-xml-data'
    })

    const parseError = new Error('XML parsing failed')
    mockParseFn.mockImplementation(() => {
      throw parseError
    })

    await expect(fetchMovies()).rejects.toThrow('XML parsing failed')
  })

  test('fetchMovies_should_handle_empty_xml_response', async () => {
    apiClient.get.mockResolvedValue({
      data: ''
    })

    mockParseFn.mockReturnValue({})

    const result = await fetchMovies()

    expect(mockParseFn).toHaveBeenCalledWith('')
    expect(result).toEqual({})
  })

  test('fetchMovies_should_use_correct_response_type_for_api_calls', async () => {
    apiClient.get.mockResolvedValue({
      data: mockXmlData
    })

    mockParseFn.mockReturnValue(mockParsedData)

    await fetchMovies()

    expect(apiClient.get).toHaveBeenCalledWith(
      '/schedules/xml/programacao',
      { responseType: 'text' }
    )
  })
})
