<script setup>
import { NavButtonContext } from "@/components/common/buttons";
import { IconChange } from "@/components/common/icons";
import { IconNewUser } from "@/components/common/icons";
import { IconClock } from "@/components/common/icons";
import { IconProgram } from "@/components/common/icons";

const items = [
  { name: "programming", route: "/programming", component: IconProgram },
  { name: "sessoes_com_convidados", route: "/", component: IconNewUser },
  { name: "mudancas_na_programacao", route: "/", component: IconChange },
  { name: "sessoes_ao_ar_livre", route: "/", component: IconClock },
];
</script>

<template>
  <div
    class="flex gap-800 px-400 py-200 lg:gap-1600 lg:py-800 lg:justify-center overflow-x-auto"
  >
    <NavButtonContext
      v-for="item in items"
      :key="item"
      class="flex-shrink-0"
      :content="$t(`navigation.${item.name}`)"
      :route="item.route"
    >
      <template #icon="{ active }">
        <component
          :is="item.component"
          height="30px"
          width="30px"
          :active="active"
        />
      </template>
    </NavButtonContext>
  </div>
</template>

<style scoped></style>
