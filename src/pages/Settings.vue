<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { Form } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
</script>

<template>
  <header class="bg-darkblue">
    <TheHeader />
  </header>
  <main class="text-darkblue pt-15 pb-19.5 bg-serviceColor">
    <section class="container bg-white rounded-lg px-13.5 pb-7">

      <div class="border-b border-zinc-200 pt-4.5">
        <h2 class="text-2xl font-medium mb-4">Настройки</h2>
      </div>

      <div class="pt-4 border-b border-zinc-200">
        <h2 class="text-2xl mb-5.5">Образование</h2>
        <Form class="flex flex-wrap items-center justify-between max-w-174 w-full mb-6">
          <BaseInput class="mb-3" name="input" type="text" placeholder="Учебное заведение" />
          <BaseInput class="max-w-85 mb-3" name="input" type="text" placeholder="Факультет" />
          <BaseInput class="max-w-85 mb-3" name="input" type="text" placeholder="Специальность" />
          <BaseInput class="max-w-85 mb-3"
            name="input"
            type="text"
            placeholder="Статус (выпадающий список)"
          />
          <BaseInput class="max-w-85 mb-3" name="input" type="text" placeholder="Курс" />
          <BaseButton class="px-10" type="success">Сохранить</BaseButton>
        </Form>
      </div>

      <div class="pt-5">
        <h2 class="text-2xl mb-5.5">Пароль</h2>
        <Form class="flex items-center justify-between">
            <BaseInput class="max-w-93 w-full" name="new-password" type="password" placeholder="Новый пароль" />
            <BaseInput class="max-w-93 w-full" name="verify-password" type="password" placeholder="Новый пароль ещё раз" />
            <BaseInput class="max-w-93 w-full" name="old-password" type="password" placeholder="Старый пароль" />
        </Form>
      </div>
    </section>
  </main>

  <footer class="bg-darkblue text-white py-5">
    <TheFooter />
  </footer>
</template>
