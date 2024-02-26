<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    rounded: {
        type: Boolean,
        default: false,
    }
})


</script>

<template>
    <button :class="rounded == true ? 'rounded-full px-6' : 'rounded-md px-4'"
        class="bg-light-primary hover:shadow-md hover:shadow-light-accent transition duration-150 font-medium active:scale-90 text-light-primaryText hover:cursor-pointer py-2 rounded-full">
        {{ label }}
    </button>
</template>