<script setup>
const { fontSize, textColor } = defineProps({
  fontSize: {
    type: String,
    default: "text-xl",
  },
  textColor: {
    type: String,
    default: "text-neutrals-1000",
  },
});

const baseClasses = "font-heading font-semibold  leading-[120%]";
</script>

<template>
  <h1 :class="[baseClasses, fontSize, textColor]"><slot /></h1>
</template>
