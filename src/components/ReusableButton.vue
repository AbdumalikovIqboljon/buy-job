<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "info",
    validator(value) {
      return ["info", "warning", "error", "success"].includes(value);
    },
  },
  htmlType: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: "base",
    validator(value) {
      return [
        "tiny",
        "extra-small",
        "small",
        "base",
        "medium",
        "large",
      ].includes(value);
    },
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
});

const buttonBehaviour = computed({
  tag() {
    if (this.to) {
      return "nuxt-link";
    }

    if (this.href) {
      return "a";
    }

    return "button";
  },
});
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="htmlType"
    class="inline-flex items-center justify-center rounded overflow-hidden relative disabled:(bg-gray-400 cursor-not-allowed)"
    :class="[
      {
        'button-tiny': size === 'tiny',
        'button-xs': size === 'extra-small',
        'button-sm': size === 'small',
        'button-base': size === 'base',
        'button-lg': size === 'large',
        'bg-transparent border border-solid border-sky-700 text-sky-700':
          type === 'quaternary',
      },
      secondary
        ? {
            'bg-white text-sky-700 border border-sky-700': type === 'info',
            'bg-white text-secondary border border-secondary':
              type === 'primary',
            'bg-white text-primary border border-primary': type === 'warning',
            'bg-white text-error border border-error': type === 'error',
          }
        : {
            'bg-sky-700 text-white border-sky-700': type === 'info',
            'bg-secondary text-white border-secondary': type === 'primary',
            'bg-primary text-white ': type === 'warning',
            'bg-error text-white border-primary': type === 'error',
            'bg-light-500 text-secondary border-error': type === 'tertiary',
          },
    ]"
  >
  </component>
</template>
