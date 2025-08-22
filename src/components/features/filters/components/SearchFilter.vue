<script setup>
import { computed } from "vue";
import { toRaw } from "vue";
import { IconClose,  } from "@/components/common/icons";
import TwContainer from "@/components/layout/TwContainer.vue";
import { cleanObject } from "@/utils/helpers/objectHelpers";
import FilterActions from "@/components/features/filters/components/FilterActions.vue";
import FilterForm from "./FilterForm.vue";


const closeMenu = () => {
  emit('close-filter-menu', false)
};

const props = defineProps({
  modelValue: { type: Object, required: true }
})

const emit = defineEmits(["filtersApplied", "filtersCleared", "close-filter-menu", "update:modelValue"]);

const applyFilters = () => {
  const rawFilters = toRaw(props.modelValue);
  const cleanedFilters = cleanObject(rawFilters);

  emit("filtersApplied", cleanedFilters)
  closeMenu()
};

const clearAllFilters = () => {
  const cleared = Object.fromEntries(Object.keys(props.modelValue).map(key => [key, null]))
  emit("update:modelValue", cleared)
  emit("filtersCleared", cleared)
};

const hasActiveFilters = computed(() => {
  return Object.values(props.modelValue).some((value) => value !== null);
});
</script>

<template>
  <TwContainer>
    <div class="flex flex-col">
      <div
        class="shrink-0 flex justify-between items-center py-400 sticky top-0 bg-white-transp-1000 z-10"
      >
        <p class="text-header-sm text-primary uppercase">
          {{ $t("filtro", 2) }}
        </p>
        <button @click="closeMenu" class="text-neutrals-900">
          <IconClose height="32px" width="32px" />
        </button>
      </div>

      <FilterForm
        :modelValue="props.modelValue"
        @update:modelValue="emit('update:modelValue', $event)"
      />

      <div
        class="shrink-0 py-400 actions sticky bottom-0 bg-white-transp-1000 z-10"
      >
        <FilterActions @clear="clearAllFilters" @apply="applyFilters" :hasActiveFilters="hasActiveFilters" />
      </div>
    </div>
  </TwContainer>
</template>
