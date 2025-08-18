<script setup>
import BaseHeader from './BaseHeader.vue';
const props = defineProps({
  color: { type: String, default: 'text-neutrals-900' }
})
</script>

<template>
  <BaseHeader :text-color="props.color" font-size="text-lg"><slot /></BaseHeader>
</template>

<style scoped></style>
