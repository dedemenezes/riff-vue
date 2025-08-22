<script setup>
// import { isEqual } from "lodash-es";
import { computed, ref } from "vue";
import { toRaw } from "vue";
import { IconClose,  } from "@/components/common/icons";
import TwContainer from "@/components/layout/TwContainer.vue";
import AccordionGroup from "@/components/base/accordion/AccordionGroup.vue";
import ComboboxComponent from "@/components/common/forms/components/ComboboxComponent.vue";
import { BaseButton } from "@/components/common/buttons";
import { ButtonText } from "@/components/common/buttons";
import DatePickerComponent from "@/components/common/forms/components/DatePickerComponent.vue";
import SelectComponent from "@/components/common/forms/components/SelectComponent.vue";
import { generateTimeOptions } from "@/components/features/filters/composables/useTimeOptions";
import { useQuery } from "@tanstack/vue-query";
import { cleanObject } from "@/utils/helpers/objectHelpers";
import { collection, showcases } from "@/lib/fakeData"

const props = defineProps({
  isMenuOpen: { type: Boolean, default: false }
})

const submittedFilters = ref({});

const closeMenu = () => {
  emit('close-filter-menu', false)
};

const timeOptions = computed(() => generateTimeOptions());

const filters = ref({
  date: null,
  startTime: null,
  endTime: null,
  mostra: null,
  cinema: null,
  genero: null,
  pais: null,
  direcao: null,
  elenco: null,
  selo: null,
  festivais: null,
  premios: null,
  palavrasChaves: null,
});

const emit = defineEmits(["filtersApplied", "filtersCleared", "close-filter-menu"]);

const applyFilters = async () => {
  const rawFilters = toRaw(filters.value);
  const cleanedFilters = cleanObject(rawFilters);

  if (cleanedFilters.date) {
    cleanedFilters.date = cleanedFilters.date.toString();
  }
  submittedFilters.value = cleanedFilters;
  await refetchFilters();
  console.log("Results:", filteredData.value);
  emit("filtersApplied", submittedFilters.value);
  closeMenu();
};

const clearAllFilters = () => {
  Object.keys(filters.value).forEach((key) => {
    filters.value[key] = null;
  });

  emit("filtersCleared");
};

const updateFilters = (newFilters) => {
  submittedFilters.value = newFilters;
  // we need to update the filters ref object so th ui also reflect the qury removal
  Object.keys(filters.value).forEach((key) => {
    filters.value[key] = Object.prototype.hasOwnProperty.call(newFilters, key)
      ? newFilters[key]
      : null;
  });

  refetchFilters();
};

defineExpose({
  updateFilters,
});

const hasActiveFilters = computed(() => {
  return Object.values(filters.value).some((value) => value !== null);
});

// const hasFiltersChanged = computed(() => {
//   const rawFilters = cleanObject(toRaw(filters.value));
//   const rawSubmitted = cleanObject(toRaw(submittedFilters.value));
//   return !isEqual(rawFilters, rawSubmitted);
// });

const fetchFilteredResults = async (filters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Success",
    filtersUsed: filters,
    results: [
      { id: 1, name: "Fake Movie 1" },
      { id: 2, name: "Fake Movie 2" },
    ],
  };
};

const {
  data: filteredData,
  isFetching, /*eslint-disable-line no-unused-vars */
  refetch: refetchFilters,
} = useQuery({
  queryKey: ["filtered-results", submittedFilters],
  queryFn: () => fetchFilteredResults(submittedFilters.value),
  enabled: false,
});
</script>

<template>
  <transition name="slide-left">
    <div
      v-if="props.isMenuOpen"
      style="margin-top: 0"
      class="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-full h-[100vh] right-0 shadow-lg overflow-y-auto"
    >
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
              :isOpen="filters.date != null"
            >
              <template v-slot:content>
                <div class="pt-400">
                  <DatePickerComponent v-model="filters.date" />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.time')"
              :isOpen="filters.time != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <div class="flex items-center gap-400">
                    <SelectComponent
                      class="m-400"
                      v-model="filters.startTime"
                      :options="timeOptions"
                    />
                    <SelectComponent
                      class="m-400"
                      v-model="filters.endTime"
                      :options="timeOptions"
                    />
                  </div>
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.mostra')"
              :isOpen="filters.mostra != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :with-icon="true"
                    :collection="showcases"
                    v-model="filters.mostra"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.cinema')"
              :isOpen="filters.cinema != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.cinema"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.genero')"
              :isOpen="filters.genero != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.genero"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.pais')"
              :isOpen="filters.pais != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.pais"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.direcao')"
              :isOpen="filters.direcao != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="collection"
                    v-model="filters.direcao"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.elenco')"
              :isOpen="filters.elenco != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.elenco"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.selo')"
              :isOpen="filters.selo != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.selo"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.festivais')"
              :isOpen="filters.festivais != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.festivais"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.premios')"
              :isOpen="filters.premios != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.premios"
                  />
                </div>
              </template>
            </AccordionGroup>
            <AccordionGroup
              :text="$t('filter.palavras_chaves')"
              :isOpen="filters.palavrasChaves != null"
            >
              <template v-slot:content>
                <div class="pt-400 overflow-hidden">
                  <ComboboxComponent
                    :collection="showcases"
                    v-model="filters.palavrasChaves"
                  />
                </div>
              </template>
            </AccordionGroup>
          </div>

          <div
            class="shrink-0 py-400 actions sticky bottom-0 bg-white-transp-1000 z-10"
          >
            <div class="flex justify-between">
              <!-- <button class="flex-1">Limpar tudo</button> -->
              <ButtonText
                tag="button"
                text="Limpar tudo"
                @click="clearAllFilters"
                :disabled="!hasActiveFilters"
              />
              <!-- <button class="flex-1 bg-black text-white">Aplicar filtros</button> -->
              <BaseButton
                variant="dark"
                @click="applyFilters"
                :disabled="!hasActiveFilters"
                >Aplicar filtros</BaseButton
              >
            </div>
          </div>
        </div>
      </TwContainer>
    </div>
  </transition>
</template>

<style scoped>
/* transition vue component animation classes */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
