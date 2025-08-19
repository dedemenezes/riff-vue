<script setup>
import SponsorHeader from "@/components/layout/headers/SponsorHeader.vue";
import NavbarMain from "@/components/layout/navbar/NavbarMain.vue";
import NavbarSecundary from "@/components/layout/navbar/NavbarSecundary.vue";
</script>

<template>
  <SponsorHeader class="bg-azul-400" />
  <NavbarMain />
  <NavbarSecundary />
  <RouterView />
</template>

<style scoped></style>
