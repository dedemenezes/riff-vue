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

  <button class="px-200 py-150 bg-amarelo-200 blur-sm rounded-200 focus:outline focus:outline-offset-4 focus:outline-verde-200 ...">Button A</button>
</template>

<!-- <template> -->
  <!-- <div class="container mx-auto max-w-9xl bg-green-300 hover:bg-green-900 transition-colors"> -->
    <!-- <h1 class="font-heading font-regular text-text-danger-tertiary text-center text-3xl">Welcome</h1> -->
    <!-- <ListCard /> -->
     <!-- <button class="-m-150 font-body py-100 px-150 bg-laranja-600 border-4 border-magenta-800 text-neutrals-100 rounded focus:outline ring-amarelo-800 focus:ring-2 focus:ring-offset-2">RioMarket</button> -->
  <!-- </div> -->

  <!-- <button class="px-200 py-150 bg-amarelo-200 blur-sm rounded-200 focus:outline focus:outline-offset-4 focus:outline-verde-200 ...">Button A</button> -->
<!-- </template> -->
<style scoped></style>
