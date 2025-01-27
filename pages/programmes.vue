<script setup lang="ts">
let entrepeneurshipCourse: ICourse[] = [];
const { data } = await useFetch<ICourse[]>("/api/course");

console.log(data.value);

data.value?.map((course) => {
  if (course.group == "entrepreneurship") {
    entrepeneurshipCourse.push(course);
    console.log();
  }
});
const items = [
  {
    title: "Business and Entrepreneurship Program",
    icon: "logo-c.png",
    content: [
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
    ],
  },
  {
    title: "E-Categories Commerce Program",
    icon: "logo-c.png",
    content: [
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
    ],
  },
  {
    title: "Rapid And Responsive Program",
    icon: "logo-c.png",
    content: [
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
    ],
  },
  {
    title: "Stock Pro Smart Investor Program",
    icon: "logo-c.png",
    content: [
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
    ],
  },
];
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <div class="px-3 text-3xl font-medium text-primary">
      Our Offered Program
    </div>
    <div class="text-lg px-4">
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
    <Accordian :items="items">
      <template #header="{ icon, title }">
        <NuxtImg class="mr-2 size-5" :src="'/img/' + icon" />
        <NuxtLink to="coursegroup">
          <div class="text-xl font-medium hover:underline">{{ title }}</div>
        </NuxtLink>
      </template>
      <template #content="{ content }">
        <div v-for="courses in content">
          <NuxtLink to="/lecture">
            <div
              class="my-2 flex justify-between rounded-md border-transparent px-4 py-2 text-lg group hover:shadow hover:shadow-secondary border"
            >
              <span class="font-medium group-hover:underline">{{ courses.title }}</span>
              <span class="hidden md:block group-hover:underline">{{ courses.description }}</span>
              <span class="rounded-md bg-accent px-3 text-primaryText">{{
                courses.price
              }}</span>
            </div>
          </NuxtLink>
        </div>
      </template>
    </Accordian>
  </div>
</template>
