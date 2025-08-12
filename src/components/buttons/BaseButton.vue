<script setup>
const { as, type, variant, size, disabled } = defineProps({
  as: { type: String, default: 'button' }, // Could be 'a', 'router-link', etc.
  type: { type: String, default: 'button' }, // Only relevant if as=button
  variant: { type: String, default: 'gray' }, // primary, secondary, ghost...
  size: { type: String, default: 'md' }, // sm, md, lg
  disabled: { type: Boolean, default: false }
})

const baseStyles = 'font-body inline-flex items-center justify-center rounded-lg transition-colors duration-200 focus:outline-2 focus:outline-offset-2'

const variants = {
  gray: "text-neutrals-900 bg-neutrals-200 hover:bg-neutrals-300 active:bg-neutrals-300 focus:outline-neutrals-300",
  cta: "text-white-transp-1000 bg-gradient-to-r from-magenta-600 to-laranja-600 hover:bg-gradient-to-l",
  rioMarket: 'text-white bg-vermelho-600'
}

const sizes = {
  xs: "px-200 py-150 text-sm font-regular leading-[21px]",
  sm: "px-300 py-200 text-sm font-semibold leading-[19.6px]",
  md: "px-400 py-400 text-md font-semibold leading-[22.4px]"
}
                      //  px-200 py-400
                      //  text-sm font-body font-semibold leading-[19.6px]
                      //  text-neutrals-700
                      //  border-neutrals-900
                      //  hover:border-b-[1.5px]
                      //  active:text-neutrals-900 active:border-none
                      //  focus:outline-none focus:border-b-[1.5px]
</script>

<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled"
    :class="[baseStyles, sizes[size], variants[variant]]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
