<script setup>
const { content } = defineProps({
  content: { type: String, required: true }
})
</script>

<template>
  <p
    class="text-neutrals-900 font-body text-xl font-regular leading-[30px]"
  >{{ content }}</p>
</template>

<style scoped>
</style>
