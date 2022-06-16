<script setup>
    import { RouterLink } from 'vue-router';
    import SiteLogo from './SiteLogo.vue';
    import TheHeaderBalance from "../components/TheHeaderBalance.vue";
</script>


<template>
    <div class="flex max-w-330 w-full mx-auto pt-5 pb-5">
        <router-link :to="{ name: 'home' }">
            <SiteLogo />
        </router-link>
        <TheHeaderBalance class="text-white" />
    </div>
</template>