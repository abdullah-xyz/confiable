<script setup lang="ts">
defineProps({
  name: String,
  price: Number,
  slug: String,
  one_liner: String,
});
</script>

<template>
  <NuxtLink to="/lecture">
    <div class="w-[15rem] h-[28rem] md:w-[25rem] text-text rounded-md flex flex-col gap-x-8 border-2">
      <img src="/img/tmpCover.jpg" alt="" class="w-full rounded-t-md aspect-video" />
      <div class="p-4">
        <h3 class="text-2xl font-bold mb-2">{{ name }}</h3>
        <p class="text-lg font-medium mb-4">&#8377; {{ price }}</p>
        <p>{{ one_liner }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
