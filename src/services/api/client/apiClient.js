import axios from "axios";
import { handleApiError } from "./errorHandler";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Accept: "text/xml" },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Set default timeout
    if (!config.timeout) {
      config.timeout = 30000; // 30 seconds
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
