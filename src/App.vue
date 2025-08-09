<script setup>
import { ref, onMounted } from "vue";
import { fetchMovies } from "./services/api/movies.js";
import SponsorHeader from "./components/shared/SponsorHeader.vue";

const movies = ref(null);

onMounted(async () => {
  if (!movies.value) {
    const data = await fetchMovies();
    if (data) movies.value = data.results;
  }
});
</script>

<template>
  <SponsorHeader class="bg-azul-400" />
</template>

<style scoped></style>
