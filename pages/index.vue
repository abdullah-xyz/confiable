<script setup lang="ts">
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
</script>

<template>
  <div class="bg-background text-text">
    <!-- Hero -->
    <div
      class="md:py-20 py-10 px-10 max-w-screen-2xl mx-auto grid items-center lg:grid-cols-[1fr_1fr] gap-16 md:gap-16 xl:gap-32"
    >
      <div>
        <h2 class="text-4xl font-bold mb-2">Welcome to Confiable Business!</h2>
        <h3 class="text-2xl font-medium mb-4">Want to be an entrepreneur?</h3>
        <p class="mb-6 text-lg">
          We offer of quality services to help you to be an entrepreneur, a
          business person and many more. Our dedicated and experienced
          professionals specialize in different fields will help you in any
          business related queries. Contact us at Mail address
          ___________________ for a free consultation. We look forward to
          hearing from you!
        </p>
        <LayoutButton @click="appStore.openForm('register')" label="Sign Up" />
      </div>
      <ElementsVideoPlayer class="" />
    </div>
  </div>
  <!-- seperator -->
  <div class="bg-gradient-to-b from-secondary to-background text-text px-2">
    <div
      class="max-w-7xl mx-auto text-xl py-12 flex flex-col items-center text-center"
    >
      <h2 class="text-3xl font-medium mb-1">
        Helping establish solid business!
      </h2>
      <h3 class="text-2xl mb-2">
        Teaching aspiring enterpeneur to start and grow their businesses..
      </h3>
    </div>
  </div>
  <!-- Features -->
  <!-- learn -->
  <h2
    class="bg-background text-text text-center text-4xl font-medium tracking-wide pt-8"
  >
    Our Offerings
  </h2>
  <div class="bg-background text-text py-6">
    <div
      class="flex flex-col xl:flex-row gap-3 justify-evenly mx-10 lg:max-w-7xl xl:mx-auto"
    >
      <!-- Courses -->
      <NuxtLink to="/courses">
        <div
          class="border rounded-md p-6 border-muted flex flex-col items-center xl:w-96 hover:shadow-md hover:cursor-pointer"
        >
          <div>
            <Icon
              class="text-8xl p-2 rounded-full bg-secondary"
              name="material-symbols-light:school-outline-rounded"
            />
          </div>
          <h3 class="text-2xl font-medium pt-3">Courses</h3>
          <p class="text-center text-lg pt-1">
            Learn from our experts to rapidly build your business
          </p>
        </div>
      </NuxtLink>
      <!-- Counseling -->
      <NuxtLink to="/counseling">
        <div
          class="border rounded-md p-6 border-muted flex flex-col items-center xl:w-96 hover:shadow-md hover:cursor-pointer"
        >
          <div>
            <Icon
              class="text-8xl p-3 rounded-full bg-secondary"
              name="material-symbols-light:person-raised-hand-outline-rounded"
            />
          </div>
          <h3 class="text-2xl font-medium pt-3">Counseling</h3>
          <p class="text-center text-lg pt-1">
            Consult our experts to quickly grow your business
          </p>
        </div>
      </NuxtLink>
      <!-- Services -->
      <NuxtLink to="/services">
        <div
          class="border rounded-md p-6 border-muted flex flex-col items-center xl:w-96 hover:shadow-md hover:cursor-pointer"
        >
          <div>
            <Icon
              class="text-8xl p-3 rounded-full bg-secondary"
              name="material-symbols-light:lab-profile-outline-rounded"
            />
          </div>
          <h3 class="text-2xl font-medium pt-3">Services</h3>
          <p class="text-center text-lg pt-1">
            Work with our experts to take your business to success
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
  <!-- Affordability  -->
  <div class="bg-background text-text">
    <div class="max-w-7xl mx-auto px-4 py-10">
      <h2 class="text-3xl font-medium mb-2">Affordability</h2>
      <p class="text-lg">
        We have designed our courses, services, and consultation at a very low
        price for everyone’s benefit. There are no age-related limitations,
        everyone can benefit from Confiable Business.
      </p>
    </div>
    <!-- Reason to enroll -->
    <div class="max-w-7xl mx-auto px-4 py-10">
      <h2 class="text-3xl font-medium mb-2">Reason to Enroll</h2>
      <p class="text-lg">
        Confiable Business is helping & guiding business personnel all over
        India to grow their businesses and in establishing start-ups. Be it
        students, emerging entrepreneurs or well-established business people, we
        are helping all of them through our courses, services and consultation.
        If you are looking for the same...
      </p>
      <NuxtLink
        to="#"
        class="transition duration-300 hover:scale-110 whitespace-nowrap inline-flex justify-center items-center mt-6 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primaryText bg-primary hover:bg-indigo-700"
      >
        Join Now
      </NuxtLink>
    </div>
  </div>
  <!-- staff -->
  <div class="bg-background text-text">
    <div class="max-w-7xl mx-auto px-4 py-10">
      <h2 class="text-3xl font-medium mb-2">Our Great Leadership</h2>
      <p class="text-lg mb-6">
        Confiable business has great leadership in providing assistance in all
        sectors of business our leadership, offering guidance and support to
        ensure the provision of high-quality Business education to our Nation
        and others around the world. We are here 24/7 for your services.
      </p>
      <!-- CEO -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <img
          class="w-[32rem] aspect-square border-8 rounded-3xl border-secondary"
          src="/img/staffs.jpg"
          alt="ceo"
        />
        <div>
          <h3 class="text-3xl font-medium">Muhammed Ali Khan</h3>
          <h5 class="text-xl font-medium">Founder And CEO</h5>
        </div>
      </div>
      <!-- Rest -->
      <div class="mt-8 flex flex-col md:flex-row justify-between">
        <!-- coo -->
        <div class="flex flex-col items-center gap-4">
          <img
            class="w-96 aspect-square border-8 rounded-3xl border-secondary"
            src="/img/staffs.jpg"
            alt="coo"
          />
          <div>
            <h3 class="text-3xl font-medium">Abu Talha</h3>
            <h5 class="text-xl font-medium">Chief Operation Officer</h5>
          </div>
        </div>
        <!-- cto -->
        <div class="flex flex-col items-center gap-4">
          <img
            class="w-96 aspect-square border-8 rounded-3xl border-secondary"
            src="/img/staffs.jpg"
            alt="cto"
          />
          <div>
            <h3 class="text-3xl font-medium">Abdullah Asad</h3>
            <h5 class="text-xl font-medium">Chief Technology Officer</h5>
          </div>
        </div>
        <!-- cfo -->
        <div class="flex flex-col items-center gap-4">
          <img
            class="w-96 aspect-square border-8 rounded-3xl border-secondary"
            src="/img/staffs.jpg"
            alt="cfo"
          />
          <div>
            <h3 class="text-3xl font-medium">Abu Talh</h3>
            <h5 class="text-xl font-medium">Chief Financial Officer</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
