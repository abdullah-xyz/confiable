<script setup lang="ts">
const appStore = useAppStore()
</script>

<template>
    <div class="bg-gradient-to-tl from-secondary to-transparent to-60%">
      <div
        class="md:py-0 h-screen py-16 px-10 md:max-w-screen-2xl mx-auto grid items-center lg:grid-cols-[2fr_3fr] gap-14 md:gap-16 xl:gap-32 -translate-y-10"
      >
      <!-- <div class="text-5xl max-w-screen-2xl mx-auto text-center col-span-2 text-white bg-primary p-3" >Transfoming Challenges into Oppurtunities</div> -->
        <div>
          <h2 class="md:text-6xl text-4xl font-bold mb-8">Welcome to Confiable Business!</h2>
          <h3 class="md:text-4xl text-3xl text-accent font-medium mb-4">Helping establish solid business! </h3>
          <h3 class="md:text-4xl text-2xl mb-4">
          Teaching aspiring enterpeneur to start and grow their businesses..
        </h3>
      
          <Button @click="appStore.openForm('register')" label="Sign Up" />

        </div>
        <div>
          <NuxtImg class="absolute right-0 bottom- -translate-x-36 -translate-y-48 scale-[1.75]" src="img/ceo-bg.png" />
        </div>
        <!-- <VideoPlayer class="" /> -->
      </div>
    </div>
</template>