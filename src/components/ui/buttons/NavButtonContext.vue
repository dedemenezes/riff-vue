<script setup>
import { computed, ref } from 'vue'
import BodyStrongXs from '../typography/BodyStrongXs.vue';
const props = defineProps({
  content: { type: String, required: true },
  route: { type: String, default: '#' }
})
const isHovered = ref(false)
const isFocused = ref(false)

const isActive = computed(() => isHovered.value || isFocused.value)

</script>

<template>
  <a
    :href="props.route"
    class=""
    :aria-label="`Navegar para ${props.content}`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <div class="flex flex-col items-center gap-200">
      <slot name="icon" :hovered="isActive" />
      <BodyStrongXs class="text-center uppercase">{{ props.content }}</BodyStrongXs>
    </div>
  </a>
</template>
