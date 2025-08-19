<script setup>
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
</script>

<template>
  <div
    class="p-400 lg:pb-0 mx-auto lg:max-w-7xl hidden md:flex items-center justify-between"
  >
    <ul class="flex flex-grow justify-between items-center me-400 h-1600">
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.programming') }}
        </BaseButton>
      </li>
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.edition2024') }}
        </BaseButton>
      </li>
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.aboutUs') }}
        </BaseButton>
      </li>
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="a"
          href="#"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.news') }}
        </BaseButton>
      </li>
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.media') }}
        </BaseButton>
      </li>
      <li class="h-full">
        <BaseButton
          class="h-full uppercase"
          as="button"
          variant="underline"
          size="lg"
        >
          {{ $t('navigation.information') }}
        </BaseButton>
      </li>
    </ul>
    <ul class="hidden md:flex items-center space-x-400">
      <li>
        <BaseButton as="button" variant="gray" size="xs"> Imprensa </BaseButton>
      </li>
      <li>
        <BaseButton
          as="a"
          href="https://www.google.com"
          variant="gray"
          size="xs"
        >
          Arquivo
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="gray" size="xs">
          Inscrições
        </BaseButton>
      </li>
      <li>
        <BaseButton as="button" variant="gray" size="xs"> Contato </BaseButton>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
