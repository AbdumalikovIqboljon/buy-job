<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseButton from "@/components/BaseButton.vue";
import BalanceHistoryList from "@/components/BalanceHistoryList.vue";
</script>

<template>
  <header class="bg-darkblue">
    <TheHeader />
  </header>
  <main class="text-darkblue pt-15 pb-19.5 bg-serviceColor">
    <section class="container bg-white border border-zinc-200 rounded-lg p-7.5 mb-7">
        <div class="flex items-center border-b border-b-zinc-200 pb-7.5">
            <p class="mr-5">Пополнение баланса</p>
            <BaseButton class="font-medium text-sm px-10" type="warning">Вывести деньги</BaseButton>
        </div>
    </section>
    <section class="container bg-white border border-zinc-200 rounded-lg p-7.5">
        <h3 class="text-xl font-medium">История пополнений</h3>
        <BalanceHistoryList />
    </section>
  </main>
  <footer class="bg-darkblue text-white py-5">
    <TheFooter />
  </footer>
</template>
