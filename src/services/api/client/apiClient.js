import axios from "axios";
import { handleApiError } from "./errorHandler";

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required');
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Accept: 'application/json, text/xml, */*' },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Set default timeout
    if (!config.timeout) {
      config.timeout = config.url?.includes('/xml/') ? 60000 : 30000;
    }

    // Add auth token if available (commented out as in original)
    // const token = import.meta.env.VITE_TMDB_TOKEN
    // if(token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use((response) => response, handleApiError);

export default apiClient;
