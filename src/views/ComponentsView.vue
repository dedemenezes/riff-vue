<script setup>
import { IconCheck } from "@/components/common/icons";
import { IconSearch } from "@/components/common/icons";
import { IconDash } from "@/components/common/icons";
import { IconCarretUp } from "@/components/common/icons";
import { IconInfo } from "@/components/common/icons";
import { IconPin } from "@/components/common/icons";
import { IconChange } from "@/components/common/icons";
import { IconNewUser } from "@/components/common/icons";
import { IconClose } from "@/components/common/icons";
import { IconClock } from "@/components/common/icons";
import { IconChevronLeft } from "@/components/common/icons";
import { IconChevronRight } from "@/components/common/icons";
import { IconLink } from "@/components/common/icons";
import { IconFilter } from "@/components/common/icons";
import { IconPlus } from "@/components/common/icons";
import { IconProgram } from "@/components/common/icons";
import { IconMenu } from "@/components/common/icons";
import TextInput from "@/components/common/forms/inputs/TextInput.vue";
import TagMostra from "@/components/common/tags/TagMostra.vue";
import TagScreening from "@/components/common/tags/TagScreening.vue";
import TagFilter from "@/components/common/tags/TagFilter.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import { ref } from "vue";
import CheckboxInput from "@/components/common/forms/inputs/CheckboxInput.vue";
const inputValue = ref("Flamengo");
const inputCheckboxValue = ref(false);
</script>

<template>
  <TwContainer>
    <p>{{ inputValue }}</p>
    <p>Checkbox: {{ inputCheckboxValue }}</p>
    <TextInput
      id="flamengo"
      placeholder="Your email"
      v-model:value="inputValue"
    />
    <TextInput id="flamengo" placeholder="Your email" />
    <TextInput disabled="true" id="flamengo" placeholder="Your email" />
    <div class="flex space-x-200">
      <CheckboxInput
        v-model="inputCheckboxValue"
        label="Legenda"
        id="form-12"
      />
      <CheckboxInput label="Legenda" id="form-13" :disabled="true" />
    </div>
  </TwContainer>
  <TwContainer>
    <div class="flex justify-center space-x-200 mb-600">
      <IconClock />
      <IconClock active="true" />
      <IconProgram />
      <IconProgram active="true" />
      <IconNewUser />
      <IconNewUser active="true" />
      <IconChange />
      <IconChange active="true" />
      <IconLink />
      <IconLink active="true" />
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
    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
      <TagMostra
        mode="filled"
        variant="gala-abertura"
        text="Gala de Abertura"
      />
      <TagMostra
        mode="outline"
        variant="gala-abertura"
        text="Gala de Abertura"
      />
      <TagMostra
        mode="filled"
        variant="gala-encerramento"
        text="Gala de Encerramento"
      />
      <TagMostra
        mode="outline"
        variant="gala-encerramento"
        text="Gala de Encerramento"
      />
      <TagMostra mode="filled" variant="cine-memoria" text="CinE MemóRIA" />
      <TagMostra mode="outline" variant="cine-memoria" text="CinE MemóRIA" />
      <TagMostra
        mode="filled"
        variant="midnight-movies"
        text="Midnight movies"
      />
      <TagMostra
        mode="outline"
        variant="midnight-movies"
        text="Midnight movies"
      />
      <TagMostra mode="filled" variant="expectativa" text="Expectativa" />
      <TagMostra mode="outline" variant="expectativa" text="Expectativa" />
      <TagMostra
        mode="filled"
        variant="premiere-brasil"
        text="Premiere-brasil"
      />
      <TagMostra
        mode="outline"
        variant="premiere-brasil"
        text="Premiere-brasil"
      />
      <TagMostra
        mode="filled"
        variant="premiere-latina"
        text="Premiere-latina"
      />
      <TagMostra
        mode="outline"
        variant="premiere-latina"
        text="Premiere-latina"
      />
      <TagMostra mode="filled" variant="resistencias" text="Resistencias" />
      <TagMostra mode="outline" variant="resistencias" text="Resistencias" />
      <TagMostra mode="filled" variant="itinerarios" text="Itinerarios" />
      <TagMostra mode="outline" variant="itinerarios" text="Itinerarios" />
      <TagMostra
        mode="filled"
        variant="classicos-cults"
        text="Classicos-cults"
      />
      <TagMostra
        mode="outline"
        variant="classicos-cults"
        text="Classicos-cults"
      />
      <TagMostra mode="filled" variant="panorama" text="Panorama" />
      <TagMostra mode="outline" variant="panorama" text="Panorama" />
      <TagMostra
        mode="filled"
        variant="cinema-capacete"
        text="Cinema-capacete"
      />
      <TagMostra
        mode="outline"
        variant="cinema-capacete"
        text="Cinema-capacete"
      />
      <TagScreening time="19h30" state="default" />
      <TagScreening time="19h30" state="active" />
      <TagScreening time="19h30" state="disabled" />
      <TagFilter text="Legenda" />
    </div>
  </TwContainer>

  <div class="grid grid-cols-3 gap-300">
    <!-- <ListCard v-for="movie in movies" :key="movie.id"  :movie /> -->
  </div>
</template>

<style scoped></style>
