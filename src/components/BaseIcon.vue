<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};

</script>

<template>
  <div v-html="import(`../icons/${name}.svg?raw`)" />

</template>