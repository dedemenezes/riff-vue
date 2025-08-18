<script setup>
import { ref } from 'vue';

import TagMostra from '../tags/TagMostra.vue';
import TagScreening from '../tags/TagScreening.vue';
import BodyRegular from '../typography/BodyRegular.vue';
import HeaderSmall from '../typography/HeaderSmall.vue';
import OverLine from '../typography/OverLine.vue';
import { IconPin } from '@/components/ui/icons';

// Hover state
const isHovered = ref(false);
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
         src="https://leiturafilmica.com.br/wp-content/uploads/2018/09/saneamento-basico-o-filme-1024x575.png"
         alt="movie-name poster"
         width="100%"
         class="rounded-200"
       >
       <!-- Overlay -->
      <div
        class="absolute inset-0 rounded-200 pointer-events-none"
        style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.30) 36.54%, rgba(0, 0, 0, 0.45) 100%);"
      ></div>
      <!-- tag -->
      <TagMostra class="absolute top-0 left-0 rounded-tl-200" variant="gala-abertura" text="Gala de Abertura" />

      <div class="content absolute bottom-250 left-250 flex flex-col gap-[5px]">
        <!-- movie title -->
        <HeaderSmall color="text-white-transp-1000">
        Saneamento Básico
        </HeaderSmall>
        <div class="flex items-center gap-200">
          <OverLine color="text-white-transp-1000">ESPANHA</OverLine>
          <img src="@assets/divisor.svg" alt="divisor" height="16px" width="1px">
          <OverLine color="text-white-transp-1000">FIC</OverLine>
          <img src="@assets/divisor.svg" alt="divisor" height="16px" width="1px">
          <OverLine color="text-white-transp-1000">114'</OverLine>
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
        <BodyRegular>
          Cine Odeon - CCLSR - Centro
        </BodyRegular>
      </div>
      <div class="flex items-center space-x-200">
        <TagScreening time="21h30" state="disabled" />
        <TagScreening time="23h45" />
      </div>
     </div>
  </div>
</template>

<style scoped>
</style>
