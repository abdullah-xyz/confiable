<template>
  <div class="bg-primary text-primaryText sticky w-full bottom-0 -z-50">
    <div
      class="max-w-7xl mx-auto grid grid-cols-3 grid-flow-row md:grid-rows-3 md:grid-flow-col px-10 py-4 gap-3"
    >
      <div
        class="text-xl font-medium grid col-span-3 md:col-span-1 md:row-span-3 grid-cols-subgrid md:grid-rows-subgrid"
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
