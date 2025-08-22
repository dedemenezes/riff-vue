<script setup>
import { computed } from "vue";
const props = defineProps({
  movie: Object,
});

const posterUrl = computed(() => {
  return `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
});

const backgroundStyle = computed(() => ({
  backgroundImage: `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.00) 49.89%,
      rgba(0, 0, 0, 0.50) 71.29%,
      rgba(0, 0, 0, 0.76) 86.95%
    ),
    url(${posterUrl.value})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
</script>
<template>
  <!-- max-w-[332px]  -->
  <div
    :style="backgroundStyle"
    class="flex flex-col justify-end gap-[10px] px-[24px] py-[16px] rounded-lg bg-violet-200 h-[455px]"
  >
    <p
      class="text-[#FFFFFF] text-[10px] font-medium tracking-[0.09375em] uppercase"
    >
      {{ props.movie.titulo_original_coord_int }}
    </p>
    <p class="text-white text-sm font-normal leading-[21px]">
      <!-- {{ props.movie.overview }} -->
    </p>
  </div>
</template>

<style scoped></style>
