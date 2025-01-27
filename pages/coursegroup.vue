<script setup lang="ts">
const items = [
  {
    title: "Course 1",
    description: "Some description about course",
    price: 199,
  },
  {
    title: "Course 2",
    description: "Some description about course",
    price: 199,
  },
  {
    title: "Course 3",
    description: "Some description about course",
    price: 199,
  },
  {
    title: "Course 4",
    description: "Some description about course",
    price: 199,
  },
];
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <div class="px-3 text-3xl font-medium text-primary">
      Our Offered Program
    </div>
    <div class="px-4 text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
      sapien, sagittis in urna et, porttitor malesuada libero. Duis non velit
      ligula. Sed vitae neque porta, dapibus odio sed, dignissim massa. Integer
      congue convallis tellus, eu vulputate purus. Donec accumsan, libero nec
      convallis sollicitudin, elit sem efficitur felis, bibendum venenatis leo
      leo eu massa. Etiam ullamcorper egestas magna, nec cursus ante. Ut
      pulvinar et lectus a molestie. Etiam sagittis sit amet est quis ultricies.
      Donec ut libero quis felis scelerisque ultrices vel et nisl. Cras
      malesuada urna vel nisi commodo fringilla id at lorem. Curabitur at varius
      nisi, ut dictum massa. Integer blandit porta tincidunt. Cras convallis
      vitae erat a dapibus. Fusce est ante, rhoncus vel pretium sit amet,
      finibus vitae odio. Maecenas congue nunc sit amet risus ultricies
      sollicitudin. Maecenas rhoncus mollis felis vitae rutrum.
    </div>

    <div v-for="courses in items">
      <NuxtLink to="/lecture">
        <div
          class="my-2 flex justify-between rounded-md border border-transparent px-4 py-3 text-lg group hover:bg-accent hover:text-primaryText"
        >
          <span class="font-medium">{{ courses.title }}</span>
          <span class="hidden md:block">{{ courses.description }}</span>
          <span class="rounded-md bg-accent px-3 text-primaryText group-hover:bg-primary group-hover:text-primaryText">{{
            courses.price
          }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
