import { useQuery } from "@tanstack/vue-query";
import { fetchMovies } from "@/services/api/endpoints/movies";

export function useMoviesQuery() {
  return useQuery({
    queryKey: ["programming"],
    queryFn: fetchMovies,
    // staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 4 * 60 * 60 * 1000, // 4 * 60 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnMount: true,
    throwOnError: false,
  });
}
