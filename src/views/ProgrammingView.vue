<script setup>
import ContextMenu from "@/components/layout/navbar/ContextMenu.vue";
import TwContainer from "@/components/layout/TwContainer.vue";
import MovieList from "@/components/layout/sections/MovieList.vue";
import SearchFilter from "../components/ui/SearchFilter.vue";
</script>

<template>
  <ContextMenu />
  <TwContainer>
    <h2 class="text-header-sm text-primary py-400">{{ $t('navigation.programming') }} 2025</h2>
    <SearchFilter />
    <div class="py-400">
      <MovieList />
    </div>
  </TwContainer>
</template>

<style scoped></style>
