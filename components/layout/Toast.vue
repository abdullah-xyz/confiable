<script setup lang="ts">
import { useAppStore } from "~/store/app";
import type { IToast } from "~/types/toast";
const appStore = useAppStore();
const props = defineProps<{ toast: IToast; index: number }>();

const type = computed(() => {
  switch (props.toast.type) {
    case "success":
      return "bg-secondary";
    case "warning":
      return "bg-error";
  }
});

onMounted(() => {
  setTimeout(() => {
    appStore.clearToast(props.index);
  }, 5000);
});
</script>

<template>
  <div class="relative m-4 bg-white w-80 p-4 shadow-2xl">
    <div :class="type" class="absolute left-0 top-0 h-full px-1"></div>
    <div class="mr-4">{{ toast.content }}</div>
    <div class="absolute right-0 top-0 m-2">
      <Icon
        @click="appStore.clearToast(index)"
        class="text-base hover:cursor-pointer"
        name="mingcute:close-fill"
      />
    </div>
  </div>
</template>
