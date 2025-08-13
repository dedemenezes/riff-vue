<script setup>
const { extraClasses } = defineProps({
  extraClasses: {
    type: String,
    default: ""
  }
})
</script>
<template>
  <div class="w-full px-3 mx-auto lg:max-w-4xl xl:max-w-7xl xxl:max-w-xxl"
    :class="extraClasses"
  >
    <slot />
  </div>
</template>
