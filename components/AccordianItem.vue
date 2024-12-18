<script setup lang="ts">
import type { IAccordian } from "@/types/accordian";
const props = defineProps<IAccordian>();

const active = ref(false);
</script>

<template>
  <div
    @click="active = !active"
    :class="active ? '' : 'hover:bg-accent hover:text-primaryText'"
    class="rounded-md"
  >
    <div
      :class="active ? 'bg-accent text-primaryText' : ''"
      class="flex content-center rounded-t-md justify-between px-4 py-3"
    >
    <div class="flex items-center">
        <NuxtImg class="size-5 mr-2" :src="'/img/' + props.icon" />
          <div class="text-xl font-medium hover:underline">{{ props.title }}</div>
    </div>
      <Icon :class="active ? 'rotate-180' : 'rotate-0'" class="transition text-3xl" name="fluent:chevron-down-16-regular" />
    </div>
    <div v-if="active">
      <slot>
        <div class="px-4 text-lg">{{ props.content }}</div>
      </slot>
    </div>
  </div>
</template>
