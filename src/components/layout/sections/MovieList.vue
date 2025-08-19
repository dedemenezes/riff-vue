<!-- src/components/layout/sections/MovieList.vue -->
<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "@/components/ui/cards/MovieCard.vue";
import { fetchMovies } from "../../../services/api/movies"; // centralized API module

const movies = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    // movies.value = await fetchMovies('/movies/xml/pelicula')
    // console.log(movies.value);
    movies.value = await fetchMovies("/schedules/xml/programacao");

    // console.log(movies.value.FMPDSORESULT.ROW);
    movies.value = movies.value.FMPDSORESULT.ROW;
    console.log(movies.value);
  } catch (err) {
    console.log(err);
    error.value = "Failed to load movies.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <template v-if="loading">
      <p>Loading movies...</p>
      <!-- Or skeleton loader -->
    </template>
    <template v-else-if="error">
      <p class="text-red-500">{{ error }}</p>
    </template>
    <template v-else>
      <MovieCard v-for="movie in movies" :key="movie.RECORDID" :movie="movie" />
    </template>
  </section>
</template>
