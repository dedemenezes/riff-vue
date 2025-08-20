<script setup>
import SponsorHeader from "@/components/layout/headers/SponsorHeader.vue";
import NavbarMain from "@/components/layout/navbar/NavbarMain.vue";
import NavbarSecundary from "@/components/layout/navbar/NavbarSecundary.vue";
import { useI18n } from "@/composables/useI18n";

const { locale } = useI18n();
</script>

<template>
  <div :lang="locale">
    <SponsorHeader class="bg-azul-400" />
    <NavbarMain />
    <NavbarSecundary />
    <RouterView />
  </div>
</template>

<style scoped></style>
