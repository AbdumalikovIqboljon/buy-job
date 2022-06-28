<script setup>
import SiteLogo from "@/components/svgs/SiteLogoDark.vue";
import LoginForm from "../components/LoginForm.vue";
import BaseButton from "../components/BaseButton.vue";
import Socials from "../components/Socials.vue";
</script>

<template>
  <div class="bg-darkblue w-full flex items-center justify-center h-[100vh]">
    <div
      class="flex flex-col items-center max-w-110 w-full bg-white px-15 py-14 rounded-lg"
    >
      <SiteLogo class="mb-9" :width="153" :height="59"/>
      <LoginForm />
      <div class="flex items-center w-full justify-between mb-10">
        <BaseButton
          type="warning"
          class="font-medium tracking-widest uppercase text-xs px-12"
          >Войти</BaseButton
        >
        <BaseButton
          type="warning"
          class="font-medium tracking-widest uppercase text-xs px-7"
          secondary
          >Регистрация</BaseButton
        >
      </div>
      <p class="sign-in__desc flex items-center mb-9">
        <span class="mx-6 text-lg text-darkblue">Или войти через</span>
      </p>
      <Socials class="h-13" />
    </div>
  </div>
</template>

<style lang="scss">
.sign-in__desc::before,
.sign-in__desc::after {
    content: "";
    width: 60px;
    height: 1px;
    background-color: #E0DEDE;
}
</style>
