<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import { useFetch } from "./services/fetch.js";

  const { data, error } = useFetch('https://api.themoviedb.org/3/discover/movie', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2MyMDIxNzM4ZGQxOTVmMmJhMjJlYTU4YTczMTM2OCIsIm5iZiI6MTYyMjkyMDYyMy44NjksInN1YiI6IjYwYmJjZGFmNjc4MjU5MDAyYWM0OWM1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pvqC7a4-Rs2201GV2QKyisBLf8wfA01U4qQAfiYqagg',
    'accept': 'application/json'
  }
})
console.log(data);
console.log(data);
console.log(error);
console.log(error.value);

</script>

<template>
  <div class="container mx-auto max-w-7xl">
  </div>
  <HelloWorld />
</template>
