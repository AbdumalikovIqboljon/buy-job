<script setup>
    import { RouterLink } from 'vue-router';
    import SiteLogo from './SiteLogo.vue';
    // import TheHeaderBalance from "../components/TheHeaderBalance.vue";
    import BaseIcon from './BaseIcon.vue';
    import TheHeaderBalance from "@/components/TheHeaderBalance.vue";
</script>


<template>
    <div class="flex items-center max-w-330 w-full mx-auto pb-3 pt-3">
        <router-link :to="{ name: 'home' }">
            <SiteLogo />
        </router-link>
        <TheHeaderBalance class="text-white" />
        <BaseIcon name="calendar-icon" />
    </div>
</template>