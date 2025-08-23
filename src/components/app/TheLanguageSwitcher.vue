<script setup>
import { useLanguageSwitcher } from '@/components/app/useLanguageSwitcher';
const {
  availableLanguages,
  switchLanguage,
  currentLanguage
} = useLanguageSwitcher()
</script>

<template>
  <div
    class="languages flex items-center gap-400 text-neutrals-700"
    aria-label="language selection"
  >
    <template v-for="language in availableLanguages" :key="language.code">
      <button
        :class="['text-body-strong-sm uppercase', { 'text-neutrals-900': language.code === currentLanguage }]"
        @click="switchLanguage(language.code)"
        :aria-label="`Alterar para ${language.name}`"
        :aria-pressed="language.code === currentLanguage"
        :lang="language.code"
      >
        {{ language.code.toUpperCase() }}
      </button>
      <img
        v-if="language.code !== availableLanguages.at(-1).code"
        src="@assets/icons/divisor.svg"
        alt="Divisor"
        aria-hidden="true"
      />
    </template>
  </div>
</template>
