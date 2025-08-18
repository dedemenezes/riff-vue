import apiClient from "./api_client";

export const fetchMovies = () => {
  const path = "/discover/movie";
  return apiClient.get(path, {})
    .then(res => res.data);
  };

  export const fetchTrending = async () => {
    const path = "/trending/movie/week";
    return apiClient.get(path, {})
      .then(res => res.data);
};
