<script setup lang="ts">
import type { ICourse } from "@@/types/course";

let entrepeneurshipCourse: ICourse[] = [];
const { data } = await useFetch<ICourse[]>("/api/course");

data.value?.map((course) => {
  if (course.group == "Entrepeneurship Course") {
    entrepeneurshipCourse.push(course);
  }
});
</script>

<template>
  <div class="bg-background">
    <div class="max-w-screen-2xl mx-auto py-8 px-4">
      <Slider
        title="Entrepeneurship Course"
        :courses="entrepeneurshipCourse"
      />
    </div>
  </div>
  <div class="bg-background">
    <div class="max-w-screen-2xl mx-auto py-8 px-4">
      <Slider
        title="Entrepeneurship Course"
        :courses="entrepeneurshipCourse"
      />
    </div>
  </div>
</template>
