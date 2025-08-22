<script setup>
import { ref, computed } from "vue";
import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import MovieList from "@/components/features/movies/components/MovieList.vue";
import SearchFilter from "@/components/features/filters/components/SearchFilter.vue";
import TagFilter from "@/components/common/tags/TagFilter.vue";
import { IconSearch, IconClose, IconFilter } from "@/components/common/icons";

// text input declaratives
const searchValue = ref("");
const cleanInput = () => {
  searchValue.value = "";
};
const inputHasContent = computed(() => {
  return searchValue.value != "";
});

// menu behavior
const isFilterMenuOpen = ref(false);
const openMenu = () => {
  isFilterMenuOpen.value = true;
  console.log(isFilterMenuOpen.value);

  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  isFilterMenuOpen.value = false;
  document.body.style.overflow = "";
};

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
    <div
      class="w-full flex flex-col gap-400 md:flex-row md:justify-between md:gap-600"
    >
      <div class="input">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <IconSearch color="text-primary" />
          </div>
          <input
            v-model="searchValue"
            type="text"
            placeholder="Pesquisar"
            class="w-full md:w-96 pl-10 pr-8 py-2.5 border border-neutrals-300 rounded-[5px] font-body leading-[150%] text-sm text-neutrals-900 placeholder-neutrals-400 focus:outline-none focus:border-neutrals-600 disabled:bg-neutrals-300 disabled:placeholder-neutrals-600 disabled:text-neutrals-600 disabled:border-neutrals-300 disabled:shadow-none transition-all duration-200"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button v-if="inputHasContent" @click="cleanInput">
              <IconClose />
            </button>
          </div>
        </div>
      </div>
      <div
        class="filter flex items-center justify-between md:gap-800 lg:gap-1200"
      >
        <button
          @click="openMenu"
          class="p-100 flex items-center gap-200 text-body-strong-sm text-primary md:order-2"
        >
          <IconFilter height="16px" width="16px" color="text-primary" />
          {{ $t("filter.title") }}
        </button>
        <div class="flex items-center gap-300">
          <span class="text-body-strong-sm uppercase text-secondary-gray"
            >A - Z</span
          >
          <img
            src="@assets/icons/divisor.svg"
            alt="divisor"
            height="16px"
            width="1px"
          />
          <span class="text-body-strong-sm uppercase text-primary">{{
            $t("filter_by.date")
          }}</span>
        </div>
      </div>
      <SearchFilter
        :isMenuOpen="isFilterMenuOpen"
        ref="searchFilterRef"
        @filtersApplied="loggg"
        @filtersCleared="clearSearchQuery"
        @close-filter-menu="closeMenu"
      />
    </div>
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
