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
  <LayoutAuthForm v-if="appStore.isFormOpen" />
  <LayoutToasts />
  <LayoutNavbar />

  <slot />

  <LayoutFooter />
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
