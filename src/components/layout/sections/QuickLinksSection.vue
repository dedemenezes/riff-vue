<script setup>
import SectionHeader from "@/components/ui/typography/SectionHeader.vue"
import QuickLinkCard from "@/components/ui/cards/QuickLinkCard.vue";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div class="bg-neutrals-200">
    <div class="max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
      <div class="px-400 py-800 flex flex-col space-y-800">
        <SectionHeader title="Links Rápidos"/>
        <div class="flex flex-col space-y-800 lg:space-y-0 lg:grid lg:grid-cols-3">
          <QuickLinkCard
            v-for="link in props.links"
            :key="link.id"
            :title="link.title"
            :description="link.description"
            :href="link.href"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
