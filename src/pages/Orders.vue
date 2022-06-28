<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import OrdersList from "@/components/OrdersList.vue";
</script>

<template>
  <header class="bg-darkblue">
    <TheHeader />
  </header>
  <main class="text-darkblue pt-15 pb-19.5 bg-serviceColor">
    <div class="container">
      <div class="flex items-center justify-between mb-12.5">
        <h2 class="text-2xl font-medium">Мои заказы</h2>
      </div>
      <OrdersList />
    </div>
  </main>
  <footer class="bg-darkblue text-white py-5">
    <TheFooter />
  </footer>
</template>
