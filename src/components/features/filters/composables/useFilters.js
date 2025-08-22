import { ref } from "vue";
import { formatDate } from "@/utils/helpers/formatDateHelper";

export function useFilters() {
  // Actual query object to submit to the api
  const filtersQuery = ref({});
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

  const filterSearch = (submittedFilters) => {
    // await refetchFilters();
    console.log(submittedFilters);

    if (submittedFilters.date) {
      submittedFilters.date = formatDate(submittedFilters.date)
    }
    filtersQuery.value = submittedFilters
    console.log("Applied filters:", filtersQuery.value);
    console.warn("QUERY API/FILTER RESULT FROM API using:")
    console.log(filtersQuery.value)
  }

  const clearSearchQuery = (newValue) => {
    filtersQuery.value = newValue;
    Object.keys(filters.value).forEach((key) => (filters.value[key] = null));
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

    console.log("Applied filters:", filtersQuery.value);
    console.warn("QUERY API/FILTER RESULT FROM API using:")
    console.log(filtersQuery.value)
  };

  return {
    filtersQuery,
    filters,
    filterSearch,
    clearSearchQuery,
    removeQuery
  }
};
