<script setup>
import { computed } from 'vue';
const props = defineProps({
  width: { type: String, default: "20" },
  height: { type: String, default: "20" },
  className: { type: String, default: "text-neutrals-1000" },
  viewbox: { type: String, default: "0 0 20 20" },
  title: { type: String, default: "" },
  active: { type: Boolean, default: false }
});

// Generate unique gradient ID to avoid conflicts
const gradientId = computed(() => `gradient-${Math.random().toString(36).substr(2, 9)}`)

const fillColor = computed(() => {
  return props.active ? `url(#${gradientId.value})` : 'currentColor'
})

</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="props.className"
    :width="props.width"
    :height="props.height"
    :viewBox="props.viewbox"
    fill="none"
    :aria-hidden="!title"
  >
    <linearGradient
      v-if="props.active"
      :id="gradientId"
      x1="0.5"
      y1="15"
      x2="29.5"
      y2="15"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FF007F"/>
      <stop offset="1" stop-color="#FF7F00"/>
    </linearGradient>

    <title v-if="props.title">{{ props.title }}</title>

    <slot :fill="fillColor" />
  </svg>
</template>

<style scoped>
/* Add hover effect for inactive icons */
svg:not(.active):hover {
  color: transparent;
}

svg:not(.active):hover :deep(path) {
  fill: url(#hover-gradient) !important;
}

/* Global hover gradient - you might want to move this to a global style */
svg:hover defs {
  background: linear-gradient(90deg, #FF007F 0%, #FF7F00 100%);
}
</style>
