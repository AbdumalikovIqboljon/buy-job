<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseButton from "@/components/BaseButton.vue";
import TicketList from "@/components/TicketList.vue";
import BaseIcon from "../components/BaseIcon.vue";
</script>

<template>
  <header class="bg-darkblue">
    <TheHeader />
  </header>
  <main class="text-darkblue pt-15 pb-19.5 bg-serviceColor">
    <div class="container">
      <div class="flex items-center justify-between mb-12.5">
        <h2 class="text-2xl font-medium">Поддержка</h2>
        <BaseButton type="warning" secondary>
          <span class="mr-4">Создать тикет</span>
          <BaseIcon name="RightArrowIcon" />
        </BaseButton>
      </div>
      <TicketList />
    </div>
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
