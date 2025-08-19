<script setup>
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <h2
    class="font-heading text-lg text-neutrals-900 font-semibold leading-[28.8px]"
  >
    {{ props.title }}
  </h2>
</template>

<style scoped></style>
