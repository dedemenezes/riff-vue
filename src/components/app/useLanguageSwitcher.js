import { ref, watch } from "vue";
import { useI18n } from "@/composables/useI18n";

export function useLanguageSwitcher() {
  const { locale } = useI18n();

  const availableLanguages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" }
  ]

  const currentLanguage = ref(localStorage.getItem("preferredLanguage") || "pt")

  watch(currentLanguage, (newLang) => {
    locale.value = newLang;
    if (typeof window !== 'undefined') {
      localStorage.setItem("preferredLanguage", newLang);
    }
  }, { immediate: true });
  // locale.value = currentLanguage.value;

  const switchLanguage = (languageCode) => {
    currentLanguage.value = languageCode
  };

  return {
    currentLanguage,
    availableLanguages,
    switchLanguage,
  }
}
