<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: String,
});
</script>

<template>
  <li class="text-center flex flex-col items-center max-w-124 w-full">
         
    <div class="max-w-62 w-full max-h-62 p-19 h-full bg-serviceColor rounded-full mb-8 ">
        <img
        class="inline-block"
        :src="props.data.image" 
        :alt="props.data.imageDescription"
    />
    </div>
    <h3 class="text-3xl font-medium mb-4 text-darkblue">{{ props.data.title }}</h3>
    <p class="text-lg text-darkblue">{{ props.data.description }}</p>
  </li>
</template>
