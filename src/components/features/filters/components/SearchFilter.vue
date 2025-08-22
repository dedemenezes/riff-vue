<script setup>
import { computed } from "vue";
import { toRaw } from "vue";
import { IconClose,  } from "@/components/common/icons";
import TwContainer from "@/components/layout/TwContainer.vue";
import AccordionGroup from "@/components/base/accordion/AccordionGroup.vue";
import ComboboxComponent from "@/components/common/forms/components/ComboboxComponent.vue";

import DatePickerComponent from "@/components/common/forms/components/DatePickerComponent.vue";
import SelectComponent from "@/components/common/forms/components/SelectComponent.vue";
import { generateTimeOptions } from "@/components/features/filters/composables/useTimeOptions";
import { cleanObject } from "@/utils/helpers/objectHelpers";
import { collection, showcases } from "@/lib/fakeData"
import FilterActions from "@/components/features/filters/components/FilterActions.vue";


const closeMenu = () => {
  emit('close-filter-menu', false)
};

const timeOptions = computed(() => generateTimeOptions());


const props = defineProps({
  modelValue: { type: Object, required: true }
})

const emit = defineEmits(["filtersApplied", "filtersCleared", "close-filter-menu", "update:modelValue"]);

const updateField = (key, value) => {
  emit("update:modelValue", {...props.modelValue, [key]: value});
}

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

      <div class="flex-grow flex flex-col space-y-800 overflow-y-auto">
        <AccordionGroup
          :text="$t('filter.date')"
          :isOpen="props.modelValue.date != null"
        >
          <template v-slot:content>
            <div class="pt-400">
              <DatePickerComponent
                :modelValue="props.modelValue.date"
                @update:modelValue="val => updateField('date', val)"
                />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.time')"
          :isOpen="props.modelValue.startTime != null || props.modelValue.endTime != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <div class="flex items-center gap-400">
                <SelectComponent
                  class="m-400"
                  :modelValue="props.modelValue.startTime"
                  @update:modelValue="val => updateField('startTime', val)"
                  :options="timeOptions"
                />
                <SelectComponent
                  class="m-400"
                  :modelValue="props.modelValue.endTime"
                  @update:modelValue="val => updateField('endTime', val)"
                  :options="timeOptions"
                />
              </div>
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.mostra')"
          :isOpen="props.modelValue.mostra != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :with-icon="true"
                :collection="showcases"
                :modelValue="props.modelValue.mostra"
                @update:modelValue="val => updateField('mostra', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.cinema')"
          :isOpen="props.modelValue.cinema != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.cinema"
                @update:modelValue="val => updateField('cinema', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.genero')"
          :isOpen="props.modelValue.genero != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.genero"
                @update:modelValue="val => updateField('genero', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.pais')"
          :isOpen="props.modelValue.pais != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.pais"
                @update:modelValue="val => updateField('pais', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.direcao')"
          :isOpen="props.modelValue.direcao != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="collection"
                :modelValue="props.modelValue.direcao"
                @update:modelValue="val => updateField('direcao', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.elenco')"
          :isOpen="props.modelValue.elenco != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.elenco"
                @update:modelValue="val => updateField('elenco', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.selo')"
          :isOpen="props.modelValue.selo != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.selo"
                @update:modelValue="val => updateField('selo', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.festivais')"
          :isOpen="props.modelValue.festivais != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.festivais"
                @update:modelValue="val => updateField('festivais', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.premios')"
          :isOpen="props.modelValue.premios != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.premios"
                @update:modelValue="val => updateField('premios', val)"
              />
            </div>
          </template>
        </AccordionGroup>
        <AccordionGroup
          :text="$t('filter.palavras_chaves')"
          :isOpen="props.modelValue.palavrasChaves != null"
        >
          <template v-slot:content>
            <div class="pt-400 overflow-hidden">
              <ComboboxComponent
                :collection="showcases"
                :modelValue="props.modelValue.palavrasChaves"
                @update:modelValue="val => updateField('palavrasChaves', val)"
              />
            </div>
          </template>
        </AccordionGroup>
      </div>

      <div
        class="shrink-0 py-400 actions sticky bottom-0 bg-white-transp-1000 z-10"
      >
      <FilterActions @clear="clearAllFilters" @apply="applyFilters" :hasActiveFilters="hasActiveFilters" />
      </div>
    </div>
  </TwContainer>
</template>
