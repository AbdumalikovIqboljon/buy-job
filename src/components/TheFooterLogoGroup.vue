<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>

<template>
  <div class="grid-cols-1 gap-x-2">
    <router-link :to="{ name: 'home' }" class="flex border rounded-xl p-4 border-white border-opacity-20 min-h-15 h-full">
        <BaseIcon name="VisaIcon" class="self-center" />
    </router-link>
    <router-link :to="{ name: 'home' }" class="border rounded-xl p-4 border-white border-opacity-20 max-h-15 h-full">
        <BaseIcon name="MastercardIcon" />
    </router-link>
    <router-link :to="{ name: 'home' }" class="border rounded-xl p-4 border-white border-opacity-20 max-h-15 h-full">
        <BaseIcon name="YandexMoneyIcon" />
    </router-link>
    <router-link :to="{ name: 'home' }" class="border rounded-xl p-4 border-white border-opacity-20 max-h-15 h-full">
        <BaseIcon name="WebmoneyIcon" />
    </router-link>
  </div>
</template>
