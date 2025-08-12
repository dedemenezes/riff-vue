<script setup>
import { XMLParser } from "fast-xml-parser";
import { ref, onMounted } from "vue";
// import { fetchMovies } from "./services/api/movies.js";
import SponsorHeader from "./components/layout/headers/SponsorHeader.vue";
import NavbarMain from "./components/layout/navbar/NavbarMain.vue";
import NavbarSecundary from "./components/layout/navbar/NavbarSecundary.vue";
import { IconCheck } from "@/components/ui/icons";
import { IconSearch } from "@/components/ui/icons";
import { IconDash } from "@/components/ui/icons";
import { IconCarretUp } from "@/components/ui/icons";
import { IconInfo } from "@/components/ui/icons";
import { IconPin } from "@/components/ui/icons";
import { IconChange } from "@/components/ui/icons";
import { IconNewUser } from "@/components/ui/icons";
import { IconClose } from "@/components/ui/icons";
import { IconClock } from "@/components/ui/icons";
import { IconChevronLeft } from "@/components/ui/icons";
import { IconChevronRight } from "@/components/ui/icons";
import { IconLink } from "@/components/ui/icons";
import { IconFilter } from "@/components/ui/icons";
import { IconPlus } from "@/components/ui/icons";
import { IconProgram } from "@/components/ui/icons";
import { IconMenu } from "@/components/ui/icons";
import TextInput from "./components/inputs/TextInput.vue";
import ListCard from "./components/ui/cards/ListCard.vue";
import apiClient from "./services/api/api_client.js";


const movies = ref(null);

onMounted(async () => {
  // const urlProgramacao = "https://api.festivaldorio.com.br/schedules/xml/programacao"
  // const XMLdata = await apiClient.get(urlProgramacao)
  const urlPelicula = "https://api.festivaldorio.com.br/movies/xml/pelicula"
  const XMLdata = await apiClient.get(urlPelicula)
  const parser = new XMLParser();
  let jObj = parser.parse(XMLdata.data);
  console.log(jObj);
  movies.value = jObj.FMPDSORESULT.ROW
  console.log(movies.value);


  // if (!movies.value) {
  //   const data = await fetchMovies();
  //   if (data) movies.value = data.results;
  // }
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
