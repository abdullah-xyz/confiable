<script setup lang="ts">
definePageMeta({
    layout: 'form',
})
</script>

<template>
    <form @submit.prevent="" class="flex flex-col w-96 gap-4 items-center h-full">

        <!-- <h2 class="text-3xl font-bold mb-6 text-center">Reset Password</h2> -->
        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

        <!-- button -->
        <input type="submit" value="Reset Password"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black min-w-[6rem] text-white hover:cursor-pointer px-4 py-2 rounded-full mx-auto mt-10">

    </form>
</template>