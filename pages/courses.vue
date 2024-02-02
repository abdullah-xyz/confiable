<script setup lang="ts">

import type { ICourse } from '@@/types/course'

let entrepeneurshipCourse: ICourse[] = []
const { data } = await useFetch<ICourse[]>('/api/course')

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
    <div class="bg-light-background">
        <div class="max-w-screen-2xl mx-auto py-8">
            <LayoutSlider title="Entrepeneurship Course" :courses="entrepeneurshipCourse" />
        </div>
    </div>
</template>