<script setup lang="ts">
const userStore = useUserStore();
const showChangeEmail = ref(false);
</script>

<template>
  <div class="bg-background pt-8 text-text">
    <div class="mx-auto max-w-screen-sm gap-8">
      <div class="flex justify-evenly">
        <img
          v-if="userStore.avatarUrl"
          :src="userStore.avatarUrl"
          :alt="userStore.name"
          class="border-2 rounded-full w-22"
        />
        <Icon
          v-else
          name="material-symbols-light:account-circle"
          class="text-9xl"
        />
      </div>
      <div class="py-6">
        <div class="text-xl">
          <span class="font-bold">Name: </span>{{ userStore.name }}
        </div>
        <div class="text-xl">
          <span class="font-bold">Email: </span>{{ userStore.email }}
          <span
            @click="showChangeEmail = !showChangeEmail"
            class="text-sm text-primary underline hover:cursor-pointer"
            >Change Email</span
          >
        </div>
        <div>
          <!-- change Eamil    -->
        </div>
      </div>
      <div class="py-8">
        <div class="text-3xl flex justify-center">
          <span class="font-bold underline decoration-error">Warning</span>
        </div>
        <div class="text-lg pt-3 flex justify-center">
          <Button label="Delete Account" />
        </div>
      </div>
    </div>
  </div>
</template>
