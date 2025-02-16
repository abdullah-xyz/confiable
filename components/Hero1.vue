<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <div class="bg-gradient-to-tl from-secondary to-transparent to-60% h-fit overflow-hidden">
    <div
      class="flex md:flex-row flex-col md:h-[55rem] md:items-center justify-between md:pl-10 pt-16"
    >
      <!-- <div class="text-5xl max-w-screen-2xl mx-auto text-center col-span-2 text-white bg-primary p-3" >Transfoming Challenges into Oppurtunities</div> -->
      <div class="px-5 w-screen md:max-w-3xl">
        <h2 class="mb-2 text-4xl font-bold text-accent md:text-6xl">
          Welcome to
        </h2>
        <h3 class="mb-10 text-3xl font-bold text-primary md:text-7xl">
          Confiable Business!
        </h3>

        <h3
          class="mb-2 mt-10 text-2xl font-medium italic tracking-wider text-accent md:text-4xl"
        >
          Where Vision Meets Execution!
        </h3>
        <h3 class="mb-4 text-2xl font-medium text-secondary md:text-2xl">
          Empowering Entrepreneurs with the expertise to start and scale their
          businesses in more words
        </h3>

        <Button @click="appStore.openForm('register')" label="Sign Up" />
      </div>
      <div class="md:self-end">
        <NuxtImg class="w-screen md:w-auto h-auto max-h-[53rem]" src="img/ceo-bg-croped-upscaled.png" />
      </div>
      <!-- <VideoPlayer class="" /> -->
    </div>
  </div>
</template>
