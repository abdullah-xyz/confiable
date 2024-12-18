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
    <AccordianItem class="my-2" icon="logo-c.png" :title="item.title" :content="item.content">
      <slot name="content" :content="item.content"/>
    </AccordianItem>
  </div>
</template>
