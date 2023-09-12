<script setup lang="ts">

import Course from 'types/course'

let entrepeneurshipCourse: Course[] = []
const { data } = await useFetch<Course[]>('/api/course')

data.value?.map(course => {
    if (course.group == 'Entrepeneurship Course') {
        entrepeneurshipCourse.push(course)
    }
})

// onMounted(en () => {

//     // console.log('courses')

//     const courses = await getDocs(collection(db, 'Course'))

//     // console.log(courses.docs)

//     const coursesData = courses.docs.map(course => course.data())

//     const entrepeneurshipCourse = ref(coursesData.filter(course => course.group == "Entrepeneurship Course"))

//     console.log(entrepeneurshipCourse)
// })

</script>

<template>
    <div class="max-w-7xl mx-auto py-8">

        <LayoutSlider title="Entrepeneurship Cousre" :courses="entrepeneurshipCourse" />

    </div>
</template>