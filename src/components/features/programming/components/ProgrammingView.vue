<script setup>
import { ref } from "vue";
import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import MovieList from "@/components/features/movies/components/MovieList.vue";
import SearchFilter from "@/components/features/filters/components/SearchFilter.vue";
import TagFilter from "@/components/common/tags/TagFilter.vue";
import { IconFilter, IconClose } from "@/components/common/icons";
import SearchBar from "@/components/features/filters/components/SearchBar.vue";
import { useFilters } from "@/components/features/filters/composables/useFilters";


// text search input declaratives
const searchValue = ref("");

const handleClear = () => {
  searchValue.value = "";
  // make request again
};

const handleSearch = () => {
  console.log(`Query: ${searchValue.value}`);

  console.warn(`QUERY API using ${searchValue.value}`)
  // debugger
};

///////////

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

// Filter Behavior
const { filters, filtersQuery, filterSearch, clearSearchQuery, removeQuery } = useFilters();
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
      <SearchBar v-model="searchValue" @search="handleSearch" @clear="handleClear" />
      <div
        class="filter flex items-center justify-between md:gap-800 lg:gap-1200"
      >
        <!-- FilterMobileTrigger -->
        <button
          @click="openMenu"
          class="p-100 flex items-center gap-200 text-body-strong-sm text-primary md:order-2 lg:hidden"
        >
          <IconFilter height="16px" width="16px" color="text-primary" />
          {{ $t("filter.title") }}
        </button>
        <!-- FilterMobileTrigger -->

        <!-- Ordering -->
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
        <!-- Ordering -->

      </div>
      <transition name="slide-left">
        <div
          v-if="isFilterMenuOpen"
          style="margin-top: 0"
          class="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-full h-[100vh] right-0 shadow-lg overflow-y-auto"
        >
          <TwContainer>
            <div class="flex flex-col">
              <!-- Filter header -->
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
              <!-- Filter header -->
              <SearchFilter
                v-model="filters"
                @filtersApplied="filterSearch"
                @filtersCleared="clearSearchQuery"
                @close-filter-menu="closeMenu"
              />
            </div>
          </TwContainer>

        </div>
      </transition>
    </div>
    <div class="flex gap-300" v-if="Object.values(filtersQuery).some((item) => item !== null)">
      <TagFilter
        v-for="(value, key) in filtersQuery"
        :key="key"
        :text="value"
        @remove-filter="removeQuery"
      />
    </div>
    <div class="grid grid-cols-12 gap-800">
      <div class="col-span-12 lg:col-span-7">
        <MovieList />
      </div>
      <div class="hidden lg:block lg:col-start-8 lg:col-end-13">
        <SearchFilter
          v-model="filters"
          @filtersApplied="filterSearch"
          @filtersCleared="clearSearchQuery"
          @close-filter-menu="closeMenu"
        />
      </div>
    </div>
  </TwContainer>
</template>

<style scoped></style>
