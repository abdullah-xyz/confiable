<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    submitting: {
        type: Boolean,
        default: false
    }
})


</script>

<template>
    <button
        :class="[rounded ? 'rounded-full px-6' : 'rounded-md px-4', submitting ? 'text-light-primary' : 'text-light-primaryText']"
        class="relative bg-light-primary hover:shadow-md hover:shadow-light-accent transition duration-150 font-medium active:scale-90 hover:cursor-pointer py-2 rounded-full">
        {{ label }}
        <div v-if="submitting" class="absolute flex w-full h-full left-0 top-0">
            <span
                class="block animate-spin w-8 h-8 mx-auto self-center border-4 border-light-secondary border-t-light-accent rounded-full"></span>
        </div>
    </button>
</template>