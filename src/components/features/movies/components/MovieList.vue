<!-- src/components/layout/sections/MovieList.vue -->
<script setup>
import MovieCardSkeleton from "@/components/features/movies/components/MovieCardSkeleton.vue"
import MovieCard from "@/components/features/movies/components/MovieCard.vue";
import ToastNotification from "@/components/common/notifications/ToastNotification.vue";
import { ref } from "vue";

const showToast = ref(true);
const props = defineProps({
  movies: { required: false },
  isPending: { required: false },
  isFetching: { required: false },
  isError: { required: false },
  error: { required: false },
});
</script>

<template>
  <section class="grid grid-cols-1 gap-800">
    <p v-if="isFetching">
      <MovieCardSkeleton />
    </p>
    <!-- Shows during background refresh -->
    <!-- <template v-if="isPending">
      <ToastNotification
        v-if="showToast"
        :message="$t('loading.movies')"
        description="Very very soon."
        type="info"
        :duration="5000"
        @close="showToast = false"
      /> -->
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
        v-for="movie in props.movies || []"
        :key="movie.RECORDID"
        :movie="movie"
      />
    </template>
  </section>
</template>
