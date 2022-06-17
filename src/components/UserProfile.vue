<script setup>
import UserProfileImage from "@/assets/Pngs/profile-image.png";
import BaseButton from "./BaseButton.vue";
</script>
<template>
  <div class="grid grid-cols-2 items-center">
    <button>
      <img :src="UserProfileImage" alt="User profile image" />
    </button>
    <BaseButton class="text-bordergrey" type="info" secondary>Выйти</BaseButton>
  </div>
</template>
