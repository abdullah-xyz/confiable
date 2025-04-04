<script setup lang="ts">
console.log(Array(10));
</script>

<template>
    <NuxtMarquee :speed=25 >
      <div
        v-for="i in Array(20)"
        class="h-20 w-72shrink-0 border border-muted"
      >
        <NuxtImg class="h-full" src="img/staffs.jpg" />
      </div>
    </NuxtMarquee>
</template>
