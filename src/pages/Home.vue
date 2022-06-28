<script setup>
import { reactive, onMounted, onUnmounted } from "vue";
import TheHomeHeader from "../components/TheHomeHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import BaseButton from "../components/BaseButton.vue";
import ServicesItem from "../components/ServicesItem.vue";
import WorkingLevel from "../components/WorkingLevel.vue";
import Guarantee from "../components/Guarantee.vue";

import ToDoIcon from "../icons/todo-list-icon.svg";
import CalendarIcon from "../icons/calendar-icon.svg";
import CertificateIcon from "../icons/money-pocket-icon.svg";

import WorkingLevelFirstImg from "../assets/images/work-steps--first.png";
import WorkingLevelSecondImg from "../assets/images/work-steps--second.png";
import WorkingLevelThirdImg from "../assets/images/work-steps--third.png";
import WorkingLevelFourthImg from "../assets/images/work-steps--fourth.png";
import WorkingLevelFifthImg from "../assets/images/work-steps--fifth.png";
import WorkingLevelSixthImg from "../assets/images/work-steps--sixth.png";

import ShieldIcon from "../icons/warranty-icon.svg";
import MoneyPocketIcon from "../icons/money-pocket-icon.svg";
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
    imageDescription:
      "Black haired girl took phone and is looking for last payment",
    title: "Оплачиваете заказ",
  },
  {
    id: 6,
    serviceImage: WorkingLevelSixthImg,
    imageDescription: "Blonde woman with eye-glasses",
    title: "Получаете работу",
  },
]);

const guaranteeDeals = reactive([
  {
    id: 1,
    title: "Гарантия возврата",
    image: ShieldIcon,
    description:
      "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi id, tristique mattis lectus. Ut rutrum fringilla urna iaculis laoreet. Vestibulum interdum porttitor ligula eget pulvinar.",
  },
  {
    id: 2,
    title: "Безопасная сделка",
    image: MoneyPocketIcon,
    description:
      "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi id, tristique mattis lectus. Ut rutrum fringilla urna iaculis laoreet. Vestibulum interdum porttitor ligula eget pulvinar.",
  },
]);

function handleScroll(event) {
  let header = document.querySelector("#dynamic");
  if(window.scrollY > 50) {
    console.log(window.scrollY);
    header.classList.add("newClass");
  } 

  if(window.scrollY <= 50) {
    header.classList.remove("newClass");
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <!-- Reusable Header -->
  <header class="fixed w-full" id="dynamic" @scroll="handleScroll">
    <TheHomeHeader />
  </header>

  <!-- Main -->
  <main>
    <!-- Site Hero -->
    <section class="site-hero">
      <div class="container mx-auto pt-50 pb-90">
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
      </div>
    </section>

    <!-- Services -->
    <section class="container mx-auto mb-32">
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
    <section class="container mx-auto pb-32">
      <div class="text-center mb-15">
        <h2 class="text-5xl text-darkblue font-medium">Этапы работы</h2>
      </div>
      <ul
        class="grid grid-cols-3 grid-rows-1 gap-y-10 gap-x-10 items-center justify-center list-none"
      >
        <WorkingLevel
          v-for="level in workingLevels"
          :data="level"
          :key="level.id"
        />
      </ul>
    </section>

    <!-- Economy -->
    <section class="economy">
      <div class="container flex flex-row-reverse">
        <article class="max-w-164.5 w-full">
          <h2 class="text-5xl mb-14 text-darkblue !items-start font-medium">
            Экономим ваше время
          </h2>
          <p class="text-darkblue text-lg mb-4.5">
            Maecenas vestibulum libero turpis, eu efficitur eros vehicula a.
            Duis fermentum fermentum tortor semper vulputate. Sed arcu est,
            tincidunt vel mi id, tristique mattis lectus. Ut rutrum fringilla
            urna iaculis laoreet. Vestibulum interdum porttitor ligula eget
            pulvinar. Nullam porttitor rutrum magna vitae vulputate. Sed
            facilisis quis leo eget sollicitudin. Aliquam id tincidunt risus.
            Nullam quis sem non sapien pharetra sodales.
          </p>
          <p class="text-darkblue text-lg">
            Maecenas vestibulum libero turpis, eu efficitur eros vehicula a.
            Duis fermentum fermentum tortor semper vulputate. Sed arcu est,
            tincidunt vel mi id, tristique mattis lectus.
          </p>
        </article>
      </div>
    </section>
    <section class="container pb-28">
      <div class="text-center mb-15">
        <h2 class="text-5xl text-darkblue font-medium">
          Гарантия возврата денег
        </h2>
      </div>
      <ul class="flex justify-around list-none">
        <Guarantee
          v-for="guarantee in guaranteeDeals"
          :data="guarantee"
          :key="guarantee.id"
        />
      </ul>
    </section>
  </main>

  <!-- Reusable Footer -->
  <footer class="footer bg-darkblue">qwqw lorem20</footer>
</template>

<style lang="scss" scoped>
.site-hero {
  background-image: url("../assets/images/site-hero-woman-bg.png"),
    url("../assets/images/site-hero-bg.svg");
  background-size: 716px 657px, 1920px 1118px;
  background-repeat: no-repeat, no-repeat;
  background-position: calc(50% + 450px) calc(50% + 50px),
    calc(50% - 70px) calc(50% - 100px);
}
#dynamic {
  padding: 20px 0;
  transition: background-color 0.2s linear,
              box-shadow 0.2s linear;
}
.newClass {
  border:none;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 5px 0px #ccc;
  color: #222;
  z-index: 99;
}
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
.economy {
  background-image: url("../assets/images/economy-section-bg.svg");
  background-size: 2300px 976px;
  background-position: calc(50%) calc(50%);
  background-repeat: no-repeat;
  padding: 300px 0;
}
.footer {
  background-image: url("../assets/images/footer-bg.svg");
  background-size: 2240px 340px;
  background-repeat: no-repeat;
}
</style>
