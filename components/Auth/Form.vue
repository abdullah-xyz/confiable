<script setup lang="ts">
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
</script>

<template>
  <!-- use keydown and up both, browsers show variation -->
  <div
    @click="appStore.closeForm"
    @keydown.esc="appStore.closeForm"
    @keyup.esc="appStore.closeForm"
    tabindex="1"
    class="fixed w-screen h-screen bg-black bg-opacity-50 flex items-start justify-center md:items-center z-30"
  >
    <div @click.stop="" class="">
      <!-- header -->
      <div
        class="bg-primary text-primaryText text-2xl font-bold px-10 md:px-6 py-6 rounded-t-md flex justify-between"
      >
        <div v-if="appStore.formRoute == 'register'">Sign Up</div>
        <div v-else-if="appStore.formRoute == 'login'">Sign In</div>
        <div v-else-if="appStore.formRoute == 'passwordReset'">
          Reset Password
        </div>
        <div @click="appStore.closeForm" class="cursor-pointer" tabindex="0">
          <Icon
            class="text-2xl hover:cursor-pointer"
            name="mingcute:close-fill"
          />
        </div>
      </div>
      <div class="p-6 bg-background rounded-b-md h-screen md:h-[30rem]">
        <!-- form -->
        <AuthRegister
          v-if="appStore.formRoute == 'register'"
          class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6"
        />
        <AuthLogin
          v-if="appStore.formRoute == 'login'"
          class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6"
        />
        <AuthPasswordReset
          v-if="appStore.formRoute == 'passwordReset'"
          class="flex flex-col w-screen md:w-96 gap-4 items-center h-full px-6"
        />
      </div>
    </div>
  </div>
</template>
