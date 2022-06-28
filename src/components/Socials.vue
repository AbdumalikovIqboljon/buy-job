<script setup>
import BaseIcon from './BaseIcon.vue';

</script>
<template>
    <div class="flex w-full items-center justify-between">
        <router-link :to="{ name: 'home' }">
            <BaseIcon name="FacebookIcon" />
        </router-link>
        <router-link :to="{ name: 'home' }">
            <BaseIcon name="VkontakteIcon" />
        </router-link>
        <router-link :to="{ name: 'home' }">
            <BaseIcon name="GoogleIcon" />
        </router-link>
        <router-link :to="{ name: 'home' }">
            <BaseIcon name="ViberIcon" />
        </router-link>
        <router-link :to="{ name: 'home' }">
            <BaseIcon name="TelegramIcon" />
        </router-link>
    </div>
</template>