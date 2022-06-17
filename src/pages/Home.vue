<script setup>
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";
</script>

<template>
  <header>
    <TheHomeHeader />
  </header>
  <div class="container mx-auto pt-50 pb-90">
    <h1 class="text-8xl text-darkblue font-bold mb-6">Купи работу</h1>
    <p class="text-3xl font-normal text-darkblue mb-14">экономим твои деньги и время</p>
    <div class="max-w-140 w-full flex">
      <BaseButton
        class="text-sm font-semibold mr-6 uppercase py-8 px-10"
        type="warning"
        >Разместить заказ</BaseButton
      >
      <BaseButton
        class="text-sm font-semibold uppercase py-8 px-10"
        type="warning"
        secondary
        >Стать автором</BaseButton
      >
    </div>
  </div>
  <footer>
    <TheFooter />
  </footer>
</template>
