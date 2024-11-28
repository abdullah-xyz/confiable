<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <div
    class="mx-auto grid w-screen h-screen pt-16 md:pt-24 gap-x-14 md:gap-x-16 lg:grid-cols-2 xl:gap-x-32"
  >
    <!-- <div class="text-5xl max-w-screen-2xl mx-auto text-center col-span-2 text-white bg-primary p-3" >Transfoming Challenges into Oppurtunities</div> -->

    <h2 class="text-5xl pt-16 px-10 md:pl-10 text-primary font-light absolute self-start">Welcome to Confiable Business!</h2>
    <div class="h-full flex flex-col">
      <div class="self-start flex flex-col justify-center flex-1">
        <h3 class="mb-4 text-7xl px-10 md:pl-16 mt-0 font-medium text-primary">
          Want to Be an
        </h3>
        <h3 class="mb-4 text-8xl px-10 py-4 md:pl-16 bg-primary text-primaryText w-fit border align-middle rounded-r-lg">
          Entrepreneur
        </h3>
        <div class="w-full relative right-0"><div class="absolute right-0"><Button @click="appStore.openForm('register')" label="Sign Up" class="w-fit" /></div></div>
      </div>

    </div>    

    <div class="mx-10 md:mr-16 self-center">
      <VideoPlayer />
    </div>
  </div>
</template>
