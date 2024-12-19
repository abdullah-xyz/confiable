<script setup lang="ts">
const props = defineProps<{ turncated: string }>();
const expanded = ref(false);
</script>

<template>
  <div class="px-4 text-lg">
    <span v-if="!expanded">{{ turncated.slice(0, 200) }} &nbsp;</span>
    <span v-else>{{ turncated }} &nbsp;</span>
    <span class="min-w-6"></span>
    <span
      class="underline hover:cursor-pointer"
      v-if="!expanded"
      @click="expanded = !expanded"
      >Read more...</span
    ><span
      class="underline hover:cursor-pointer"
      v-if="expanded"
      @click="expanded = !expanded"
      >Read less...</span
    >
  </div>
</template>
