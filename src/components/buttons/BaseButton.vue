<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Welcome"
    // required: true
  },
  colors: {
    type: String,
    default: "hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
  }
})
</script>

<template>
  <button class="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold leading-[19.6px] transition-colors duration-200"
          :class="colors">
    {{ props.text }}
    <img src="../../assets/Vector.svg" alt="carret" class="w-full">
  </button>
</template>

<style scoped></style>

<!-- /* Body/Strong/Body Strong Small */
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 19.6px */ -->
