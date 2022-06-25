<script setup>
import  { defineAsyncComponent, defineProps, computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
})
const dynamicComponent = computed(() => {
  const name = props.name;

  return defineAsyncComponent(() => import(`./svgs/${name}.vue`))
})
</script>
<template>
    <component :is="dynamicComponent" />
</template>