<script setup>
import { ref, onMounted } from "vue";
import { fetchMovies } from "./services/api/movies.js";
import SponsorHeader from "./components/shared/SponsorHeader.vue";
import NavbarMain from "./components/navbar/NavbarMain.vue";
import NavbarSecundary from "./components/navbar/NavbarSecundary.vue";
import IconCheck from "./components/icons/IconCheck.vue";
import IconSearch from "./components/icons/IconSearch.vue";
import IconDash from "./components/icons/IconDash.vue";
import IconCarretUp from "./components/icons/IconCarretUp.vue";
import IconInfo from "./components/icons/IconInfo.vue";
import IconPin from "./components/icons/IconPin.vue";
import IconChange from "./components/icons/IconChange.vue";
import IconNewUser from "./components/icons/IconNewUser.vue";
import IconClose from "./components/icons/IconClose.vue";
import IconClock from "./components/icons/IconClock.vue";
import IconChevronLeft from "./components/icons/IconChevronLeft.vue";
import IconChevronRight from "./components/icons/IconChevronRight.vue";
import IconLink from "./components/icons/IconLink.vue";
import IconFilter from "./components/icons/IconFilter.vue";
import IconPlus from "./components/icons/IconPlus.vue";
import IconProgram from "./components/icons/IconProgram.vue";
import IconMenu from "./components/icons/IconMenu.vue";
import TextInput from "./components/inputs/TextInput.vue";
import ListCard from "./components/ListCard.vue";

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
  <NavbarMain />
  <NavbarSecundary />

  <TextInput id="flamengo"/>
  <div class="flex justify-center space-x-200">
    <IconClock />
    <IconProgram />
    <IconNewUser />
    <IconChange />
    <IconLink />
    <IconChevronRight />
    <IconChevronLeft />
    <IconMenu />
    <IconClose />
    <IconPin />
    <IconSearch />
    <IconPlus />
    <IconFilter />
    <IconInfo />
    <IconCheck />
    <IconDash />
    <IconCarretUp />
  </div>

  <div class="grid grid-cols-3 gap-300">
    <ListCard v-for="movie in movies" :key="movie.id"  :movie />
  </div>
</template>

<style scoped></style>
