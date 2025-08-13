<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<template>
  <h1
    class="text-neutrals-900 font-heading font-semibold text-2xl leading-[38.4px]"
  >{{ title }}</h1>
</template>

<style scoped>
</style>
