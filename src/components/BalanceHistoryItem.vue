<script setup>
import { defineProps } from "vue";
const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <li class="max-w-148 border border-zinc-200 rounded-lg px-6 py-3.5 w-full">
    <div class="flex items-center justify-between">
        <p>+ {{ props.data.income }}</p>
        <div>
            <p>ID: {{ props.data.id }}</p>
            <p>{{ props.data.receivedDate }}</p>
            <p> Статус:</p>
        </div>
    </div>
    </li>
</template>