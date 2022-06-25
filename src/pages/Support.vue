<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <header class="bg-darkblue">
    <TheHeader />
  </header>
  <main>
21
  </main>
  <footer class="bg-darkblue text-white py-5">
    <TheFooter />
  </footer>
</template>
<style>
html {
  height: 100%;
}
#app {
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
}
footer {
  margin-top: auto;
}
</style>