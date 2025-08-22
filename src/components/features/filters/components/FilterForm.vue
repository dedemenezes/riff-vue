<script setup>
import { computed } from "vue";
import AccordionGroup from "@/components/base/accordion/AccordionGroup.vue";
import ComboboxComponent from "@/components/common/forms/components/ComboboxComponent.vue";
import DatePickerComponent from "@/components/common/forms/components/DatePickerComponent.vue";
import SelectComponent from "@/components/common/forms/components/SelectComponent.vue";
import { collection, showcases } from "@/lib/fakeData"
import { generateTimeOptions } from "@/components/features/filters/composables/useTimeOptions";



const props = defineProps({
  modelValue: { type: Object, required: true }
})
const emit = defineEmits(["update:modelValue"])
const updateField = (key, value) => {
  emit("update:modelValue", {...props.modelValue, [key]: value});
}
const timeOptions = computed(() => generateTimeOptions());

</script>

<template>
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
</template>

<style scoped></style>
