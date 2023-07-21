<template>
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6">
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button">
                    <span class="sr-only">Open menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <NuxtLink to="/">
                <span class="sr-only">Home</span>
                <img class="h-16 md:h-24 w-auto transition duration-300 mr-8 md:hover:scale-110" src="/img/logo.png" />
            </NuxtLink>
            <nav class="hidden md:flex space-x-10">

                <NuxtLink to="/courses">
                    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Courses
                    </span>
                </NuxtLink>
                <NuxtLink to="/services">
                    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Services
                    </span>
                </NuxtLink>
                <NuxtLink to="/counseling">
                    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Counseling
                    </span>
                </NuxtLink>
                <NuxtLink to="/contact">
                    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact Us
                    </span>
                </NuxtLink>
                <NuxtLink to="/about">
                    <span class="text-base font-medium text-gray-500 hover:text-gray-900">
                        About Us
                    </span>
                </NuxtLink>
            </nav>
            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <NuxtLink to="/login" class="whitespace-nowrap font-medium text-base text-gray-500 hover:text-gray-900">
                    Sign In
                </NuxtLink>
                <NuxtLink to="register"
                    class="transition duration-300 hover:scale-110 ml-8 whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#151b54] hover:bg-indigo-700">
                    Sign Up
                </NuxtLink>
            </div>
            <!-- <button class="hidden ml-4 md:block">
                <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd" />
                </svg>
            </button> -->
        </div>
    </div>
</template>