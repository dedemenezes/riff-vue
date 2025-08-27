<script setup>

// 🔁 Reusable UI Components
// import MovieCard from "@/components/features/movies/components/MovieCard.vue";
// import ToastNotification from "@/components/common/notifications/ToastNotification.vue";
import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import MobileFilterMenu from "@/components/features/filters/components/MobileFilterMenu.vue";
import MovieList from "@/components/features/movies/components/MovieList.vue";
import SearchFilter from "@/components/features/filters/components/SearchFilter.vue";
import TagFilter from "@/components/common/tags/TagFilter.vue";
import { IconFilter } from "@/components/common/icons";
import SearchBar from "@/components/features/filters/components/SearchBar.vue";

// ✅ Composables
import { useFilters } from "@/components/features/filters/composables/useFilters";
import { useMoviesQuery } from "@/components/features/movies/composables/useMovies";
import { ref, watch } from "vue";


// 📦 UI state - mobile filter menu open/close
const isFilterMenuOpen = ref(false);

// 👇 DOM side effect - lock scroll when menu is open
const openMenu = () => {
  isFilterMenuOpen.value = true;
  document.body.style.overflow = "hidden";
};

// 👇 DOM side effect - unlock scroll when menu closes
const closeMenu = () => {
  isFilterMenuOpen.value = false;
  document.body.style.overflow = "";
};

// 📦 UI state - holds original API response
const programming = ref([]);

// 🧠 Business logic - Filter composable (source of truth for filters)
const {
  searchValue,
  handleSearch,
  handleClear,
  filters,
  filtersQuery,
  filterSearch,
  clearSearchQuery,
  removeQuery,
  filteredMovies
} = useFilters(programming);



// ⚙️ Data fetching - Movies from API
const { data, isPending, isFetching, isError, error } = useMoviesQuery();

// 🧠 Watcher - on API data change, update local state
watch(
  data,
  (dataFetched) => {
    const newData = dataFetched?.FMPDSORESULT?.ROW;

    if (newData) {
      // 🧼 Normalize data once
      const normalized = newData.map((movie) => ({
        ...movie,
        _normalized: {
          titulo_original: movie.titulo_original?.DATA?.trim().toLowerCase() || "",
          titulo_ingles: movie.titulo_ingles?.DATA?.trim().toLowerCase() || "",
          titulo_portugues: movie.titulo_portugues?.DATA?.trim().toLowerCase() || "",
          // You can normalize other keys too if needed for filter fields
          // e.g., genero, pais, direcao, etc.
        },
      }));

      programming.value = normalized;
      console.log("Programming stored: ", programming.value);
    }
  },
  { immediate: true }
);
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
        <MobileFilterMenu
          :is-open="isFilterMenuOpen"
          :model-value="filters"
          @filtersApplied="filterSearch"
          @filtersCleared="clearSearchQuery"
          @close-filter-menu="closeMenu"
        />
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
        <MovieList :movies="filteredMovies" :error="error" :is-error="isError" :is-fetching="isFetching" :is-pending="isPending"  />
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
