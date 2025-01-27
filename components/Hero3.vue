<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <!-- <div class="size-[700px] bg-secondary absolute rounded-full blur-2xl bottom-0 -translate-x-1/3 translate-y-1/2 -z-10"></div>
  <div class="size-[700px] bg-secondary absolute rounded-full blur-2xl top-0 left-0 -z-10"></div> -->
  <div class="flex flex-col items-center pt-20 pb-16 gap-16 bg-gradient-to-b from-transparent from-75% to-secondary">
    <div class="text-center tracking-wider">
      <h2 class="text-6xl text-primary font-bold pb-4">Welcome To Confiable Business</h2>
      <h3 class="text-5xl text-primary font-medium mb-4">Want To Be An Entrepreneur! </h3>
    </div>
    <div class="w-11/12 md:w-4/6">
      <VideoPlayer />
    </div>
  </div>
</template>
