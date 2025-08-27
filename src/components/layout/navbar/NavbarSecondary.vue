<script setup>
import { BaseButton } from "@/components/common/buttons";

const mainItems = [
  "programming",
  "edition2024",
  "aboutUs",
  "news",
  "media",
  "information",
];

const secondaryItems = [
  { name: "press", tag: "button" },
  { name: "archive", tag: "a", href: "https://www.globo.com" },
  { name: "registrations", tag: "button" },
  { name: "contact", tag: "button" },
];
</script>

<template>
  <div
    class="p-400 lg:pb-0 mx-auto lg:max-w-7xl hidden md:flex items-center justify-between"
  >
    <ul class="flex flex-grow gap-600 justify-start items-center me-400 h-1600">
      <li v-for="item in mainItems" :key="item" class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
          >{{ $t(`navigation.${item}`) }}</BaseButton
        >
      </li>
    </ul>
    <ul class="hidden md:flex items-center space-x-400">
      <li v-for="item in secondaryItems" :key="item">
        <BaseButton :as="item.tag" :href="item.href" variant="gray" size="xs">{{
          $t(`navigation.${item.name}`)
        }}</BaseButton>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
