<script setup>
import { ref } from "vue";
import { IconFilter, IconClose, IconSearch } from "@/components/ui/icons"
// Controls menu visibility
const isFilterMenuOpen = ref(false);

const openMenu = () => {
  isFilterMenuOpen.value = true;
  document.body.style.overflow = "hidden"; // prevent background scroll
};
const closeMenu = () => {
  isFilterMenuOpen.value = false;
  document.body.style.overflow = ""; // restore scroll
};

const searchValue = ref("")
const cleanInput = () => {
  searchValue.value = ""
}
</script>

<template>
  <div class="flex flex-col gap-400">
    <div class="input">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch color="text-primary"/>
        </div>
        <input
            v-model="searchValue"
            type="text"
            placeholder="Pesquisar"
            class="w-full pl-10 pr-8 py-2.5
            border border-neutrals-300 rounded-[5px]
            font-body leading-[150%] text-sm text-neutrals-900 placeholder-neutrals-400
            focus:outline-none focus:border-neutrals-600
            disabled:bg-neutrals-300 disabled:placeholder-neutrals-600 disabled:text-neutrals-600 disabled:border-neutrals-300 disabled:shadow-none
            transition-all duration-200"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button @click="cleanInput"><IconClose /></button>
        </div>
      </div>
    </div>
    <div class="filter flex items-center justify-between">
      <button
        @click="openMenu"
        class="p-100 flex items-center gap-200 text-body-strong-sm text-primary"
      >
        <IconFilter height="16px" width="16px" color="text-primary"/> Filtros
      </button>
      <div class="flex items-center gap-300">
        <span class="text-body-strong-sm uppercase text-secondary">A - Z</span>
        <img
          src="@assets/divisor.svg"
          alt="divisor"
          height="16px"
          width="1px"
        />
        <span class="text-body-strong-sm uppercase text-primary">POR DATA</span>
      </div>
    </div>
  </div>

<transition name="slide-left">
  <div
    v-if="isFilterMenuOpen"
    class="fixed inset-0 z-50 bg-white flex flex-col w-full max-w-full right-0 shadow-lg overflow-y-auto"
  >
  FLAMENGO
  <button @click="closeMenu" class="text-neutrals-900">
    <IconClose />
  </button>
  </div>
</transition>
</template>

<style scoped>
/* transition vue component animation classes */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
