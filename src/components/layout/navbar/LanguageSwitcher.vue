<script setup>
import { useI18n } from "@/composables/useI18n";
import { watch } from "vue";
const { locale } = useI18n();

watch(locale, (newLang) => {
  localStorage.setItem('lang', newLang);
});
// On init
const savedLang = localStorage.getItem('lang');
if (savedLang) locale.value = savedLang;

const props = defineProps({
  langs: {
    type: Array,
    default: () => ["pt", "en"],
  },
});

const updateLanguage = (lang) => {
  locale.value = lang;
};

const isActive = (lang) => locale.value === lang;
</script>

<template>
  <div
    class="languages flex items-center gap-400 text-neutrals-700"
    aria-label="language selection"
  >
    <template v-for="lang in props.langs" :key="lang">
      <button
        class="font-body text-sm font-semibold leading-[19.6px] uppercase"
        :class="{ 'text-neutrals-900': isActive(lang) }"
        @click="updateLanguage(lang)"
        :aria-label="`Alterar para ${lang.toUpperCase()}`"
        :aria-pressed="isActive(lang)"
      >
        {{ lang }}
      </button>
      <img
        v-if="lang !== props.langs.at(-1)"
        src="@assets/divisor.svg"
        alt="Divisor"
        aria-hidden="true"
      />
    </template>
  </div>
</template>
