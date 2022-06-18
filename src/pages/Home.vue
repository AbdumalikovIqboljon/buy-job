<script setup>
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";
import { reactive } from "vue";
import ServicesItem from "../components/ServicesItem.vue";
import ToDoIcon from "../icons/todo-list-icon.svg";
import CalendarIcon from "../icons/calendar-icon.svg";
import CertificateIcon from "../icons/money-pocket-icon.svg";

const services = reactive([
  {
    id: 1,
    serviceImage: ToDoIcon,
    imageDescription: "To do list icon",
    title: "Выполнение работы гарантируется",
    imageWidth: "123",
    imageHeight: "127",

  },
  {
    id: 2,
    serviceImage: CalendarIcon,
    imageDescription: "Calendar icon",
    title: "Сроки вы определяете сами",
    imageWidth: "96",
    imageHeight: "97",

  },
  {
    id: 3,
    serviceImage: CertificateIcon,
    imageDescription: "Certificate icon",
    title: "Цену вы выбираете сами",
    imageWidth: "90", 
    imageHeight: "124",
  },
]);
</script>

<template>
  <!-- Reusable Header -->
  <header>
    <TheHomeHeader />
  </header>

  <!-- Main -->
  <main class="container mx-auto">
    <!-- Site Hero -->
    <section class="pt-50 pb-90">
      <h1 class="text-8xl text-darkblue font-bold mb-6">Купи работу</h1>
      <p class="text-3xl font-normal text-darkblue mb-14">
        экономим твои деньги и время
      </p>
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
    </section>

    <!-- Services -->
    <section>
      <div class="text-center mb-15">
        <h2 class="text-5xl text-darkblue font-medium">Преимущества сервиса</h2>
      </div>
      <ul class="flex justify-around list-none">
        <ServicesItem
          v-for="service in services"
          :data="service"
          :key="service.id"
        />
      </ul>
    </section>
  </main>

  <!-- Reusable Footer -->
  <footer>
    <TheFooter />
  </footer>
</template>

<style lang="scss" scoped>
h2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    width: 74px;
    height: 6px;
    margin-top: 24px;
    border-radius: 10px;
    background-color: #ffcc80;
  }
}
</style>
