<script setup>
import { computed, ref } from "vue";

import TagMostra from "../tags/TagMostra.vue";
import TagScreening from "../tags/TagScreening.vue";
import { IconPin } from "@/components/ui/icons";
import { useMovieLocalization } from "../../../composables/useMovieLocalization";

// Hover state
const isHovered = ref(false);
const props = defineProps({
  movie: { type: Object, required: true },
});

const moviePoster = computed(() => {
  return props.movie.poster || "src/assets/poc-poster.jpg"
})

const movieGenre = computed(() => {
  return props.movie.genero || "TBD"
})

const screenings = computed(() => {
  if (props.movie.sessao) {
    return [
      { time: "08h30", state: "disabled" },
      { time: props.movie.sessao.replace(":", "h"), state: "active" }
    ]
  } else {
    return [
      { time: "08h30", state: "disabled" },
      { time: "21h00", state: "active" }
    ]
  }
})

const normalizeString = (str) =>
  str
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters (keep letters/numbers/spaces)
    .trim();

const mostraVariantName = computed(() => {
  const lowerCaseName = normalizeString(props.movie.submostra.DATA)
    .replaceAll(" ", "-")
    .toLowerCase();
  return lowerCaseName;
});
const { getLocalizedTitle } = useMovieLocalization();
</script>

<template>
  <!--  w-[380px] -->
  <div
    class="flex flex-col items-start gap-200"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- image -->
    <div class="relative">
      <img
        :src="moviePoster"
        alt="movie-name poster"
        width="100%"
        class="rounded-200"
      />
      <!-- Overlay -->
      <div
        class="absolute inset-0 rounded-200 pointer-events-none"
        style="
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 36.54%,
            rgba(0, 0, 0, 0.45) 100%
          );
        "
      ></div>
      <!-- tag -->
      <TagMostra
        class="absolute top-0 left-0 rounded-tl-200"
        :variant="mostraVariantName"
        :text="props.movie.submostra.DATA"
      />

      <div class="content absolute bottom-250 left-250 flex flex-col gap-[5px]">
        <!-- movie title -->
        <h2 class="text-header-sm text-on-dark">
          {{ getLocalizedTitle(props.movie) }}
        </h2>
        <div class="flex items-center gap-200">
          <span class="text-overline text-on-dark-secondary">{{
            props.movie.paiscompleto_coord_int
          }}</span>
          <img
            src="@assets/divisor.svg"
            alt="divisor"
            height="16px"
            width="1px"
          />
          <span class="text-overline text-on-dark-secondary">{{ movieGenre }}</span>
          <img
            src="@assets/divisor.svg"
            alt="divisor"
            height="16px"
            width="1px"
          />
          <span class="text-overline text-on-dark-secondary"
            >{{ props.movie.duracao.DATA }}'</span
          >
        </div>
        <!-- Animated underline -->
        <span
          class="w-full bg-white-transp-900 transition-height duration-100"
          :style="{ height: isHovered ? '1px' : '0px' }"
        ></span>
      </div>
    </div>
    <div class="px-200 space-y-250 w-full">
      <div class="flex items-center gap-[6px]">
        <IconPin width="16" height="16" />
        <p class="text-body-regular text-primary">
          {{ props.movie.Cinema }}
        </p>
      </div>
      <div class="flex items-center space-x-200">
        <TagScreening
          v-for="screening in screenings"
          :key="screening"
          :time="screening.time"
          :state="screening.state"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
