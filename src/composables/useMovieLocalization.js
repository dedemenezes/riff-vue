// composables/useMovieLocalization.js
// import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useMovieLocalization() {
  const { locale } = useI18n()

  const getLocalizedTitle = (movie) => {
    return locale.value === 'pt'
      ? movie.titulo_original?.DATA
      : movie.titulo_ingles?.DATA || movie.titulo_original?.DATA // fallback
  }

  // Easy to add more fields later
  // const getLocalizedDescription = (movie) => {
  //   return locale.value === 'pt'
  //     ? movie.sinopse_pt?.DATA
  //     : movie.sinopse_en?.DATA || movie.sinopse_pt?.DATA
  // }

  return {
    getLocalizedTitle,
    // getLocalizedDescription
  }
}
