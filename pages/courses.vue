<template>
    <div class="max-w-7xl mx-auto py-8">
        <h2 class="text-2xl font-bold mb-4">List of Course</h2>
        <!-- <div class="grid grid-cols-3 gap-5">
            <LayoutCard />
            <LayoutCard />
            <LayoutCard />
            <LayoutCard />
        </div> -->
        <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperFreeMode]" :pagination="{ clickable: true }"
            :slides-per-view="1" :space-between="10" :breakpoints="{
                '800': {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                '1200': {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }" :free-mode="true" :loop="true" :navigation="true">
            <SwiperSlide v-for="slide in 10" :key="slide" class="mb-6">
                <LayoutCard />
            </SwiperSlide>
        </Swiper>
    </div>
</template>