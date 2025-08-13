<script setup>
const { fontSize } = defineProps({
  fontSize: {
    type: String,
    default: 'text-xl'
  }
})

const baseClasses = "text-neutrals-1000 font-heading font-semibold  leading-[120%]"

</script>

<template>
  <h1
    :class="[baseClasses, fontSize]"
  ><slot /></h1>
</template>

<style scoped>
</style>
