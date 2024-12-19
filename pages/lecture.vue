<script setup lang="ts">
const userStore = useUserStore();
</script>

<template>
  <div class="mx-auto grid max-w-screen-2xl gap-6 px-14 md:grid-cols-[3fr_1fr]">
    <!-- video -->
    <div class="relative h-auto w-full overflow-hidden">
      <div
        v-if="!userStore.isLoggedIn"
        class="relative aspect-video h-full w-full bg-label"
      >
        <div
          class="absolute left-1/2 top-1/2 flex w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-background p-8 text-center"
        >
          <span class="text-lg font-medium"
            >You must be
            <span class="capitalize text-accent">signed in</span> to watch</span
          >
          <div class="mt-4">
            <Button class="" label="Sign In" />
          </div>
        </div>
      </div>
      <div
        v-else-if="!userStore.isLoggedIn"
        class="relative aspect-video h-full w-full bg-label"
      >
        <div
          class="absolute left-1/2 top-1/2 flex w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-background p-8 text-center"
        >
          <span class="text-lg font-medium"
            >You must be
            <span class="capitalize text-accent">signed in</span> to watch</span
          >
          <div class="mt-4">
            <Button class="" label="Sign In" />
          </div>
        </div>
      </div>
      <VideoPlayer v-else />
    </div>
    <!-- Lesson list -->
    <div class="h-full border-b border-muted md:relative md:overflow-y-hidden">
      <div class="border-b border-muted p-4">
        <!-- later set to course title -->
        <h3 class="text-3xl font-bold text-primary">Lessons</h3>
      </div>
      <div class="h-[calc(100%_-_65px)] w-full overflow-y-scroll md:absolute">
        <div
          v-for="i in 12"
          class="flex items-center justify-between rounded-md p-4 text-lg hover:cursor-pointer hover:bg-accent hover:text-white"
        >
          <span>Lesson {{ i }} </span>
          <aside class="flex items-center gap-1">
            <Icon name="mdi:clock-time-three-outline" /> 4:32
          </aside>
        </div>
      </div>
    </div>
    <!-- desc -->
    <div
      class="md:pb-16 [&>h3]:pt-3 [&>h3]:text-2xl [&>h3]:font-semibold [&>p]:py-2 [&>p]:text-xl"
    >
      <h2 class="pb-4 text-3xl font-bold text-primary">Title</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
        quaerat perferendis voluptas velit. Et ab doloremque, porro repudiandae
        nulla a adipisci ut odio facere eum earum repellat itaque minus.
      </p>
      <h3>Sub Head</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
        quaerat perferendis voluptas velit. Et ab doloremque, porro repudiandae
        nulla a adipisci ut odio facere eum earum repellat itaque minus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
        quaerat perferendis voluptas velit. Et ab doloremque, porro repudiandae
        nulla a adipisci ut odio facere eum earum repellat itaque minus.
      </p>
      <Checkout :amount="60000" />
    </div>
    <!-- Sidebar -->
    <div class="pb-16 text-xl font-medium">
      <div
        class="mt-4 flex w-full items-center gap-2 rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md"
      >
        <Icon name="material-symbols:share-outline" class="text-2xl" /> Share
      </div>
      <div
        class="mt-4 flex w-full items-center gap-2 rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md"
      >
        <Icon name="mdi:folder-sync-outline" class="text-2xl" /> Course
        Resources
      </div>
      <div
        class="mt-4 flex w-full items-center gap-2 rounded-md border border-muted p-6 hover:cursor-pointer hover:shadow-md"
      >
        <Icon name="iconoir:send-diagonal" class="text-2xl" /> Send Us Feedback
      </div>
    </div>
  </div>
</template>
