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
  <div class="bg-background">
    <div class="max-w-screen-2xl mx-auto py-8 px-4">
      <CourseGroup
      title="Entrepeneurship Course"
      :courses="entrepeneurshipCourse" />
    </div>
  </div>
</template>
