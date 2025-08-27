import { useI18n as useVueI18n } from "vue-i18n";

export function useI18n() {
  const { t, locale } = useVueI18n();

  // Helper for accessible labels
  const ta = (key, fallback = "") => {
    const translation = t(key);
    return translation !== key ? translation : fallback;
  };

  return {
    t,
    ta, // t with accessibility fallback
    locale,
  };
}
