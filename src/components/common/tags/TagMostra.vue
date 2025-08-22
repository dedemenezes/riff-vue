<script>
const DEFAULT_CLASS = "bg-magenta-600 text-white-transp-1000";
const VARIANT_CLASSES = {
  "gala-abertura": {
    filled: "bg-magenta-600 text-white-transp-1000",
    outline: "border-l-4 border-magenta-600 text-neutrals-900",
  },
  "gala-encerramento": {
    filled: "bg-magenta-800 text-white",
    outline: "border-l-4 border-magenta-800 text-neutrals-900",
  },
  resistencias: {
    filled: "bg-white-transp-1000 text-neutrals-900",
    outline: "border-l-4 border-white-transp-1000 text-neutrals-900",
  },
  "cine-memoria": {
    filled: "bg-violeta-200 text-neutrals-900",
    outline: "border-l-4 border-violeta-200 text-neutrals-900",
  },
  "midnight-movies": {
    filled: "bg-violeta-600 text-white-transp-1000",
    outline: "border-l-4 border-violeta-600 text-neutrals-900",
  },
  "cinema-capacete": {
    filled: "bg-neutrals-400 text-neutrals-900",
    outline: "border-l-4 border-neutrals-400 text-neutrals-900",
  },
  "classicos--cults": {
    filled: "bg-neutrals-900 text-white-transp-1000",
    outline: "border-l-4 border-neutrals-900 text-neutrals-900",
  },
  expectativas: {
    filled: "bg-azul-600 text-white-transp-1000",
    outline: "border-l-4 border-azul-600 text-neutrals-900",
  },
  "itinerarios-unicos": {
    filled: "bg-verde-600 text-white-transp-1000",
    outline: "border-l-4 border-verde-600 text-neutrals-900",
  },
  "panorama-mundial": {
    filled: "bg-vermelho-600 text-white-transp-1000",
    outline: "border-l-4 border-vermelho-600 text-neutrals-900",
  },
  "premiere-latina": {
    filled: "bg-amarelo-800 text-neutrals-900",
    outline: "border-l-4 border-amarelo-800 text-neutrals-900",
  },
  "premiere-brasil": {
    filled: "bg-laranja-600 text-neutrals-900",
    outline: "border-l-4 border-laranja-600 text-neutrals-900",
  },
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  variant: {
    type: String,
    required: true,
    // validator: (value) => Object.keys(VARIANT_CLASSES).includes(value),
    default: "cinema-capacete",
  },
  text: { type: String, default: "Cinema Capacete" },
  mode: {
    type: String,
    validator: (value) => ["filled", "outline"].includes(value),
    default: "filled",
  },
});

const finalClass = computed(() => {
  const variantClass = VARIANT_CLASSES[props.variant]?.[props.mode];

  if (!variantClass) {
    // console.warn(
    //   `Invalid combination: variant="${props.variant}" mode="${props.mode}. DISPLAYING DEFAULT"`,
    // );
    return DEFAULT_CLASS;
  }

  return variantClass;
});
const displayText = computed(() => props.text?.trim() || "Cinema Capacete");
</script>

<template>
  <span
    class="py-100 px-250 uppercase font-body text-2xs font-medium leading-[16px] tracking-widest rounded-br-100 max-w-fit"
    :class="finalClass"
    role="label"
    :aria-label="`${variant} tag`"
    >{{ displayText }}</span
  >
</template>
