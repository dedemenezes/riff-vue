<script setup>
import { ref, onMounted } from "vue";
import ListCard from "./components/ListCard.vue";
import { fetchMovies } from "./services/api/movies.js";

const movies = ref(null);

onMounted(async () => {
  if (!movies.value) {
    const data = await fetchMovies();
    if (data) movies.value = data.results;
  }
});
</script>

<template>
  <div class="container mx-auto max-w-9xl bg-green-100">
    <h1 class="text-violet-900 text-center">Welcome</h1>
    <div class="p-3 grid grid-cols-3 gap-4 mx-auto">
      <ListCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<style scoped></style>
