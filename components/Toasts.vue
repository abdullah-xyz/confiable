<script setup lang="ts">
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
</script>

<template>
  <div class="fixed right-0 top-0 z-40">
    <Toast
      v-for="(toast, index) of appStore.toasts"
      :index="index"
      :toast="toast"
    />
  </div>
</template>
