<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
  <div
  class="md:py-0 h-screen py-16 px-10 max-w-screen-2xl mx-auto grid items-center lg:grid-cols-[2fr_3fr] gap-14 md:gap-16 xl:gap-32"
  >
  <div class="bg-gradient-to-br from-transparent via-transparent to-secondary absolute top-0 right-0 w-screen h-full">h</div>
    <!-- <div class="text-5xl max-w-screen-2xl mx-auto text-center col-span-2 text-white bg-primary p-3" >Transfoming Challenges into Oppurtunities</div> -->

      <div>
        <h2 class="text-6xl font-bold mb-8">Welcome to Confiable Business!</h2>
        <h3 class="text-4xl text-accent font-medium mb-4">Helping establish solid business! </h3>
        <h3 class="text-4xl mb-4">
        Teaching aspiring enterpeneur to start and grow their businesses..
      </h3>
        
        <Button @click="appStore.openForm('register')" label="Sign Up" />
      </div>
      <VideoPlayer class="" />
    </div>
</template>