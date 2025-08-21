<script setup lang="ts">
import { BaseButton } from "@/components/ui/buttons";
</script>

<template>
  <div class="bg-gradient-to-r from-magenta-600/40 to-orange-600/40 p-4">
    <div class="container mx-auto sm:max-w-full md:max-w-4xl">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <h2
            class="font-[family-name:var(--header-font)] text-[40px] font-semibold leading-[48px]"
          >
            Retrospectiva 2024
          </h2>
          <div class="h-[280px] md:h-[769px] w-full bg-black rounded-2xl"></div>
        </div>
        <div class="flex shrink-0 items-center">
          <p
            class="text-[32px] font-semibold leading-[38.4px] max-w-[360px]"
            style="text-shadow: 10px 10px 35px rgba(82, 81, 81, 0.1)"
          >
            Receba nossos informativos e fique por dentro das novidades do
            Festival do Rio
          </p>
          <BaseButton text="RioMarket" />
        </div>
      </div>
    </div>
  </div>
  <img src="../assets/pda-grad.svg" class="w-full" alt="" />
</template>

<style scoped></style>
