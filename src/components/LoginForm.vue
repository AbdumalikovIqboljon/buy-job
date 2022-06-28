<script setup>
import BaseInput from "./BaseInput.vue";
import BaseIcon from "./BaseIcon.vue";
import { Form } from "vee-validate";
</script>

<template>
  <Form class="w-full">
    <BaseInput class="mb-4" name="input" type="text" placeholder="Логин">
      <template #append-icon>
        <BaseIcon name="ProfileIcon" />
      </template>
    </BaseInput>

    <BaseInput class="mb-4" name="password" type="password" placeholder="Пароль">
      <template #append-icon>
        <BaseIcon name="LockIcon" />
      </template>
    </BaseInput>
  </Form>
</template>
