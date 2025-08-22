<!-- src/components/layout/sections/MovieList.vue -->
<script setup>
import MovieCard from "@/components/features/movies/components/MovieCard.vue";
import { useMoviesQuery } from "@/components/features/movies/composables/useMovies";
import ToastNotification from "@/components/common/notifications/ToastNotification.vue";
import { ref } from "vue";

const showToast = ref(true);
const { isPending, isFetching, isError, data, error } = useMoviesQuery();
</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <p v-if="isFetching">{{ $t("loading.title") }}</p>
    <!-- Shows during background refresh -->
    <template v-if="isPending">
      <ToastNotification
        v-if="showToast"
        :message="$t('loading.movies')"
        description="Very very soon."
        type="info"
        :duration="5000"
        @close="showToast = false"
      />
      <!-- Or skeleton loader -->
    </template>
    <template v-else-if="isError">
      <p class="text-red-500">{{ console.log(error) }}</p>
      <ToastNotification
        :description="error.message"
        :message="error.name"
        type="error"
      />
    </template>
    <template v-else>
      <MovieCard
        v-for="movie in data?.FMPDSORESULT?.ROW || []"
        :key="movie.RECORDID"
        :movie="movie"
      />
    </template>
  </section>
</template>
