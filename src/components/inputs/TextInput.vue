<script setup>
const props = defineProps({
  id: { type: [String], required: true },
  label: {type: String, default: null },
  name: {type: String, default: null },
  value: {type: String, default: undefined },
  placeholder: {type: String, default: undefined },
  disabled: {type: Boolean, default: false }
})

const emit = defineEmits(['update:value'])

const baseStyle = 'px-400 py-200 border border-neutrals-300 text-neutrals-900 rounded-100 text-sm leading-[150%] font-body placeholder-neutrals-400'
const disableStyle = 'disabled:bg-neutrals-300 disabled:placeholder-neutrals-600 disabled:text-neutrals-600 disabled:border-neutrals-300 disabled:shadow-none'
const focusStyle = 'focus:outline-none focus:border-neutrals-600'
</script>
<template>
  <div>
    <label v-if="props.label" :for="props.id">{{ props.label }}</label>
    <input type="text"
           :name="props.name || props.id"
           :id="props.id"
           :placeholder="props.placeholder"
           :disabled="props.disabled"
           :value="props.value"
           @input="emit('update:value', $event.target.value)"
           :class="[baseStyle, disableStyle, focusStyle]">
  </div>
</template>
