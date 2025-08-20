<script setup>
import { ref } from 'vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = defineProps({
  options: { type: Array, required: true },
  placeholder: { type: String, default: "placeholder.select" },
  label: { type: String, default: undefined }
})

const value = ref()
</script>

<template>
  <Select>
    <SelectTrigger class="m-100">
      <SelectValue :placeholder="$t(props.placeholder)" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ props.label }}</SelectLabel>
        <SelectItem v-for="option in props.options" :key="option.value" v-model="value" :value="option.value">
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
