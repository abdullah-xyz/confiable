<template>
  <div class="sticky bottom-0 py-4 -z-50 w-full bg-primary text-primaryText">
    <div
      class="mx-auto grid max-w-7xl grid-flow-row grid-cols-3 gap-3 gap-y-6 px-10 py-4 md:grid-flow-col md:grid-rows-3"
    >
      <div
        class="col-span-3 grid grid-cols-subgrid text-xl font-medium md:col-span-1 md:row-span-3 md:grid-rows-subgrid"
      >
        <h3 class="col-start-2 md:col-start-1 md:row-start-2">
          Confiable Business
        </h3>
      </div>
      <!-- </div>
      <div class="flex flex-row md:flex-col justify-between gap-3 w-full"> -->
      <NuxtLink to="/courses" class="underline">Course</NuxtLink>
      <NuxtLink to="/counseling" class="underline">Counseling</NuxtLink>
      <NuxtLink to="/services" class="underline">Services</NuxtLink>
      <!-- </div>
      <div class="flex flex-row md:flex-col justify-between gap-3 w-full"> -->
      <NuxtLink to="/about" class="underline">About Us</NuxtLink>
      <NuxtLink to="/contact" class="underline">Contact Us</NuxtLink>
      <NuxtLink to="/privacy" class="underline">Privacy Policy</NuxtLink>
    </div>
  </div>
</template>
