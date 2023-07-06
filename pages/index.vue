<template>
    <!-- Hero -->
    <div class="py-20 bg-gradient-to-t from-indigo-50 to-white">
        <div class="max-w-7xl mx-auto px-6 flex items-center">
            <div class="">
                <h2 class="text-4xl font-bold mb-6">
                    Helping establish solid business!
                </h2>
                <h3 class="text-2xl font-medium mb-10">
                    Teaching aspiring enterpeneur to start and grow their businesses..
                </h3>
                <NuxtLink to="register"
                    class="transition duration-300 hover:scale-110 whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign Up
                </NuxtLink>
            </div>
            <img src="/img/hero.svg" alt="" class="max-w-xl flex-1">
        </div>
    </div>
    <!-- Features -->
    <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
        <div>
            <h2 class="text-3xl font-medium mb-2">
                Learn from our experts
            </h2>
            <NuxtLink to="/course" class="underline text-xl">Go to courses</NuxtLink>
        </div>
        <img src="/img/course.svg" alt="" class="max-w-md">
    </div>
    <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
        <img src="/img/counseling.svg" alt="" class="max-w-md">
        <div>
            <h2 class="text-3xl font-medium mb-2">
                Get expert counseling
            </h2>
            <NuxtLink to="/counseling" class="underline text-xl">Get counseling</NuxtLink>
        </div>
    </div>
    <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
        <div>
            <h2 class="text-3xl font-medium mb-2">
                Our services to help you grow
            </h2>
            <NuxtLink to="/service" class="underline text-xl">services...</NuxtLink>
        </div>
        <img src="/img/service.svg" alt="" class="max-w-md">
    </div>
</template>