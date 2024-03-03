<script setup lang="ts">
defineProps({
    name: String,
    price: Number,
    slug: String,
})
</script>

<template>
    <NuxtLink to="/lecture">

        <div class="w-[25rem] text-light-text rounded-md flex flex-col gap-x-8 border-2">
            <img src="/img/tmpCover.jpg" alt="" class="w-full rounded-t-md">
            <div class="p-4">
                <h3 class="text-2xl font-bold mb-2">{{ name }}</h3>
                <p class="text-lg font-medium mb-4">&#8377; {{ price }}</p>
                <p>One line description</p>
            </div>
        </div>
    </NuxtLink>
</template>