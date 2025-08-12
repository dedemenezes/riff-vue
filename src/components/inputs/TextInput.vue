<script setup>
const { id, label } = defineProps({
  id: { type: [Number, String], required: true },
  label: {type: String, default: null }
})
</script>
<template>
  <div>
    <label v-if="label" :for="id">{{ label }}</label>
    <input type="text"
           :name="label"
           :id="id"
           class="border-neutrals-300 border-100">
  </div>
</template>
