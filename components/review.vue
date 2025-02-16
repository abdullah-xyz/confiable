<script setup lang="ts">
console.log(Array(10));
</script>

<template>
    <NuxtMarquee :speed=25 >
      <div
        v-for="i in Array(20)"
        class="h-44 w-72 m-2 shrink-0 border border-muted p-2"
      >
        <NuxtImg class="h-full" src="img/staffs.jpg" />
      </div>
    </NuxtMarquee>
</template>
