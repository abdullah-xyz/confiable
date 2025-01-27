<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <!-- Hero -->
  <Hero1 />
  <!-- seperator -->
  <!-- <div class="bg-gradient-to-br from-secondary to-background to-50% px-2 text-text">
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
  </div> -->
  <!-- Features -->
  <!-- learn -->
  <div class="bg-gradient-to-b from-secondary to-transparent to-15% py-24">
    <h2 class="pt-8 text-center text-4xl font-medium tracking-wide text-primary">
      Helping Establish Solid Business
    </h2>
    <div class="pt-16">
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
  </div>

  <!-- Course level -->
  <div class="mt-6 py-24">
    <div
      class="mx-10 flex flex-col justify-evenly gap-32 lg:max-w-7xl xl:mx-auto xl:flex-row"
    >
      <!-- image -->
      <div class="w-[380px]">
        <NuxtImg src="/img/stock.jpg" />
      </div>
      <div class="flex flex-1 flex-col justify-center gap-16">
        <div class="text-3xl font-medium text-primary">
          Courses Tailored For Everyone
          <div class=" text-xl font-normal mt-3 text-text">
            Start with our beginner-friendly courses to build a strong foundation,
            or dive into advanced programs designed to take your skills to the
            next level. Explore, learn, and grow at your own pace!
          </div>
        </div>
        <!-- basic -->
        <div>
          <div
            class="flex items-center gap-3 text-2xl font-medium text-primary"
          >
            <Icon name="material-symbols:lightbulb-2-outline" /> Basic Course
          </div>
          <p class="text-lg">
            For those starting their learning journey. Build strong foundations
            with step-by-step guidance
          </p>
        </div>

        <div>
          <div class="flex items-center gap-3 text-2xl font-medium text-primary">
            <Icon name="material-symbols:rocket-launch-outline" /> Advance Course
          </div>
          <p class="text-lg">For professionals and enthusiasts to master their skills with in-depth content.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- why us  -->
  <div class="py-24">
    <div class="mx-auto max-w-7xl px-4 py-8">
      <h2 class="mb-5 text-4xl font-medium">Why Us?</h2>
      <p class="text-lg">
        We offer of quality services to help you to be an entrepreneur, a
        business person and many more. Our dedicated and experienced
        professionals specialize in different fields will help you in any
        business related queries.
      </p>
    </div>
    <!-- Affordability  -->
    <div class="mx-auto max-w-7xl px-4 py-8">
      <h2 class="text-3xl font-medium">Affordability</h2>
      <p class="text-lg">
        We have designed our courses, services, and consultation at a very low
        price for everyone’s benefit. There are no age-related limitations,
        everyone can benefit from Confiable Business.
      </p>
    </div>
    <!-- Reason to enroll -->
    <div class="mx-auto max-w-7xl px-4 py-8">
      <h2 class="text-3xl font-medium">Reason to Enroll</h2>
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
  <!-- Feedback  -->
  <div class="mx-auto max-w-7xl px-4 py-10">
    <h2 class="text-3xl font-medium">What other says</h2>
    <p class="text-lg">
      We have designed our courses, services, and consultation at a very low
      price for everyone’s benefit. There are no age-related limitations,
      everyone can benefit from Confiable Business.
    </p>
  </div>

  <!-- knowledge Corner  -->
  <div class="mx-auto max-w-7xl px-4 py-24">
    <h2 class="mb-3 text-3xl font-medium">Knowledge Corner</h2>
    <div class="flex gap-5">
      <!-- boooks -->
      <div
        class="flex w-full items-center gap-8 rounded-md border border-muted p-6 hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <Icon
            class="rounded-full bg-secondary p-3 text-8xl"
            name="material-symbols-light:book-2-outline-rounded"
          />
          <h3 class="pt-3 text-2xl font-medium">Books</h3>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="i in 7" class="underline hover:cursor-pointer">
              <NuxtLink to="/"> Some Book </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Services -->
      <div
        class="flex w-full items-center gap-8 rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <Icon
            class="rounded-full bg-secondary p-3 text-8xl"
            name="material-symbols-light:article-outline-rounded"
          />
          <h3 class="pt-3 text-2xl font-medium">Articles</h3>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="i in 7" class="underline hover:cursor-pointer">
              <NuxtLink to="/"> Some Article </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Job seeking  -->
  <div class="mx-auto max-w-7xl px-4 py-10">
    <h2 class="mb-3 text-3xl font-medium">Job Seeking</h2>
    <div class="flex gap-5">
      <!-- boooks -->
      <div
        class="flex w-full items-center gap-8 rounded-md border border-muted p-6 hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <Icon
            class="rounded-full bg-secondary p-3 text-8xl"
            name="majesticons:academic-cap-line"
          />
          <h3 class="pt-3 text-2xl font-medium">Books</h3>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="i in 7" class="underline hover:cursor-pointer">
              <NuxtLink to="/"> Some Book </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- boooks -->
      <div
        class="flex w-full items-center gap-8 rounded-md border border-muted p-6 hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <Icon
            class="rounded-full bg-secondary p-3 text-8xl"
            name="mdi:file-document-multiple-outline"
          />
          <h3 class="pt-3 text-2xl font-medium">Books</h3>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="i in 7" class="underline hover:cursor-pointer">
              <NuxtLink to="/"> Some Book </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Services -->
      <div
        class="flex w-full items-center gap-8 rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md"
      >
        <div class="flex flex-col items-center">
          <Icon
            class="rounded-full bg-secondary p-3 text-8xl"
            name="hugeicons:job-search"
          />
          <h3 class="pt-3 text-2xl font-medium">Articles</h3>
        </div>
        <div class="flex-1">
          <ul>
            <li v-for="i in 7" class="underline hover:cursor-pointer">
              <NuxtLink to="/"> Some Article </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
