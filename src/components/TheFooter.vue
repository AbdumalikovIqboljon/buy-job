<script setup>
import { RouterLink } from "vue-router";
import TheFooterLogoGroup from "./TheFooterLogoGroup.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <div class="max-w-330 w-full mx-auto">
    <div class="flex items-center">
      <p class="mr-3.5">Способы оплаты</p>
      <TheFooterLogoGroup class="flex items-center mr-auto"/>
      <p>Права защищены и опасны</p>
      <router-link :to="{ name: 'home' }" class="flex items-center mr-5 ml-15">
        <BaseIcon name="ChatIcon" />
        <p class="ml-3 text-lg">Поддержка</p>
      </router-link>
      <BaseButton type="warning">Разместить заказ</BaseButton>
    </div>
  </div>
</template>
