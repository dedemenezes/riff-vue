import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Accept: 'text/xml'}
})

// apiClient.interceptors.request.use((config) => {
//   const token = import.meta.env.VITE_TMDB_TOKEN
//   if(token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    // Optional: show toast notification
    return Promise.reject(error);
  }
);

export default apiClient
