<script setup>
const props = defineProps({
  color: { type: String, default: 'text-neutrals-900' }
})
</script>
<template>
  <p
    :class="props.color"
    class="font-body font-medium text-2xs leading-[160%] tracking-widest  uppercase">
    <slot />
  </p>
</template>
