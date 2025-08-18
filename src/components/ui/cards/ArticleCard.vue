<script setup>
import { computed } from "vue";

import OverLine from "@/components/ui/typography/OverLine.vue";
import HeaderSmall from "@/components/ui/typography/HeaderSmall.vue";
import BodyRegular from "@/components/ui/typography/BodyRegular.vue";

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary','secondary','simple'].includes(value)
  },
  backgroundImage: {
    type: String,
    required: true
  },
  heightClass: {
    type: String,
    default: ""
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true }
})

const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundImage})`,
  ...(props.variant === 'secondary' && {
    minHeight: '182px',
    maxHeight: '182px'
  })
}));


</script>

<template>
  <div class="flex flex-col gap-y-200" :class="heightClass">
    <div class="flex-grow self-stretch bg-no-repeat bg-cover bg-center rounded-200"
      :style="backgroundImageStyle">
    </div>
    <div v-if="date && category" class="flex gap-x-200 items-center">
      <OverLine>
        {{ date }}
      </OverLine>
      <img src="@assets/divisor.svg" alt="divisor" style="height: 16px;">
      <OverLine>
        {{ category }}
      </OverLine>
    </div>
    <HeaderSmall>
      {{ props.title }}
    </HeaderSmall>
    <BodyRegular v-if="props.variant === 'primary'">
      {{ props.content }}
    </BodyRegular>
  </div>
</template>

<style scoped></style>
