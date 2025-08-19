<script setup>
import { computed, ref } from 'vue'

import { useRoute } from 'vue-router';

import BodyStrongXs from '../typography/BodyStrongXs.vue';
const props = defineProps({
  content: { type: String, required: true },
  route: { type: String, default: '#' }
})
const isHovered = ref(false)
const handleMouseEnter = () => { isHovered.value = true }
const handleMouseLeave = () => { isHovered.value = false }

const isFocused = ref(false)
const handleFocus = () => { isFocused.value = true }
const handleBlur = () => { isFocused.value = false }

const isActive = computed(() => isHovered.value || isFocused.value)

const currentRoute = useRoute();
const isRouteActive = computed(() => currentRoute.path == props.route)
const isIconActive = computed(() => isActive.value || isRouteActive.value)
</script>

<template>
  <router-link
    :to="props.route"
    class=""
    :class="{ 'route-active-TEST': isRouteActive }"
    :aria-label="`Navegar para ${props.content}`"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <div class="flex flex-col items-center gap-200">
      <slot
        name="icon"
        :hovered="isHovered"
        :active="isIconActive"
        :routeActive="isRouteActive"
      />
      <BodyStrongXs class="text-center uppercase">{{ props.content }}</BodyStrongXs>
    </div>
  </router-link>
</template>
