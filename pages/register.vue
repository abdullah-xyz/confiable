<script setup lang="ts">
definePageMeta({
    layout: 'form',
})
</script>

<template>
    <form action="" class="flex flex-col max-w-sm mx-auto gap-4 justify-center items-center h-full">
        <p class="mb-4">
            Already have an account?
            <NuxtLink to="/login" class="underline">Login</NuxtLink>
        </p>
        <h2 class="text-3xl font-bold mb-6 text-center">Register</h2>
        <!-- email -->
        <input type="text" name="email" placeholder="Email" autocomplete="email" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- name -->
        <input type="text" name="name" placeholder="Full Name" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        <!-- password -->
        <input type="text" name="password" placeholder="Password" required
            class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />

        <!-- button -->
        <input type="submit" value="Login"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-10">

    </form>
</template>