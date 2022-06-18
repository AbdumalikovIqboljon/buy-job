<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: String,
});
</script>

<template>
  <li class="max-w-62 w-full">
         
    <div class="max-w-62 w-full max-h-62 p-19 h-full bg-serviceColor rounded-full mb-6.5">
        <img 
        class="inline-block"
        :src="props.data.serviceImage" 
        :alt="props.data.imageDescription"
        :width="imageWidth"
        :height="imageHeight"

    />
    </div>
    <p class="max-w-50 w-full m-0-auto text-center text-xl text-darkblue">{{ props.data.title }}</p>
  </li>
</template>
