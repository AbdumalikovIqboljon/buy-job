<script setup>
import { RouterLink } from "vue-router";
import SiteLogoDark from "./svgs/SiteLogoDark.vue";
import BaseButton from "./BaseButton.vue";
import UserIcon from "./svgs/UserIcon.vue";
import InboxIcon from "./svgs/InboxIcon.vue";
</script>

<template>
  <div class="container flex items-center justify-between mx-auto pb-3 pt-12">
    <router-link :to="{ name: 'home' }">
      <SiteLogoDark />
    </router-link>
    <router-link :to="{ name: 'home' }">
        О сервисе
    </router-link>
    <router-link class="flex items-center" :to="{ name: 'home' }">
      <InboxIcon />
      <span class="ml-2.5">Поддержка</span>
    </router-link>
    <BaseButton type="warning">
        <span class="mr-4">Войти</span>
        <UserIcon />
    </BaseButton>
    

  </div>

</template>

<style>
body {
    background-image: url("../assets/images/site-hero-woman-bg.png"),
                      url("../assets/images/site-hero-bg.svg");
    background-size: 716px 657px,
                     1920px 1118px;
    background-repeat: no-repeat,
                       no-repeat;
    background-position: calc(50% + 450px) calc(50% - 50px),
                         calc(50% - 100px) calc(50% - 170px);
}
</style>