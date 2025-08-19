<script setup>
import { computed, ref, onMounted } from "vue";

const props = defineProps({
  message: { type: String, required: true },
  description: { type: String, default: "" },
  type: { type: String, default: "success" }, // success | error | info | warning
  duration: { type: Number, default: 3000 }, // Auto-close in ms
});

const emit = defineEmits(["close"]);

const visible = ref(true);

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      visible.value = false;
      emit("close");
    }, props.duration);
  }
});

const icon = computed(() => {
  switch (props.type) {
    case "success":
      return "✔"; // You can replace with an SVG icon
    case "error":
      return "✖";
    case "info":
      return "ℹ";
    case "warning":
      return "⚠";
    default:
      return "";
  }
});

const styleDefault = "align-self: baseline; justify-self: anchor-center; bottom: 2rem;"

</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      :style="styleDefault"
      class="absolute botom-800 right-800 flex items-start gap-3 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-sm"
    >
      <!-- Icon -->
      <div class="flex-shrink-0 text-green-500 text-xl">
        {{ icon }}
      </div>

      <!-- Message -->
      <div class="flex-1">
        <p class="font-semibold text-gray-800">{{ message }}</p>
        <p v-if="description" class="text-sm text-gray-500">{{ description }}</p>
      </div>

      <!-- Close Button -->
      <button
        @click="visible = false; emit('close')"
        class="text-gray-400 hover:text-gray-600"
      >
        ✖
      </button>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
