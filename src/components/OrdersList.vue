<script setup>
import { reactive } from "vue";
import OrderItem from "./OrderItem.vue";
const ordersList = reactive([
    {
        id: 1,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
    {
        id: 2,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
    {
        id: 3,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
    {
        id: 4,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
    {
        id: 5,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
    {
        id: 6,
        title: "Название заказа",
        description: "Предмет, Тип задачи",
        cost: "1234",
        executorsName: "James",
    },
])
</script>
<template>
    <ul>
        <OrderItem v-for="ordersItem in ordersList" :data="ordersItem" :key="ordersItem.id"/>
    </ul>
</template>
