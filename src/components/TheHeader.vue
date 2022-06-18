<script setup>
import { RouterLink } from "vue-router";
import SiteLogo from "./SiteLogo.vue";
import BaseButton from "./BaseButton.vue";
import InboxIcon from "./svgs/InboxIcon.vue";
import TheHeaderBalance from "@/components/TheHeaderBalance.vue";
import UserProfile from "@/components/UserProfile.vue";
</script>

<template>
  <div class="flex items-center justify-between max-w-330 w-full mx-auto pb-3 pt-3">
    <router-link :to="{ name: 'home' }">
      <SiteLogo />
    </router-link>
    <TheHeaderBalance class="text-white" />
    <router-link class="flex items-center" :to="{ name: 'home' }">
      <InboxIcon />
      <span class="text-white ml-2.5">Поддержка</span>
    </router-link>

    <router-link class="flex items-center" :to="{ name: 'home' }">
      <InboxIcon />
      <span class="text-white ml-2.5">Мои заказы</span>
    </router-link>
    <router-link class="flex items-center" :to="{ name: 'home' }">
      <InboxIcon />
      <span class="text-white ml-2.5">Настройки</span>
    </router-link>
    <BaseButton type="warning">Разместить заказ</BaseButton>

    <!-- User Profile -->
    <UserProfile />
  </div>
</template>
