<script setup>
import { ref } from "vue";

import BaseButton from "@my_components/buttons/BaseButton.vue"
import LanguageSwitcher from "@my_components/navbar/LanguageSwitcher.vue";
import MobileMenu from "@my_components/navbar/MobileMenu.vue";

// v-model for LanguageSwitcher
const currentLanguage = ref('pt')


</script>

<template>
  <nav class="p-400 mx-auto lg:max-w-7xl flex items-start md:items-center justify-between"
       role="navigation"
       aria-label="Navegação primária">
    <div class="flex flex-col md:flex-row md:gap-400 items-start md:items-center">
      <!-- logo link -->
      <a href="#" class="focus:outline-2 focus:-outline-offset-2 focus:outline-laranja-600">
        <img class="py-200" src="@assets/festival-logo.svg" alt="Logo do Festival do Rio" width="221" />
      </a>
      <!-- divisor -->
      <div class="hidden md:block">
        <img src="@assets/divisor.svg" alt="divisor" aria-hidden="true" />
      </div>
      <!-- festival header -->
      <div class="festival-dates py-100">
        <p class="font-body text-neutrals-900 text-sm font-regular leading-[21px] uppercase">rio international film festival</p>
        <p class="font-body text-md font-bold leading-[22.4px]">2 - 12 OUT 2025</p>
      </div>
    </div>
    <!-- mobile TOGGLER -->
    <MobileMenu />

    <!-- navbar actions -->
    <div class="hidden md:flex items-center gap-1200">
      <img src="@assets/search-icon.svg" alt="Lupa" aria-hidden="true" />
      <LanguageSwitcher :langs="['pt', 'en']" v-model="currentLanguage" />
      <BaseButton text="RioMarket"
                  colors="text-white bg-vermelho-600 hover:bg-vermelho-400 focus:outline-2 focus:outline-offset-2 focus:outline-vermelho-400 active:bg-vermelho-400"/>
    </div>
  </nav>
</template>

<style scoped>
</style>
