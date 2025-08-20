<script setup>
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

// const frameworks = [
//   { value: 'next.js', label: 'Next.js' },
//   { value: 'sveltekit', label: 'SvelteKit' },
//   { value: 'nuxt', label: 'Nuxt' },
//   { value: 'remix', label: 'Remix' },
//   { value: 'astro', label: 'Astro' },
// ]

const open = ref(false)
const value = ref('')

const props = defineProps({
  collection: { type: Array, required: true }
})
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between py-[20px]"
      >
        {{ value ? props.collection.find((item) => item.value === value)?.label : 'Select item...' }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="min-w-[var(--reka-popper-anchor-width)] p-0">
      <Command v-model="value">
        <CommandInput placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="item in collection"
              :key="item.value"
              :value="item.value"
              @select="open = false"
            >
              <Check
                :class="cn(
                  'mr-2 h-4 w-4',
                  value === item.value ? 'opacity-100' : 'opacity-0',
                )"
              />
              {{ item.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
