<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <li
    class="flex items-center justify-between w-full py-4.5 px-11 bg-white shadow-card mb-3.5 rounded-lg"
  >
    <div class="max-w-126 w-full">
      <h3 class="text-xl mb-2">{{ props.data.title }}</h3>
      <p class="text-sm text-ticketColor">{{ props.data.description }}</p>
    </div>
  </li>
</template>
