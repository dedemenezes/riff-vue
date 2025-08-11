<script setup>
import { ref } from "vue";

import BaseButton from "../buttons/BaseButton.vue"
const currentLanguage = ref('pt')

const switchLanguage = (lang) => {
  currentLanguage.value = lang
}
</script>

<template>
  <nav class="p-400 mx-auto lg:max-w-7xl flex items-start md:items-center justify-between">
    <div class="flex flex-col md:flex-row md:gap-400 items-start md:items-center">
      <!-- logo link -->
      <a href="#" class="focus:outline-2 focus:-outline-offset-2 focus:outline-laranja-600">
        <img class="py-200" src="../../assets/festival-logo.svg" alt="Logo do Festival do Rio" width="221" />
      </a>
      <!-- divisor -->
      <div class="hidden md:block">
        <img src="../../assets/divisor.svg" alt="divisor" />
      </div>
      <!-- festival header -->
      <div class="festival-dates py-100">
        <p class="font-body text-neutrals-900 text-sm font-regular leading-[21px] uppercase">rio international film festival</p>
        <p class="font-body text-md font-bold leading-[22.4px]">2 - 12 OUT 2025</p>
      </div>
    </div>
    <!-- mobile button -->
    <div class="md:hidden pt-100" >
      <button class="text-neutrals-900 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-laranja-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.55078 24.5C5.55078 24.2348 5.65614 23.9804 5.84367 23.7929C6.03121 23.6054 6.28556 23.5 6.55078 23.5H26.5508C26.816 23.5 27.0704 23.6054 27.2579 23.7929C27.4454 23.9804 27.5508 24.2348 27.5508 24.5C27.5508 24.7652 27.4454 25.0196 27.2579 25.2071C27.0704 25.3946 26.816 25.5 26.5508 25.5H6.55078C6.28556 25.5 6.03121 25.3946 5.84367 25.2071C5.65614 25.0196 5.55078 24.7652 5.55078 24.5ZM5.55078 16.5C5.55078 16.2348 5.65614 15.9804 5.84367 15.7929C6.03121 15.6054 6.28556 15.5 6.55078 15.5H26.5508C26.816 15.5 27.0704 15.6054 27.2579 15.7929C27.4454 15.9804 27.5508 16.2348 27.5508 16.5C27.5508 16.7652 27.4454 17.0196 27.2579 17.2071C27.0704 17.3946 26.816 17.5 26.5508 17.5H6.55078C6.28556 17.5 6.03121 17.3946 5.84367 17.2071C5.65614 17.0196 5.55078 16.7652 5.55078 16.5ZM5.55078 8.5C5.55078 8.23478 5.65614 7.98043 5.84367 7.79289C6.03121 7.60536 6.28556 7.5 6.55078 7.5H26.5508C26.816 7.5 27.0704 7.60536 27.2579 7.79289C27.4454 7.98043 27.5508 8.23478 27.5508 8.5C27.5508 8.76522 27.4454 9.01957 27.2579 9.20711C27.0704 9.39464 26.816 9.5 26.5508 9.5H6.55078C6.28556 9.5 6.03121 9.39464 5.84367 9.20711C5.65614 9.01957 5.55078 8.76522 5.55078 8.5Z" />
        </svg>
      </button>
    </div>

    <!-- navbar actions -->
    <div class="hidden md:flex items-center gap-1200">
      <img src="../../assets/search-icon.svg" alt="Lupa" />
      <div class="languages flex items-center gap-400 text-neutrals-700">
        <button
          class="font-body text-sm font-semibold leading-[19.6px] uppercase"
          :class="{ 'text-neutrals-900': currentLanguage === 'pt' }"
          @click="switchLanguage('pt')"
        >
          pt
        </button>

        <img src="../../assets/divisor.svg" alt="Divisor" />

        <button
          class="font-body text-sm font-semibold leading-[19.6px] uppercase"
          :class="{ 'text-neutrals-900': currentLanguage === 'en' }"
          @click="switchLanguage('en')"
        >
          en
        </button>
      </div>
      <BaseButton text="RioMarket"
                  colors="text-white bg-vermelho-600 hover:bg-vermelho-400 focus:outline-2 focus:outline-offset-2 focus:outline-vermelho-400 active:bg-vermelho-400"/>
    </div>
  </nav>
</template>

<style scoped></style>
