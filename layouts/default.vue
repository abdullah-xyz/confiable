<script setup lang="ts">
const userStore = useUserStore();
const appStore = useAppStore();
const user = useSupabaseUser();

onMounted(async () => {
  watchEffect(() => {
    if (user.value) {
      userStore.init();
    } else {
      userStore.$reset();
    }
  });
});
</script>

<template>
  <AuthForm v-if="appStore.isFormOpen" />
  <Toasts />
  <div class="bg-background text-text min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
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
