<script setup>
import {
  DateFormatter,
  // DateValue,

  getLocalTimeZone,
} from "@internationalized/date"
import { CalendarIcon } from "lucide-vue-next"

import { watch, ref } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const df = new DateFormatter(locale.value, {
  dateStyle: "long",
})

const props = defineProps({
  modelValue: { type: Object, default: null }
})
// Emit definition for v-model support
const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

// Watch external changes and update internal state
watch(() => props.modelValue, (newValue) => {
  value.value = newValue
})

// Watch internal changes and notify parent
watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})


</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-[-webkit-fill-available] m-100 justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : $t("datepicker.pick_date") }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" :locale="locale" initial-focus />
    </PopoverContent>
  </Popover>
</template>
