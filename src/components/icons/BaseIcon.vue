<script setup>
const { width, height, className, viewbox } = defineProps({
  width: { type: String, default: "20" },
  height: { type: String, default: "20" },
  className: { type: String, default: "text-neutrals-1000" },
  viewbox: { type: String, default: "0 0 20 20" },
  title: { type: String, default: "" }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    :width="width"
    :height="height"
    :viewBox="viewbox"
    fill="none"
    :aria-hidden="!title"
  >
    <title v-if="title">{{ title }}</title>
    <slot />
  </svg>
</template>

<style scoped></style>
