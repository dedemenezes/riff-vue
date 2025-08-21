<script setup>
import { isEqual } from 'lodash-es';
import { computed, ref } from "vue";
import { toRaw } from "vue";
import { IconFilter, IconClose, IconSearch } from "@/components/ui/icons"
import TwContainer from "@/components/layout/TwContainer.vue";
import AccordionGroup from "./accordion/AccordionGroup.vue";
import ComboboxComponent from "./ComboboxComponent.vue";
import { BaseButton } from "@/components/ui/buttons";
import { ButtonText } from "@/components/ui/buttons";
import DatePickerComponent from "./datepicker/DatePickerComponent.vue";
import SelectComponent from "./SelectComponent.vue";
import { generateTimeOptions } from "@/composables/useTimeOptions";
import { useQuery } from '@tanstack/vue-query'
import { cleanObject } from "@/composables/cleanObject";

const collection = [
  {value: "Joachim Trier", label: "Joachim Trier"},
  {value: "Lynne Ramsay", label: "Lynne Ramsay"},
  {value: "Isabel Joffily e Pedro Rossi", label: "Isabel Joffily e Pedro Rossi"},
  {value: "Julia Ducournau", label: "Julia Ducournau"},
  {value: "Marcio Reolon e Filipe Matzembacher", label: "Marcio Reolon e Filipe Matzembacher"},
  {value: "Lloyd Lee Choi", label: "Lloyd Lee Choi"},
  {value: "Bruno Jorge, Mariana Oliva e Renato Terra", label: "Bruno Jorge, Mariana Oliva e Renato Terra"},
  {value: "Françoise Ferraton", label: "Françoise Ferraton"},
  {value: "Natesh Hegde", label: "Natesh Hegde"},
  {value: "Delphine Coulin e Muriel Coulin", label: "Delphine Coulin e Muriel Coulin"},
  {value: "Maya Da-Rin", label: "Maya Da-Rin"},
  {value: "Luciano Zito", label: "Luciano Zito"},
  {value: "Anna Cornudella", label: "Anna Cornudella"},
  {value: "Daniel Bandeira", label: "Daniel Bandeira"},
  {value: "Mehrnoush Alia", label: "Mehrnoush Alia"},
  {value: "Adriana L. Dutra", label: "Adriana L. Dutra"},
  {value: "João Rosas", label: "João Rosas"},
  {value: "Vincent Carelli, Tatiana Almeida e Ernesto de Carvalho", label: "Vincent Carelli, Tatiana Almeida e Ernesto de Carvalho"},
  {value: "Vibeke Løkkeberg", label: "Vibeke Løkkeberg"},
  {value: "Vivian Qu", label: "Vivian Qu"},
  {value: "Tereza Nvotová", label: "Tereza Nvotová"},
  {value: "Luiz Bolognesi, Jean Cullen de Moura e Marcelo Fernandes de Moura", label: "Luiz Bolognesi, Jean Cullen de Moura e Marcelo Fernandes de Moura"},
  {value: "Luca Guadagnino", label: "Luca Guadagnino"},
  {value: "Aurélien Vernhes-Lermusiaux", label: "Aurélien Vernhes-Lermusiaux"},
  {value: "Eleanor Coppola, Fax Bahr e George Hickenlooper", label: "Eleanor Coppola, Fax Bahr e George Hickenlooper"},
  {value: "Ido Fluk", label: "Ido Fluk"},
  {value: "Carlos Fausto, Takumã Kuikuro e Leonardo Sette", label: "Carlos Fausto, Takumã Kuikuro e Leonardo Sette"},
  {value: "Emilie Blichfeldt", label: "Emilie Blichfeldt"},
  {value: "Ondřej Provazník", label: "Ondřej Provazník"},
  {value: "Estêvão Ciavatta", label: "Estêvão Ciavatta"},
  {value: "Ebs Burnough", label: "Ebs Burnough"},
  {value: " Sang-il Lee", label: " Sang-il Lee"},
  {value: "Pedro de Filippis", label: "Pedro de Filippis"},
  {value: "Hong Sang-soo", label: "Hong Sang-soo"},
  {value: "Philip Delaquis e Barbara Miller ", label: "Philip Delaquis e Barbara Miller "},
  {value: "Alexe Poukine", label: "Alexe Poukine"},
  {value: "Tati Franklin  e Suellen Vasconcelos ", label: "Tati Franklin  e Suellen Vasconcelos "},
  {value: "Radu Jude", label: "Radu Jude"},
  {value: "Silvina Schnicer", label: "Silvina Schnicer"},
  {value: "Pauline Loquès", label: "Pauline Loquès"},
  {value: "Bruno Murtinho", label: "Bruno Murtinho"},
  {value: "Mercedes Bryce Morgan", label: "Mercedes Bryce Morgan"},
  {value: "Jean-François Ravagnan ", label: "Jean-François Ravagnan "},
  {value: "Marco Altberg e Tainá De Luccas", label: "Marco Altberg e Tainá De Luccas"},
  {value: "Toby Schmutzler, Kevin Schmutzler, Apuu Mourine Munyes e Vallentine Chelluget", label: "Toby Schmutzler, Kevin Schmutzler, Apuu Mourine Munyes e Vallentine Chelluget"},
  {value: "Denis Villeneuve", label: "Denis Villeneuve"},
  {value: "Eduardo Ades", label: "Eduardo Ades"},
  {value: "Toby Perl Freilich", label: "Toby Perl Freilich"},
  {value: "Fanny Ovesen", label: "Fanny Ovesen"},
  {value: "Mary Bronstein", label: "Mary Bronstein"},
  {value: "Andrea Tonacci", label: "Andrea Tonacci"},
  {value: "Dolores Fonzi", label: "Dolores Fonzi"},
  {value: "Mehmet Akif Büyükatalay", label: "Mehmet Akif Büyükatalay"},
  {value: "Ethan Coen", label: "Ethan Coen"},
  {value: "Sammy Baloji", label: "Sammy Baloji"},
  {value: "Renée Nader Messora e João Salaviza", label: "Renée Nader Messora e João Salaviza"},
  {value: "Mohamed Rashad", label: "Mohamed Rashad"},
  {value: "Camila Freitas", label: "Camila Freitas"},
  {value: "Billy Shebar", label: "Billy Shebar"},
  {value: "Gemma Blasco", label: "Gemma Blasco"},
  {value: "Rebecca Zlotowski", label: "Rebecca Zlotowski"},
  {value: "Jorge Furtado", label: "Jorge Furtado"},
  {value: "Laura Casabe", label: "Laura Casabe"},
  {value: "Michael Tyburski", label: "Michael Tyburski"},
  {value: "Teresa Villaverde", label: "Teresa Villaverde"},
  {value: "Lucy Walker, Karen Harley e João Jardim", label: "Lucy Walker, Karen Harley e João Jardim"},
  {value: "Chelsea Greene, Rob Grobman e Edivan Guajajara", label: "Chelsea Greene, Rob Grobman e Edivan Guajajara"},
  {value: "Alessio Rigo de Righi e Matteo Zoppis", label: "Alessio Rigo de Righi e Matteo Zoppis"},
  {value: "Pia Marais", label: "Pia Marais"},
  {value: "Vivian Ostrovsky e Ruti Gadish", label: "Vivian Ostrovsky e Ruti Gadish"},
  {value: "Charlotte Devillers e Arnaud Dufeys", label: "Charlotte Devillers e Arnaud Dufeys"},
  {value: "Agnieszka Holland", label: "Agnieszka Holland"},
  {value: "Abderrahmane Sissako", label: "Abderrahmane Sissako"},
  {value: "Iván Fund", label: "Iván Fund"},
  {value: "Čejen Černić Čanak", label: "Čejen Černić Čanak"},
  {value: "Paolo Sorrentino", label: "Paolo Sorrentino"},
  {value: "Matteo Garrone", label: "Matteo Garrone"},
  {value: "Chase Joynt", label: "Chase Joynt"},
  {value: "Alireza Khatami", label: "Alireza Khatami"},
  {value: "Anna Cazenave Cambet", label: "Anna Cazenave Cambet"},
  {value: "Mariano Cohn e Gastón Duprat", label: "Mariano Cohn e Gastón Duprat"},
  {value: "Morad Mostafa", label: "Morad Mostafa"},
  {value: "Diego Céspedes", label: "Diego Céspedes"},
  {value: "Sergei Loznitsa", label: "Sergei Loznitsa"},
  {value: "Peter Kerekes", label: "Peter Kerekes"},
  {value: "Claire Simon", label: "Claire Simon"},
  {value: "Avelina Prat", label: "Avelina Prat"},
  {value: "Kristen Stewart", label: "Kristen Stewart"},
  {value: "Ernesto Martínez Bucio", label: "Ernesto Martínez Bucio"},
  {value: "Jaume Claret Muxart", label: "Jaume Claret Muxart"},
  {value: "Nadav Lapid", label: "Nadav Lapid"},
  {value: "Maria Eriksson-Hecht", label: "Maria Eriksson-Hecht"},
  {value: "Allan Ribeiro", label: "Allan Ribeiro"},
  {value: "Yolanda Centeno", label: "Yolanda Centeno"},
  {value: "Kelly Reichardt", label: "Kelly Reichardt"},
  {value: "Davi Pretto", label: "Davi Pretto"},
  {value: "Ratchapoom Boonbunchachoke", label: "Ratchapoom Boonbunchachoke"},
  {value: "Tina Romero", label: "Tina Romero"},
  {value: "Daniel Raim", label: "Daniel Raim"},
  {value: "Huo Meng", label: "Huo Meng"},
  {value: "Sylvain Chomet", label: "Sylvain Chomet"},
  {value: "Cristiano Burlan", label: "Cristiano Burlan"},
  {value: "Thierry Klifa", label: "Thierry Klifa"},
  {value: "Urška Djukić", label: "Urška Djukić"},
  {value: "Francis Ford Coppola", label: "Francis Ford Coppola"},
  {value: "Fernando Eimbcke", label: "Fernando Eimbcke"},
  {value: "Max Walker-Silverman", label: "Max Walker-Silverman"},
  {value: "Tolga Karaçelik", label: "Tolga Karaçelik"},
  {value: "Dean Francis", label: "Dean Francis"},
  {value: "Elena Manrique", label: "Elena Manrique"},
  {value: "Pedro Cabeleira", label: "Pedro Cabeleira"},
  {value: "Kevin Macdonald e Sam Rice-Edwards", label: "Kevin Macdonald e Sam Rice-Edwards"},
  {value: "Leela Varghese e Emma Hough Hobb", label: "Leela Varghese e Emma Hough Hobb"},
  {value: "Kateryna Gornostai", label: "Kateryna Gornostai"},
  {value: "Oliver Laxe", label: "Oliver Laxe"},
  {value: "Sven Bresser", label: "Sven Bresser"}
]

const showcases = [
  { label: "Première Brasil", value: "premiere-brasil", iconColor: "bg-laranja-600" },
  { label: "Première Latina", value: "premiere-latina", iconColor: "bg-amarelo-800" },
]

const isFilterMenuOpen = ref(false);
const submittedFilters = ref({});

const openMenu = () => {
  isFilterMenuOpen.value = true;
  document.body.style.overflow = "hidden";
};
const closeMenu = () => {
  isFilterMenuOpen.value = false;
  document.body.style.overflow = "";
};

const searchValue = ref("")
const cleanInput = () => {
  searchValue.value = ""
}

const timeOptions = computed(
  () => generateTimeOptions()
)

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
  palavrasChaves: null
});

const emit = defineEmits(['filtersApplied', 'filtersCleared']);

const applyFilters = async () => {
  const rawFilters = toRaw(filters.value);
  const cleanedFilters = cleanObject(rawFilters)

  if (cleanedFilters.date) {
    cleanedFilters.date = cleanedFilters.date.toString()
  }
  submittedFilters.value = cleanedFilters;
  await refetchFilters()
  console.log("Results:", filteredData.value)
  emit('filtersApplied', submittedFilters.value);
  closeMenu()
}

const clearAllFilters = () => {
  Object.keys(filters.value).forEach(key => {
    filters.value[key] = null;
  });

  emit('filtersCleared');
}

const updateFilters = (newFilters) => {
  submittedFilters.value = newFilters;
  // we need to update the filters ref object so th ui also reflect the qury removal
  Object.keys(filters.value).forEach(key => {
    filters.value[key] = Object.prototype.hasOwnProperty.call(newFilters, key)
      ? newFilters[key]
      : null;
  });

  refetchFilters();
}

defineExpose({
  updateFilters
})

const hasActiveFilters = computed(() => {
  return Object.values(filters.value).some(value => value !== null);
});

const hasFiltersChanged = computed(() => {
  const rawFilters = cleanObject(toRaw(filters.value));
  const rawSubmitted = cleanObject(toRaw(submittedFilters.value));
  return !isEqual(rawFilters, rawSubmitted);
});

const fetchFilteredResults = async (filters) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    message: "Success",
    filtersUsed: filters,
    results: [{ id: 1, name: 'Fake Movie 1' }, { id: 2, name: 'Fake Movie 2' }]
  };
};

const {
  data: filteredData,
  isFetching,
  refetch: refetchFilters
} = useQuery({
  queryKey: ['filtered-results', submittedFilters],
  queryFn: () => fetchFilteredResults(submittedFilters.value),
  enabled: false
});
</script>

<template>
  <div class="w-full flex flex-col gap-400 md:flex-row md:justify-between md:gap-600">
    <div class="input">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch color="text-primary"/>
        </div>
        <input
            v-model="searchValue"
            type="text"
            placeholder="Pesquisar"
            class="w-full md:w-96 pl-10 pr-8 py-2.5
            border border-neutrals-300 rounded-[5px]
            font-body leading-[150%] text-sm text-neutrals-900 placeholder-neutrals-400
            focus:outline-none focus:border-neutrals-600
            disabled:bg-neutrals-300 disabled:placeholder-neutrals-600 disabled:text-neutrals-600 disabled:border-neutrals-300 disabled:shadow-none
            transition-all duration-200"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button @click="cleanInput"><IconClose /></button>
        </div>
      </div>
    </div>
    <div class="filter flex items-center justify-between md:gap-800 lg:gap-1200">
      <button
        @click="openMenu"
        class="p-100 flex items-center gap-200 text-body-strong-sm text-primary md:order-2"
      >
        <IconFilter height="16px" width="16px" color="text-primary"/> {{ $t('filtro', 2)}}
      </button>
      <div class="flex items-center gap-300">
        <span class="text-body-strong-sm uppercase text-secondary-gray">A - Z</span>
        <img
          src="@assets/divisor.svg"
          alt="divisor"
          height="16px"
          width="1px"
        />
        <span class="text-body-strong-sm uppercase text-primary">{{ $t('filter_by.date') }}</span>
      </div>
    </div>
  </div>

<transition name="slide-left">
  <div
    v-if="isFilterMenuOpen"
    style="margin-top: 0;"
    class="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-full h-[100vh] right-0 shadow-lg overflow-y-auto"
  >
    <TwContainer>

      <div class="flex flex-col">
        <div class="shrink-0 flex justify-between items-center py-400 sticky top-0 bg-white-transp-1000 z-10">
          <p class="text-header-sm text-primary uppercase">{{ $t("filtro", 2)}}</p>
          <button @click="closeMenu" class="text-neutrals-900">
            <IconClose height="32px" width="32px" />
          </button>
        </div>

        <div class="flex-grow flex flex-col space-y-800 overflow-y-auto">
          <AccordionGroup :text="$t('filter.date')" :isOpen="filters.date != null">
            <template v-slot:content>
                <div class="pt-400">
                  <DatePickerComponent v-model="filters.date" />
                </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.time')" :isOpen="filters.time != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <div class="flex items-center gap-400">
                  <SelectComponent
                    class="m-400"
                    v-model="filters.startTime"
                    :options="timeOptions" />
                  <SelectComponent
                    class="m-400"
                    v-model="filters.endTime"
                    :options="timeOptions" />
                </div>
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.mostra')" :isOpen="filters.mostra != null">
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
          <AccordionGroup :text="$t('filter.cinema')" :isOpen="filters.cinema != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.cinema"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.genero')" :isOpen="filters.genero != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.genero"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.pais')" :isOpen="filters.pais != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.pais"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.direcao')" :isOpen="filters.direcao != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="collection"
                  v-model="filters.direcao"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.elenco')" :isOpen="filters.elenco != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.elenco"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.selo')" :isOpen="filters.selo != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.selo"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.festivais')" :isOpen="filters.festivais != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.festivais"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.premios')" :isOpen="filters.premios != null">
            <template v-slot:content>
              <div class="pt-400 overflow-hidden">
                <ComboboxComponent
                  :collection="showcases"
                  v-model="filters.premios"
                />
              </div>
            </template>
          </AccordionGroup>
          <AccordionGroup :text="$t('filter.palavras_chaves')" :isOpen="filters.palavrasChaves != null">
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

        <div class="shrink-0 py-400 actions sticky bottom-0 bg-white-transp-1000 z-10">
          <div class="flex justify-between">
            <!-- <button class="flex-1">Limpar tudo</button> -->
             <ButtonText
             tag="button"
             text="Limpar tudo"
             @click="clearAllFilters"
             :disabled="!hasActiveFilters"/>
            <!-- <button class="flex-1 bg-black text-white">Aplicar filtros</button> -->
             <BaseButton
              variant="dark"
              @click="applyFilters"
              :disabled="!hasActiveFilters"
            >Aplicar filtros</BaseButton>
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
