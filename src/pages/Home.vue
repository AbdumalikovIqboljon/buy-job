<script setup>
import { reactive } from "vue";
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";
import ServicesItem from "../components/ServicesItem.vue";
import WorkingLevel from "../components/WorkingLevel.vue";

import ToDoIcon from "../icons/todo-list-icon.svg";
import CalendarIcon from "../icons/calendar-icon.svg";
import CertificateIcon from "../icons/money-pocket-icon.svg";

import WorkingLevelFirstImg from "../assets/images/work-steps--first.png";
import WorkingLevelSecondImg from "../assets/images/work-steps--second.png";
import WorkingLevelThirdImg from "../assets/images/work-steps--third.png";
import WorkingLevelFourthImg from "../assets/images/work-steps--fourth.png";
import WorkingLevelFifthImg from "../assets/images/work-steps--fifth.png";
import WorkingLevelSixthImg from "../assets/images/work-steps--sixth.png";

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

const workingLevels = reactive([
  {
    id: 1,
    serviceImage: WorkingLevelFirstImg,
    imageDescription: "Adult smiles, took a phone",
    title: "Размещаете заказ",

  },
  {
    id: 2,
    serviceImage: WorkingLevelFourthImg,
    imageDescription: "Young woman is working with laptop",
    title: "Мы подбираем исполнителей",

  },
  {
    id: 3,
    serviceImage: WorkingLevelThirdImg,
    imageDescription: "Man is thinking about somnething,he's so curious",
    title: "Вы сами выбираете наиболее подходящего исполнителя",
  },
  {
    id: 4,
    serviceImage: WorkingLevelSecondImg,
    imageDescription: "Woman seems so surprised from something, she's smiling",
    title: "Договариваетесь с испольтелем о цене и сроках",
  },
  {
    id: 5,
    serviceImage: WorkingLevelFifthImg,
    imageDescription: "Black haired girl took phone and is looking for last payment",
    title: "Оплачиваете заказ",
  },
  {
    id: 6,
    serviceImage: WorkingLevelSixthImg,
    imageDescription: "Blonde woman with eye-glasses",
    title: "Получаете работу",
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
    <section class="mb-32">
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

    <!-- Working Levels -->
    <section class="pb-32">
      <div class="text-center mb-15">
        <h2 class="text-5xl text-darkblue font-medium">Этапы работы</h2>
      </div>
      <ul class="grid grid-cols-3 grid-rows-1 gap-y-10 gap-x-10 items-center justify-center list-none">
        <WorkingLevel
          v-for="level in workingLevels"
          :data="level"
          :key="level.id"
        />
      </ul>
    </section>


    <!-- Economy -->
    <section>
    
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
