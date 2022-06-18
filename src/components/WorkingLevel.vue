<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: String,
});
</script>

<template>
  <li class="text-center">
         
    <div>
        <img
        class="inline-block"
        :src="props.data.serviceImage" 
        :alt="props.data.imageDescription"
    />
    </div>
    <p class="text-xl mt-7 text-darkblue">
    <span class="text-yellowish font-semibold">{{props.data.id}}.</span>
    {{ props.data.title }}</p>
  </li>
</template>
