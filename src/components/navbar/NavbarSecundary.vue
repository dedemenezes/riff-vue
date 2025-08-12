<script setup>
import BaseButton from '@my_components/buttons/BaseButton.vue';
</script>

<template>
  <div class="p-400 mx-auto lg:max-w-7xl hidden md:flex items-center justify-between">
    <ul class="flex flex-grow justify-between items-center me-400 h-1600">
      <li>
        <BaseButton as="button" variant="underline" size="lg">
          Programaçao
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="underline" size="lg">
          Edição 2024
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="underline" size="lg">
          Sobre nós
        </BaseButton>
      </li>
      <li>
        <BaseButton as="a" href="#" variant="underline" size="lg">
          Notícias
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="underline" size="lg">
          Mídias
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="underline" size="lg">
          Informações
        </BaseButton>
      </li>
    </ul>
    <ul class="hidden md:flex items-center space-x-400">
      <li>
        <BaseButton as="button" variant="gray" size="xs">
          Imprensa
        </BaseButton>
      </li>
      <li>
        <BaseButton as="a" href="https://www.google.com" variant="gray" size="xs">
          Arquivo
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="gray" size="xs">
          Inscrições
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="gray" size="xs">
          Contato
        </BaseButton>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
