<script setup lang="ts">

const props = defineProps<{items: IAccordian[], triggerIcon?: string} >()

// const props = defineProps({
//   items: {
//     type: Object as PropType<IAccordian>[],
//     required: true,
//   },
//   triggerIcon: {
//     type: String,
//     default: ""
//   }
// });

const itemes = [
  { title: "Entrepeneurship Programme" },
  { title: "Codding Programme" },
  { title: "Business Programme" },
  { title: "Short Programmes" },
];
</script>

<template>
  <div v-for="item in props.items">
    <AccordianItem icon="logo-c.png" :title="item.title" :content="item.content">
      <template #header>
        <slot name="header" :title="item.title" :icon="item.icon" />
      </template>
      <template #content>
        <slot name="content" :content="item.content"/>
      </template>
    </AccordianItem>
  </div>
</template>
