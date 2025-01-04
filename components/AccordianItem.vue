<script setup lang="ts">
import type { IAccordian } from "@/types/accordian";
const props = defineProps<IAccordian>();

const active = ref(false);
</script>

<template>
  <!-- HEADER -->
  <div
    @click="active = !active"
    :class="
      active
        ? 'rounded-t-md bg-accent text-primaryText'
        : 'rounded-md hover:bg-accent hover:text-primaryText'
    "
    class="flex content-center justify-between px-4 py-3 my-2"
  >
    <div class="flex items-center">
      <slot name="header">
        <NuxtImg v-if="props.icon" class="mr-2 size-5" :src="'/img/' + props.icon" />
        <div class="text-xl font-medium hover:underline">{{ props.title }}</div>
      </slot>
    </div>
    <Icon
      :class="active ? 'rotate-180' : 'rotate-0'"
      class="text-3xl transition"
      name="fluent:chevron-down-16-regular"
    />
  </div>
  <!-- CONTENT -->
  <div v-if="active">
    <slot name="content">
      <div class="px-4 text-lg">{{ props.content }}</div>
    </slot>
  </div>
</template>
