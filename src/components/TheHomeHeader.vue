<script setup>
import { RouterLink } from "vue-router";
import SiteLogoDark from "./svgs/SiteLogoDark.vue";
import BaseButton from "./BaseButton.vue";
import UserIcon from "./svgs/UserIcon.vue";
import InboxIcon from "./svgs/InboxIcon.vue";
</script>

<template>
  <div class="container flex items-center justify-between mx-auto">
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