<script setup lang="ts">
import { getDoc, collection, doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useUserStore } from "~/store/user";
import { useAppStore } from "~/store/app";

const userStore = useUserStore();
const appStore = useAppStore();

onMounted(() => {
  userStore.init();
});
</script>

<template>
  <LayoutAuthForm v-if="appStore.isFormOpen" />
  <LayoutToasts />
  <LayoutNavbar />

  <slot />

  <LayoutFooter />
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-button {
  width: 5px;
  height: 0px;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #151b56;
  border: 0px solid transparent;
  border-radius: 50px;
}

::-webkit-scrollbar-track {
  border: 0px none #fff;
  border-radius: 53px;
}
</style>
