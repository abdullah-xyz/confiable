<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <!-- Hero -->
  <Hero2 />
  <!-- seperator -->
  <div class="bg-gradient-to-b from-secondary to-background px-2 text-text">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center py-12 text-center text-xl"
    >
      <h2 class="mb-1 text-3xl font-medium">Want to be an entrepreneur?</h2>
      <h3 class="mb-2 text-2xl">
        We offer of quality services to help you to be an entrepreneur, a
        business person and many more. Our dedicated and experienced
        professionals specialize in different fields will help you in any
        business related queries.
      </h3>
    </div>
  </div>
  <!-- Features -->
  <!-- learn -->
  <h2
    class="bg-background pt-8 text-center text-4xl font-medium tracking-wide text-text"
  >
    <span class="skew-x-4 bg-secondary px-4">Our Offerings</span>
  </h2>
  <div class="bg-background py-6 text-text">
    <div
      class="mx-10 flex flex-col justify-evenly gap-3 lg:max-w-7xl xl:mx-auto xl:flex-row"
    >
      <!-- Courses -->
      <NuxtLink to="/programmes">
        <div
          class="flex flex-col items-center rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md xl:w-96"
        >
          <div>
            <Icon
              class="rounded-full bg-secondary p-2 text-8xl"
              name="material-symbols-light:school-outline-rounded"
            />
          </div>
          <h3 class="pt-3 text-2xl font-medium">Courses</h3>
          <p class="pt-1 text-center text-lg">
            Learn from our experts to rapidly build your business
          </p>
        </div>
      </NuxtLink>
      <!-- Counseling -->
      <NuxtLink to="/mentorship">
        <div
          class="flex flex-col items-center rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md xl:w-96"
        >
          <div>
            <Icon
              class="rounded-full bg-secondary p-3 text-8xl"
              name="material-symbols-light:person-raised-hand-outline-rounded"
            />
          </div>
          <h3 class="pt-3 text-2xl font-medium">Counseling</h3>
          <p class="pt-1 text-center text-lg">
            Consult our experts to quickly grow your business
          </p>
        </div>
      </NuxtLink>
      <!-- Services -->
      <NuxtLink to="/services">
        <div
          class="flex flex-col items-center rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md xl:w-96"
        >
          <div>
            <Icon
              class="rounded-full bg-secondary p-3 text-8xl"
              name="material-symbols-light:lab-profile-outline-rounded"
            />
          </div>
          <h3 class="pt-3 text-2xl font-medium">Services</h3>
          <p class="pt-1 text-center text-lg">
            Work with our experts to take your business to success
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
  <!-- Affordability  -->
  <div class="bg-background text-text">
    <div class="mx-auto max-w-7xl px-4 py-10">
      <h2 class="mb-2 text-3xl font-medium">Affordability</h2>
      <p class="text-lg">
        We have designed our courses, services, and consultation at a very low
        price for everyone’s benefit. There are no age-related limitations,
        everyone can benefit from Confiable Business.
      </p>
    </div>
    <!-- Reason to enroll -->
    <div class="mx-auto max-w-7xl px-4 py-10">
      <h2 class="mb-2 text-3xl font-medium">Reason to Enroll</h2>
      <p class="text-lg">
        Confiable Business is helping & guiding business personnel all over
        India to grow their businesses and in establishing start-ups. Be it
        students, emerging entrepreneurs or well-established business people, we
        are helping all of them through our courses, services and consultation.
        If you are looking for the same...
      </p>
      <NuxtLink
        to="#"
        class="hover:bg-indigo-700 mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-primaryText shadow-sm transition duration-300 hover:scale-110"
      >
        Join Now
      </NuxtLink>
    </div>
  </div>
  <!-- staff -->
  <div class="bg-background text-text">
    <div class="mx-auto max-w-7xl px-4 py-10">
      <h2 class="mb-2 text-3xl font-medium">Our Great Leadership</h2>
      <p class="mb-6 text-lg">
        Confiable business has great leadership in providing assistance in all
        sectors of business our leadership, offering guidance and support to
        ensure the provision of high-quality Business education to our Nation
        and others around the world. We are here 24/7 for your services.
      </p>
      <!-- CEO -->
      <div class="flex flex-col items-center gap-8 md:flex-row">
        <img
          class="aspect-square w-[32rem] rounded-3xl border-8 border-secondary"
          src="/img/staffs.jpg"
          alt="ceo"
        />
        <div>
          <h3 class="text-3xl font-medium">Muhammed Ali Khan</h3>
          <h5 class="text-xl font-medium">Founder And CEO</h5>
        </div>
      </div>
      <!-- Rest -->
      <div class="mt-8 flex flex-col justify-between md:flex-row">
        <!-- coo -->
        <div class="flex flex-col items-center gap-4">
          <img
            class="aspect-square w-96 rounded-3xl border-8 border-secondary"
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
            class="aspect-square w-96 rounded-3xl border-8 border-secondary"
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
            class="aspect-square w-96 rounded-3xl border-8 border-secondary"
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
