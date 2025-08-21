diff --git a/src/components/ui/SearchFilter.vue b/src/components/ui/SearchFilter.vue
index eb7c63c..b3cc7e2 100644
--- a/src/components/ui/SearchFilter.vue
+++ b/src/components/ui/SearchFilter.vue
@@ -1,5 +1,6 @@
 <script setup>
 import { computed, ref } from "vue";
+import { toRaw } from "vue";
 import { IconFilter, IconClose, IconSearch } from "@/components/ui/icons"
 import TwContainer from "@/components/layout/TwContainer.vue";
 import AccordionGroup from "./accordion/AccordionGroup.vue";
@@ -9,6 +10,8 @@ import ButtonText from "./buttons/ButtonText.vue";
 import DatePickerComponent from "./datepicker/DatePickerComponent.vue";
 import SelectComponent from "./SelectComponent.vue";
 import { generateTimeOptions } from "@/composables/useTimeOptions";
+import { useQuery } from '@tanstack/vue-query'
+import { cleanObject } from "@/composables/cleanObject";
 
 const collection = [
   {value: "Joachim Trier", label: "Joachim Trier"},
@@ -134,16 +137,65 @@ const showcases = [
   { label: "Première Latina", value: "premiere-latina", iconColor: "bg-amarelo-800" },
 ]
 
-// Controls menu visibility
+
+const fetchFilteredResults = async (filters) => {
+  await new Promise(resolve => setTimeout(resolve, 1000));
+  return {
+    message: "Success",
+    filtersUsed: filters,
+    results: [{ id: 1, name: 'Fake Movie 1' }, { id: 2, name: 'Fake Movie 2' }]
+  };
+};
+
+const updateFilters = (newFilters) => {
+  submittedFilters.value = newFilters;
+  // we need to update the filters ref object so th ui also reflect the qury removal
+  Object.keys(filters.value).forEach(key => {
+    filters.value[key] = newFilters[key] ?? null;
+  });
+  refetchFilters();
+}
+
+defineExpose({
+  updateFilters
+})
+
+const submittedFilters = ref({});
+
+const {
+  data: filteredData,
+  isFetching,
+  refetch: refetchFilters
+} = useQuery({
+  queryKey: ['filtered-results', submittedFilters],
+  queryFn: () => fetchFilteredResults(submittedFilters.value),
+  enabled: false
+});
+
+const applyFilters = async () => {
+  const rawFilters = toRaw(filters.value);
+  const cleanedFilters = cleanObject(rawFilters)
+  if (cleanedFilters.date) {
+    cleanedFilters.date = cleanedFilters.date.toString()
+  }
+  submittedFilters.value = cleanedFilters;
+  await refetchFilters()
+  console.log("Results:", filteredData.value)
+  emit('filtersApplied', submittedFilters.value);
+  closeMenu()
+}
+
+
+
 const isFilterMenuOpen = ref(false);
 
 const openMenu = () => {
   isFilterMenuOpen.value = true;
-  document.body.style.overflow = "hidden"; // prevent background scroll
+  document.body.style.overflow = "hidden";
 };
 const closeMenu = () => {
   isFilterMenuOpen.value = false;
-  document.body.style.overflow = ""; // restore scroll
+  document.body.style.overflow = "";
 };
 
 const searchValue = ref("")
@@ -153,35 +205,35 @@ const cleanInput = () => {
 
 const timeOptions = computed(
   () => generateTimeOptions()
-) // Use in <select>
+)
 
 
 const filters = ref({
-  date: "",
-  startTime: "",
-  endTime: "",
-  mostra: "",
-  cinema: "",
-  genero: "",
-  pais: "",
-  direcao: "",
-  elenco: "",
-  selo: "",
-  festivais: "",
-  premios: "",
-  palavrasChaves: ""
+  date: null,
+  startTime: null,
+  endTime: null,
+  mostra: null,
+  cinema: null,
+  genero: null,
+  pais: null,
+  direcao: null,
+  elenco: null,
+  selo: null,
+  festivais: null,
+  premios: null,
+  palavrasChaves: null
 });
 
-// Define emits
-const emit = defineEmits(['filtersApplied', 'filtersCleared', 'searchChanged']);
+
+const emit = defineEmits(['filtersApplied', 'filtersCleared']);
 
 const clearAllFilters = () => {
-  // Clear all filter values
+
   Object.keys(filters.value).forEach(key => {
-    filters.value[key] = "";
+    filters.value[key] = null;
   });
 
-  // Emit event to parent component if needed
+
   emit('filtersCleared');
 }
 
@@ -190,6 +242,12 @@ const hasActiveFilters = computed(() => {
          Object.values(filters.value).some(value => value !== "");
 });
 
+
+const hasFiltersChanged = computed(() => {
+  return hasActiveFilters.value;
+});
+
+
 </script>
 
 <template>
@@ -238,6 +296,7 @@ const hasActiveFilters = computed(() => {
 <transition name="slide-left">
   <div
     v-if="isFilterMenuOpen"
+    style="margin-top: 0;"
     class="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-full h-[100vh] right-0 shadow-lg overflow-y-auto"
   >
     <TwContainer>
@@ -251,14 +310,14 @@ const hasActiveFilters = computed(() => {
         </div>
 
         <div class="flex-grow flex flex-col space-y-800 overflow-y-auto">
-          <AccordionGroup :text="$t('filter.date')">
+          <AccordionGroup :text="$t('filter.date')" :isOpen="filters.date != null">
             <template v-slot:content>
                 <div class="pt-400">
                   <DatePickerComponent v-model="filters.date" />
                 </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.time')">
+          <AccordionGroup :text="$t('filter.time')" :isOpen="filters.time != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <div class="flex items-center gap-400">
@@ -274,7 +333,7 @@ const hasActiveFilters = computed(() => {
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.mostra')">
+          <AccordionGroup :text="$t('filter.mostra')" :isOpen="filters.mostra != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent
@@ -285,67 +344,66 @@ const hasActiveFilters = computed(() => {
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.cinema')">
+          <AccordionGroup :text="$t('filter.cinema')" :isOpen="filters.cinema != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.genero')">
+          <AccordionGroup :text="$t('filter.genero')" :isOpen="filters.genero != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.pais')">
+          <AccordionGroup :text="$t('filter.pais')" :isOpen="filters.pais != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.direcao')">
+          <AccordionGroup :text="$t('filter.direcao')" :isOpen="filters.direcao != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent
                   :collection="collection"
                   v-model="filters.direcao"
-                  placeholder="Selecionar mostra..."
                 />
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.elenco')">
+          <AccordionGroup :text="$t('filter.elenco')" :isOpen="filters.elenco != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.selo')">
+          <AccordionGroup :text="$t('filter.selo')" :isOpen="filters.selo != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.festivais')">
+          <AccordionGroup :text="$t('filter.festivais')" :isOpen="filters.festivais != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.premios')">
+          <AccordionGroup :text="$t('filter.premios')" :isOpen="filters.premios != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
               </div>
             </template>
           </AccordionGroup>
-          <AccordionGroup :text="$t('filter.palavras-chaves')">
+          <AccordionGroup :text="$t('filter.palavras_chaves')" :isOpen="filters.palavras-chaves != null">
             <template v-slot:content>
               <div class="pt-400 overflow-hidden">
                 <ComboboxComponent :collection="collection"/>
@@ -354,7 +412,7 @@ const hasActiveFilters = computed(() => {
           </AccordionGroup>
         </div>
 
-        <div class="shrink-0 pt-400 actions sticky bottom-0 bg-white-transp-1000 z-10">
+        <div class="shrink-0 py-400 actions sticky bottom-0 bg-white-transp-1000 z-10">
           <div class="flex justify-between">
             <!-- <button class="flex-1">Limpar tudo</button> -->
              <ButtonText
@@ -363,7 +421,11 @@ const hasActiveFilters = computed(() => {
              @click="clearAllFilters"
              :disabled="!hasActiveFilters"/>
             <!-- <button class="flex-1 bg-black text-white">Aplicar filtros</button> -->
-             <BaseButton variant="dark">Aplicar filtros</BaseButton>
+             <BaseButton
+              variant="dark"
+              @click="applyFilters"
+              :disabled="!hasFiltersChanged"
+            >Aplicar filtros</BaseButton>
           </div>
         </div>
       </div>
diff --git a/src/components/ui/datepicker/DatePickerComponent.vue b/src/components/ui/datepicker/DatePickerComponent.vue
index fb05e4f..88ab0fa 100644
--- a/src/components/ui/datepicker/DatePickerComponent.vue
+++ b/src/components/ui/datepicker/DatePickerComponent.vue
@@ -1,6 +1,7 @@
 <script setup>
 import {
   DateFormatter,
+  // DateValue,
 
   getLocalTimeZone,
 } from "@internationalized/date"
@@ -20,7 +21,7 @@ const df = new DateFormatter(locale.value, {
 })
 
 const props = defineProps({
-  modelValue: { type: String, required: true }
+  modelValue: { type: Object, required: true }
 })
 // Emit definition for v-model support
 const emit = defineEmits(['update:modelValue'])
diff --git a/src/i18n/locales/en.json b/src/i18n/locales/en.json
index 70dae9a..0599189 100644
--- a/src/i18n/locales/en.json
+++ b/src/i18n/locales/en.json
@@ -31,7 +31,7 @@
     "selo": "Label",
     "festivais": "Festivals",
     "premios": "Awards",
-    "palavras-chaves": "Keywords"
+    "palavras_chaves": "Keywords"
   },
   "datepicker": {
     "pick_date": "Pick a date"
diff --git a/src/i18n/locales/pt.json b/src/i18n/locales/pt.json
index 2396905..f7f86fe 100644
--- a/src/i18n/locales/pt.json
+++ b/src/i18n/locales/pt.json
@@ -32,7 +32,7 @@
     "selo": "Selo",
     "festivais": "Festivais",
     "premios": "Prêmios",
-    "palavras-chaves": "Palavras-chaves"
+    "palavras_chaves": "Palavras chaves"
   },
   "datepicker": {
     "pick_date": "Escolha uma data"
diff --git a/src/views/ProgrammingView.vue b/src/views/ProgrammingView.vue
index a829104..0e001e9 100644
--- a/src/views/ProgrammingView.vue
+++ b/src/views/ProgrammingView.vue
@@ -1,18 +1,60 @@
 <script setup>
+import { ref } from 'vue';
 import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
 import TwContainer from "@/components/layout/TwContainer.vue";
 import MovieList from "@/components/layout/sections/MovieList.vue";
 import SearchFilter from "../components/ui/SearchFilter.vue";
+import TagFilter from '@/components/ui/tags/TagFilter.vue';
+
+const searchFilterRef = ref(null);
+const searchQuery = ref({})
+
+const loggg = (data) => {
+  console.log(data);
+  searchQuery.value = data;
+}
+
+const clearSearchQuery = () => {
+  searchQuery.value = {}
+}
+
+const emit = defineEmits(["updateQuery"])
+
+const removeQuery = (queryValue) => {
+  // console.log(data);
+  for (const key in searchQuery.value) {
+    if (searchQuery.value[key] === queryValue) {
+      delete searchQuery.value[key];
+      break; // Remove only the first matching key
+    }
+  }
+  if (searchFilterRef.value) {
+    searchFilterRef.value.updateFilters(searchQuery.value);
+  }
+  emit('updateQuery', searchQuery.value)
+}
 </script>
 
 <template>
   <ContextMenu />
-  <TwContainer>
-    <h2 class="text-header-sm text-primary py-400">{{ $t('navigation.programming') }} 2025</h2>
-    <SearchFilter />
-    <div class="py-400">
-      <MovieList />
+  <TwContainer class="pt-400 space-y-400">
+    <h2 class="text-header-sm text-primary">{{ $t('navigation.programming') }} 2025</h2>
+    <SearchFilter
+      ref="searchFilterRef"
+      @filtersApplied="loggg"
+      @filtersCleared="clearSearchQuery"
+    />
+    <div
+      class="flex gap-300"
+      v-if="Object.keys(searchQuery).length">
+      <TagFilter
+        v-for="(value, key) in searchQuery"
+        :key="key"
+        :text="value"
+        @remove-filter="removeQuery"
+      />
     </div>
+    <MovieList />
   </TwContainer>
 </template>
 
