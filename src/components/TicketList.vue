<script setup>
import { reactive } from "vue";
import TicketItem from "./TicketItem.vue";
const ticketsData = reactive([
  {
    id: 1,
    ticketTitle: "Название тикета",
    ticketDescription: "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi ",
    isInProcess: true,
    requestDate: "11.02.11",
  },
  {
    id: 2,
    ticketTitle: "Название тикета",
    ticketDescription: "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi ",
    isInProcess: true,
    requestDate: "11.02.11",
  },
  {
    id: 3,
    ticketTitle: "Название тикета",
    ticketDescription: "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi ",
    isInProcess: false,
    requestDate: "11.02.11",
  },
  {
    id: 4,
    ticketTitle: "Название тикета",
    ticketDescription: "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi ",
    isInProcess: false,
    requestDate: "11.02.11",
  },
  {
    id: 5,
    ticketTitle: "Название тикета",
    ticketDescription: "Maecenas vestibulum libero turpis, eu efficitur eros vehicula a. Duis fermentum fermentum tortor semper vulputate. Sed arcu est, tincidunt vel mi ",
    isInProcess: false,
    requestDate: "11.02.11",
  },
]);
</script>

<template>
  <ul>
    <TicketItem v-for="ticket in ticketsData" :data="ticket" :key="ticket.id" />
  </ul>
</template>
