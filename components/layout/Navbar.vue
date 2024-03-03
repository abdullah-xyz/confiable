<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { useAppStore } from '~/store/app'
const userStore = useUserStore()
const appStore = useAppStore()

const showMenu = ref(false)
</script>

<template>
    <div class="bg-light-background">
        <div class="max-w-screen-2xl mx-auto px-4">
            <div class="flex justify-between items-center border-b-2 border-light-form py-1">
                <!-- burger menu for mobile -->
                <div class="-mr-2 -my-2 lg:hidden">
                    <button type="button">
                        <Icon name="charm:menu-hamburger" class="md:text-3xl text-2xl" />
                    </button>
                </div>
                <!-- home -->
                <NuxtLink to="/">
                    <span class="sr-only">Home</span>
                    <img class="h-16 md:h-20 lg:h-28 w-auto transition duration-300 mr-8 md:hover:scale-110"
                        src="/img/logo.png" />
                </NuxtLink>
                <nav class="hidden lg:flex space-x-10">
                    <!-- nav links -->
                    <NuxtLink to="/courses">
                        <span class="text-base font-medium text-light-text">
                            Courses
                        </span>
                    </NuxtLink>
                    <NuxtLink to="/services">
                        <span class="text-base font-medium text-light-text">
                            Services
                        </span>
                    </NuxtLink>
                    <NuxtLink to="/counseling">
                        <span class="text-base font-medium text-light-text">
                            Counseling
                        </span>
                    </NuxtLink>
                    <NuxtLink to="/contact">
                        <span class="text-base font-medium text-light-text">
                            Contact Us
                        </span>
                    </NuxtLink>
                    <NuxtLink to="/about">
                        <span class="text-base font-medium text-light-text">
                            About Us
                        </span>
                    </NuxtLink>
                </nav>
                <!-- LogOut -->
                <div v-if="userStore.isLoggedIn" class="hidden lg:flex items-center justify-end lg:flex-1">
                    <span @click="userStore.signout()"
                        class="whitespace-nowrap gap-4 font-medium text-base text-light-text hover:cursor-pointer underline">
                        {{ userStore.name }}

                    </span>
                </div>
                <!-- Login / Register -->
                <div v-else class="hidden lg:flex items-center justify-end lg:flex-1">
                    <span @click="appStore.openForm('login')"
                        class="whitespace-nowrap font-medium text-base text-light-text hover:cursor-pointer">
                        Sign In
                    </span>
                    <LayoutButton class="ml-8" @click="appStore.openForm('register')" label="Sign Up" />
                </div>
            </div>
        </div>
    </div>
</template>