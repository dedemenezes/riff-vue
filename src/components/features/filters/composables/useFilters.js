import { useDebounce } from "@vueuse/core";
import { ref, computed } from "vue";
import { formatDate } from "@/utils/helpers/formatDateHelper";

export function useFilters(allMovies = ref([])) {
  const searchValue = ref("");
  const debouncedSearch = useDebounce(searchValue, 300);

  const handleClear = () => {
    searchValue.value = "";
    // console.log("Clear filter by text?", searchValue.value == "");
  };

  const handleSearch = () => {
    // console.log(`Query: ${searchValue.value}`);
    // console.warn(`QUERY API using ${searchValue.value}`);
    // TODO: Trigger refetch or recompute
  };


  const filtersQuery = ref({});
  const filters = ref({
    date: null,
    startTime: null,
    endTime: null,
    submostra: null,
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

  const filterSearch = (submittedFilters) => {
    // await refetchFilters();
    console.log(submittedFilters);

    if (submittedFilters.date) {
      submittedFilters.date = formatDate(submittedFilters.date)
    }
    filtersQuery.value = submittedFilters
    // console.log("Applied filters:", filtersQuery.value);
    // console.warn("QUERY API/FILTER RESULT FROM API using:")
    // console.log(filtersQuery.value)
  }

  const clearSearchQuery = (newValue) => {
    filtersQuery.value = newValue;
    Object.keys(filters.value).forEach((key) => (filters.value[key] = null));
    // console.log("CLEAR FILTERING");
  };

  const removeQuery = (queryValue) => {
    for (const key in filters.value) {
      if (filtersQuery.value[key] === queryValue) {
        delete filtersQuery.value[key];
        break;
      }
    }

    // update filters to keep UI in sync
    Object.keys(filters.value).forEach((key) => {
      filters.value[key] = Object.prototype.hasOwnProperty.call(filtersQuery.value, key)
        ? filtersQuery.value[key]
        : null;
    });

    // console.log("Applied filters:", filtersQuery.value);
    // console.warn("QUERY API/FILTER RESULT FROM API using:")
    // console.log(filtersQuery.value)
  };

  // 🧠 Business logic - Filtering logic based on search text
  const filteredMovies = computed(() => {
    console.log(filtersQuery.value);

    const searchTerm = debouncedSearch.value.toLowerCase();
    const hasSearch = !!searchTerm;
    const hasFilters = Object.values(filtersQuery.value).some((v) => v !== null && v !== "");

    // ⛔ Nothing to filter? Return everything.
    if (!hasSearch && !hasFilters) {
      return allMovies.value;
    }

    // ✅ Step 1: filter by search
    const filteredBySearch = allMovies.value.filter((item) => {
      const normalized = item._normalized || {};
      return (
        normalized.titulo_original.includes(searchTerm) ||
        normalized.titulo_ingles.includes(searchTerm) ||
        normalized.titulo_portugues.includes(searchTerm)
      );
    });

    // ✅ Step 2: filter by active filters
    return filteredBySearch.filter((movie) => {
      return Object.entries(filtersQuery.value).every(([key, value]) => {
        if (!value) return true;

        if (key === 'startTime' || key === 'endTime') {
          // debugger
          const sessionTimeStr = movie.sessao; // "18:30", etc.
          if (!sessionTimeStr) return false;

          // Convert to minutes since midnight for comparison
          const [movieHour, movieMin] = sessionTimeStr.split(':').map(Number);
          const movieMinutes = movieHour * 60 + movieMin;

          if (key === 'startTime') {
            const [filterHour, filterMin] = value.split(':').map(Number);
            const filterMinutes = filterHour * 60 + filterMin;
            return movieMinutes >= filterMinutes;
          }
        }


        const movieValue = movie[key]?.DATA || movie[key];

        return normalize(movieValue).includes(normalize(value));
      });
    });
  });


  const normalize = (str) => String(str).toLowerCase().trim()


  return {
    searchValue,
    handleSearch,
    handleClear,
    filtersQuery,
    filters,
    filterSearch,
    clearSearchQuery,
    removeQuery,
    filteredMovies
  }
};
