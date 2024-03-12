<template>
  <div class="bg-background text-text">
    <div
      class="max-w-screen-2xl mx-auto px-14 grid md:grid-cols-[3fr_1fr] gap-6"
    >
      <!-- video -->
      <div class="h-auto overflow-hidden w-full relative">
        <ElementsVideoPlayer />
      </div>
      <!-- Lesson list -->
      <div
        class="border-b border-muted md:overflow-y-hidden md:relative h-full"
      >
        <div class="p-4 border-b border-muted">
          <!-- later set to course title -->
          <h3 class="text-primary text-3xl font-bold">Lessons</h3>
        </div>
        <div class="overflow-y-scroll md:absolute h-[calc(100%_-_65px)] w-full">
          <div
            v-for="i in 12"
            class="p-4 text-lg flex justify-between items-center rounded-md hover:bg-accent hover:text-white hover:cursor-pointer"
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
        class="md:pb-16 [&>p]:py-2 [&>p]:text-xl [&>h3]:pt-3 [&>h3]:text-2xl [&>h3]:font-semibold"
      >
        <h2 class="text-3xl font-bold pb-4 text-primary">Title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
          quaerat perferendis voluptas velit. Et ab doloremque, porro
          repudiandae nulla a adipisci ut odio facere eum earum repellat itaque
          minus.
        </p>
        <h3>Sub Head</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
          quaerat perferendis voluptas velit. Et ab doloremque, porro
          repudiandae nulla a adipisci ut odio facere eum earum repellat itaque
          minus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni libero
          quaerat perferendis voluptas velit. Et ab doloremque, porro
          repudiandae nulla a adipisci ut odio facere eum earum repellat itaque
          minus.
        </p>
        <ElementsCheckout :amount="60000" />
      </div>
      <!-- Sidebar -->
      <div class="text-xl font-medium pb-16">
        <div
          class="p-6 flex items-center gap-2 w-full rounded-md border border-muted hover:cursor-pointer hover:shadow-md mt-4"
        >
          <Icon name="material-symbols:share-outline" class="text-2xl" /> Share
        </div>
        <div
          class="p-6 flex items-center gap-2 w-full rounded-md border border-muted hover:cursor-pointer hover:shadow-md mt-4"
        >
          <Icon name="mdi:folder-sync-outline" class="text-2xl" /> Course
          Resources
        </div>
        <div
          class="p-6 flex items-center gap-2 w-full rounded-md border border-muted hover:cursor-pointer hover:shadow-md mt-4"
        >
          <Icon name="iconoir:send-diagonal" class="text-2xl" /> Send Us
          Feedback
        </div>
      </div>
    </div>
  </div>
</template>
