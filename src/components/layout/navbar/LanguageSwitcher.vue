<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  langs: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: 'pt'
  }
})

</script>

<template>
  <div class="languages flex items-center gap-400 text-neutrals-700"
       aria-label="language selection">
    <template v-for="lang in props.langs" :key="lang">
      <button
        class="font-body text-sm font-semibold leading-[19.6px] uppercase"
        :class="{ 'text-neutrals-900': modelValue === lang }"
        @click="emit('update:modelValue', lang)"
        :aria-label="`Alterar para ${lang.toUpperCase()}`"
        :aria-pressed="modelValue === lang"
      >
        {{ lang }}
      </button>
      <img v-if="lang !== props.langs.at(-1)" src="@assets/divisor.svg" alt="Divisor" aria-hidden="true" />
    </template>
  </div>
</template>
