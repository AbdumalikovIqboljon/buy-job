<script setup>
import SiteLogo from "@/components/svgs/SiteLogoDark.vue";
import RegisterForm from "../components/RegisterForm.vue";
import BaseButton from "../components/BaseButton.vue";
</script>

<template>
  <div class="bg-darkblue w-full flex items-center justify-center h-[100vh]">
    <div
      class="flex flex-col items-center max-w-110 w-full bg-white px-15 py-14 rounded-lg"
    >
      <SiteLogo class="mb-9" :width="153" :height="59" />
      <RegisterForm />

      <BaseButton
        type="warning"
        class="font-medium tracking-widest uppercase text-xs w-full py-7"
        >Регистрация</BaseButton>
    </div>
  </div>
</template>
