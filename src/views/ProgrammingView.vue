<script setup>
import { ref } from "vue";
import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import MovieList from "@/components/layout/sections/MovieList.vue";
import SearchFilter from "../components/ui/SearchFilter.vue";
import TagFilter from "@/components/ui/tags/TagFilter.vue";

const searchFilterRef = ref(null);
const searchQuery = ref({});

const loggg = (data) => {
  searchQuery.value = data;
};

const clearSearchQuery = () => {
  searchQuery.value = {};
};

const emit = defineEmits(["updateQuery"]);

const removeQuery = (queryValue) => {
  // console.log(data);
  for (const key in searchQuery.value) {
    if (searchQuery.value[key] === queryValue) {
      delete searchQuery.value[key];
      break; // Remove only the first matching key
    }
  }
  if (searchFilterRef.value) {
    searchFilterRef.value.updateFilters(searchQuery.value);
  }
  emit("updateQuery", searchQuery.value);
};
</script>

<template>
  <ContextMenu />
  <TwContainer class="pt-400 space-y-400">
    <h2 class="text-header-sm text-primary">
      {{ $t("navigation.programming") }} 2025
    </h2>
    <SearchFilter
      ref="searchFilterRef"
      @filtersApplied="loggg"
      @filtersCleared="clearSearchQuery"
    />
    <div class="flex gap-300" v-if="Object.keys(searchQuery).length">
      <TagFilter
        v-for="(value, key) in searchQuery"
        :key="key"
        :text="value"
        @remove-filter="removeQuery"
      />
    </div>
    <MovieList />
  </TwContainer>
</template>

<style scoped></style>
