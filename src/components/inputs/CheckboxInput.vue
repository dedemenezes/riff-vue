<script setup>
import { computed } from 'vue';
import { IconCheck } from '@/components/ui/icons'
// Props
const props = defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null },
  disabled: { type: Boolean, default: false },
});

const checkedColorClass = computed(() => {
  const colors = {
    default: 'checked:bg-white-transp-1000 checked:border-neutrals-900'
  }
  return colors.default
})
const modelValue = defineModel({ type: Boolean, default: false });

const checkboxId = computed(() => props.id || `checkbox-${Math.random().toString(36).slice(2, 9)}`);

</script>

<template>
  <div class="inline-flex items-center gap-200">
    <label
      :for="checkboxId"
      class="inline-flex items-center gap-200 relative"
      :class="disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'"
    >
      <!-- focus:outline-none focus:ring-2 focus:ring-neutrals-600 -->
      <input
        :id="checkboxId"
        type="checkbox"
        role="checkbox"
        class="peer appearance-none h-[20px] w-[20px] border cursor-pointer border-neutrals-600 rounded-100 disabled:cursor-not-allowed"
        :class="[checkedColorClass]"
        :disabled="disabled"
        v-model="modelValue"
        :aria-checked="modelValue"
      />
      <IconCheck class="opacity-0 peer-checked:opacity-100 pointer-events-none absolute" color="text-neutrals-900"/>
      <span class="text-gray-900 font-body text-sm leading-[150%]">{{ props.label }}</span>
    </label>

  </div>


</template>

<style scoped></style>
