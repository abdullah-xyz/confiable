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
      <div class="px-3 text-3xl font-medium">Our Offered Program</div>
      <Accordian :items="items">
        <template #content="{ content }">
          <div v-for="courses in content">
            <div
              class="my-2 flex justify-between rounded-md border-2 border-transparent px-4 py-2 text-lg hover:border-accent hover:underline"
            >
              <span class="font-medium">{{ courses.title }}</span>
              <span>{{ courses.description }}</span>
              <span class="rounded-md bg-accent px-3 text-primaryText">{{
                courses.price
              }}</span>
            </div>
          </div>
        </template>
      </Accordian>
    </div>
</template>
