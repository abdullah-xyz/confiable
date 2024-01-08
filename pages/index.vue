<template>
    <div class="bg-light-background">
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
                    <NuxtLink to="#"
                        class="transition duration-300 hover:scale-110 whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-light-primaryText bg-light-primary hover:bg-indigo-700">
                        Sign Up
                    </NuxtLink>
                </div>
                <img src="/img/hero.svg" alt="" class="max-w-xl flex-1">
            </div>
        </div>
        <div class="bg-gradient-to-b from-light-secondary to-light-background">
            <div class="max-w-7xl mx-auto text-xl py-12">
                <h2 class="text-3xl font-medium mb-1">Welcome to Confiable Business consultancy!</h2>
                <h3 class="text-2xl mb-2">Want to be an entrepreneur?</h3>
                We offer of quality services to help you to be an entrepreneur, a business person
                and many more. Our dedicated and experienced professionals specialize in
                different fields will help you in any business related queries.
                Contact us at Mail address ___________________ for a free consultation. We
                look forward to hearing from you!
            </div>
        </div>
        <!-- Features -->
        <!-- learn -->
        <div class="bg-gradient-to-l from-light-secondary to-30% to-light-background">
            <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
                <div>
                    <h2 class="text-3xl font-medium mb-2">
                        Learn from our experts
                    </h2>
                    <NuxtLink to="/courses" class="underline text-xl">Go to courses</NuxtLink>
                </div>
                <img src="/img/course.svg" alt="" class="max-w-md">
            </div>
        </div>
        <!-- counselling -->
        <div class="bg-gradient-to-r from-light-secondary to-30% to-light-background">
            <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
                <img src="/img/counseling.svg" alt="" class="max-w-md">
                <div>
                    <h2 class="text-3xl font-medium mb-2">
                        Get expert counseling
                    </h2>
                    <NuxtLink to="/counseling" class="underline text-xl">Get counseling</NuxtLink>
                </div>
            </div>
        </div>
        <!-- service -->
        <div class="bg-gradient-to-l from-light-secondary to-30% to-light-background">
            <div class="max-w-7xl mx-auto py-10 flex justify-between items-center">
                <div>
                    <h2 class="text-3xl font-medium mb-2">
                        Our services to help you grow
                    </h2>
                    <NuxtLink to="/services" class="underline text-xl">services...</NuxtLink>
                </div>
                <img src="/img/service.svg" alt="" class="max-w-md">
            </div>
        </div>
    </div>
</template>
