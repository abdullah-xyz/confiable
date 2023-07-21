<script setup lang="ts">
definePageMeta({
    layout: 'form',
})

const page = ref(0)
</script>

<template>
    <form action="" class="flex flex-col max-w-sm mx-auto gap-4 justify-center items-center h-full">
        <p class="mb-4">
            Already have an account?
            <NuxtLink to="/login" class="underline">Login</NuxtLink>
        </p>
        <h2 class="text-3xl font-bold mb-3 text-center">Register</h2>

        <!-- indicator -->
        <div class="w-full">
            <span class="w-16 bg-indigo-600 h-1 inline-block"></span>
            <span class="w-16 h-1 inline-block" :class="page == 1 ? 'bg-indigo-600' : 'bg-indigo-200'"></span>
        </div>

        <!-- back -->


        <!-- first section -->
        <div :class="page == 0 ? '' : 'hide'" class="flex flex-col gap-4 w-full">
            <!-- email -->
            <input type="text" name="email" placeholder="Email" autocomplete="email" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
            <!-- name -->
            <input type="text" name="name" placeholder="Full Name" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
            <!-- password -->
            <input type="text" name="password" placeholder="Password" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        </div>

        <!-- second section -->
        <div :class="page == 1 ? '' : 'hide'" class="flex flex-col gap-4 w-full">
            <!-- age -->
            <input type="number" name="age" placeholder="Age" autocomplete="age" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
            <!-- phone -->
            <input type="number" name="phone" placeholder="Phone" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
            <!-- position -->
            <input type="text" name="position" placeholder="Position" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
            <!-- about -->
            <textarea name="position" placeholder="About Yourself" required
                class="bg-slate-100 px-4 py-2 focus:outline-none w-full" />
        </div>

        <!-- button -->
        <input type="button" value="Next" :class="page == 0 ? '' : 'hide'" @click="page++"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-10">
        <input type="submit" value="Login" :class="page == 1 ? '' : 'hide'"
            class="bg-gray-900 hover:bg-gray-950 active:bg-black w-24 text-white hover:cursor-pointer p-2 rounded-full mx-auto mt-10">

    </form>
</template>

<style scoped>
.hide {
    display: none;
}
</style>