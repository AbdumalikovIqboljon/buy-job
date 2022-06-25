<script setup>
import { defineProps } from "vue";
import BaseIcon from "./BaseIcon.vue";

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
      <h3 class="text-xl mb-2">{{ props.data.ticketTitle }}</h3>
      <p class="text-sm text-ticketColor">{{ props.data.ticketDescription }}</p>
    </div>

    <div>
      <p
        v-if="props.data.isInProcess"
        class="flex items-center justify-end text-success font-medium"
      >
        <BaseIcon name="ClockIcon" />
        <span class="ml-3">В процессе</span>
      </p>
      <p v-else class="flex items-center justify-end text-requestColor font-medium">
        <BaseIcon name="TickIcon" />
        <span class="ml-3">Исполнено</span>
      </p>
      <p class="text-ticketColor">
        <span class="flex items-center">
          <BaseIcon name="MiniCalendarIcon" />
          <span class="ml-3">Дата запроса</span>
        </span>
        <time class="block text-right">{{ props.data.requestDate }}</time>
      </p>
    </div>
  </li>
</template>
