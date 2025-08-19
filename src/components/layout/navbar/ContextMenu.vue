<script setup>
import NavButtonContext from "@/components/ui/buttons/NavButtonContext.vue";
import { IconChange } from "@/components/ui/icons";
import { IconNewUser } from "@/components/ui/icons";
import { IconClock } from "@/components/ui/icons";
import { IconProgram } from "@/components/ui/icons";
</script>

<template>
  <div class="flex gap-800 px-400 py-200 lg:gap-1600 lg:py-800 lg:justify-center overflow-x-auto">
    <NavButtonContext class="flex-shrink-0" content="programação" route="/programming">
      <template #icon="{ active }">
        <IconProgram height="30px" width="30px" :active="active" />
      </template>
    </NavButtonContext>
    <NavButtonContext class="flex-shrink-0" content="Sessões com convidados">
      <template #icon="{ hovered }">
        <IconNewUser height="30px" width="30px" :active="hovered" />
      </template>
    </NavButtonContext>
    <NavButtonContext class="flex-shrink-0" content="Mudanças na programação">
      <template #icon="{ hovered }">
        <IconChange height="30px" width="30px" :active="hovered" />
      </template>
    </NavButtonContext>
    <NavButtonContext class="flex-shrink-0" content="Sessões ao ar livre">
      <template #icon="{ hovered }">
        <IconClock height="30px" width="30px" :active="hovered" />
      </template>
    </NavButtonContext>
  </div>
</template>

<style scoped></style>
