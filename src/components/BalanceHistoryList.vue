<script setup>
import { reactive } from "vue";
import BalanceHistoryItem from "./BalanceHistoryItem.vue";
const balanceHistoryList = reactive([
    {
        income: "1234",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: false,
    },
    {
        income: "1234",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: false,
    },
    {
        income: "0",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: true,
    },
    {
        income: "1234",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: true,
    },
    {
        income: "1234",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: true,
    },
    {
        income: "1234",
        id: "11112131234",
        receivedDate: "27.06.2022",
        isInProcess: true,
    },
])
</script>
<template> 
    <ul class="grid grid-cols-2 gap-x-9 gap-y-3.5">
        <BalanceHistoryItem v-for="balanceHistoryItem in balanceHistoryList" :data="balanceHistoryItem" :key="balanceHistoryItem[index]" />
    </ul>
</template>