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
    class="fixed w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-40"
  >
    <div @click.stop="" class="">
      <!-- header -->
      <div
        class="bg-light-primary text-light-primaryText text-2xl font-bold p-6 rounded-t-md flex justify-between"
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
      <div class="p-6 bg-light-background rounded-b-md h-[30rem]">
        <!-- form -->
        <LayoutAuthRegister v-if="appStore.formRoute == 'register'" />
        <LayoutAuthLogin v-if="appStore.formRoute == 'login'" />
        <LayoutAuthPasswordReset v-if="appStore.formRoute == 'passwordReset'" />
      </div>
    </div>
  </div>
</template>
