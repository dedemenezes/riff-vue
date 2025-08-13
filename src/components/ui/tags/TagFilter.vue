<script setup>
import { IconClose } from "@/components/ui/icons"
const { text } = defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <span
    class=" max-w-fit inline-flex items-center gap-100 px-200 py-100 border rounded-full border-neutrals-300 font-body text-xs text-neutrals-700 font-regular leading-[18px]"
  >{{ text }} <IconClose /></span>
</template>

<style scoped></style>
