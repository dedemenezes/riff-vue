<!-- src/components/layout/sections/MovieList.vue -->
<script setup>
import MovieCard from "@/components/ui/cards/MovieCard.vue";
import { useMoviesQuery } from "@/composables/useVueQuery";
const { isPending, isFetching, isError, data, error } = useMoviesQuery();

</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <template v-if="isPending">
      <p>Loading movies...</p>
      <!-- Or skeleton loader -->
    </template>
    <template v-else-if="isError">
      <p class="text-red-500">{{ error }}</p>
    </template>
    <template v-else>
      <MovieCard v-for="movie in data?.FMPDSORESULT?.ROW || []" :key="movie.RECORDID" :movie="movie" />
    </template>

    <p v-if="isFetching">Refreshing...</p> <!-- Shows during background refresh -->

  </section>
</template>
