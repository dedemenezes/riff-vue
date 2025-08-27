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
      return `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="text-vermelho-400"
        width="50"
        height="50"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5.97659 5.8074C6.03464 5.74919 6.10361 5.70301 6.17954 5.67151C6.25547 5.64 6.33688 5.62378 6.41909 5.62378C6.50129 5.62378 6.5827 5.64 6.65863 5.67151C6.73456 5.70301 6.80353 5.74919 6.86159 5.8074L10.1691 9.11615L13.4766 5.8074C13.5347 5.74929 13.6037 5.70319 13.6796 5.67174C13.7555 5.64029 13.8369 5.62411 13.9191 5.62411C14.0013 5.62411 14.0826 5.64029 14.1586 5.67174C14.2345 5.70319 14.3035 5.74929 14.3616 5.8074C14.4197 5.86551 14.4658 5.93449 14.4972 6.01042C14.5287 6.08634 14.5449 6.16772 14.5449 6.2499C14.5449 6.33208 14.5287 6.41345 14.4972 6.48938C14.4658 6.5653 14.4197 6.63429 14.3616 6.6924L11.0528 9.9999L14.3616 13.3074C14.4197 13.3655 14.4658 13.4345 14.4972 13.5104C14.5287 13.5863 14.5449 13.6677 14.5449 13.7499C14.5449 13.8321 14.5287 13.9135 14.4972 13.9894C14.4658 14.0653 14.4197 14.1343 14.3616 14.1924C14.3035 14.2505 14.2345 14.2966 14.1586 14.328C14.0826 14.3595 14.0013 14.3757 13.9191 14.3757C13.8369 14.3757 13.7555 14.3595 13.6796 14.328C13.6037 14.2966 13.5347 14.2505 13.4766 14.1924L10.1691 10.8836L6.86159 14.1924C6.80348 14.2505 6.73449 14.2966 6.65857 14.328C6.58264 14.3595 6.50127 14.3757 6.41909 14.3757C6.33691 14.3757 6.25553 14.3595 6.17961 14.328C6.10368 14.2966 6.0347 14.2505 5.97659 14.1924C5.91848 14.1343 5.87238 14.0653 5.84093 13.9894C5.80948 13.9135 5.7933 13.8321 5.7933 13.7499C5.7933 13.6677 5.80948 13.5863 5.84093 13.5104C5.87238 13.4345 5.91848 13.3655 5.97659 13.3074L9.28534 9.9999L5.97659 6.6924C5.91838 6.63434 5.8722 6.56537 5.84069 6.48944C5.80919 6.41351 5.79297 6.33211 5.79297 6.2499C5.79297 6.16769 5.80919 6.08629 5.84069 6.01035C5.8722 5.93442 5.91838 5.86545 5.97659 5.8074Z"
          fill="currentColor"
        />
      </svg>`;
    case "info":
      return "ℹ";
    case "warning":
      return "⚠";
    default:
      return "";
  }
});

const styleDefault =
  "align-self: baseline; justify-self: anchor-center; bottom: 2rem;";
</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      :style="styleDefault"
      class="absolute botom-800 right-800 flex items-center gap-3 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-sm"
    >
      <!-- Icon -->
      <div v-html="icon" class="flex-shrink-0 text-green-500 text-xl"></div>

      <!-- Message -->
      <div class="flex-1">
        <p class="font-semibold text-gray-800">{{ message }}</p>
        <p v-if="description" class="text-sm text-gray-500">
          {{ description }}
        </p>
      </div>

      <!-- Close Button -->
      <button
        @click="
          visible = false;
          emit('close');
        "
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
