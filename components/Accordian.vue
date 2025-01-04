<script setup lang="ts">
const props = defineProps<{items: IAccordian[], triggerIcon?: string} >()
</script>

<template>
  <div v-for="item in props.items">
    <AccordianItem :icon="item.icon" :title="item.title" :content="item.content">
      <template #header>
        <slot name="header" :title="item.title" :icon="item.icon" />
      </template>
      <template #content>
        <slot name="content" :content="item.content"/>
      </template>
    </AccordianItem>
  </div>
</template>
