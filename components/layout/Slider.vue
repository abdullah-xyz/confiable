<script setup lang="ts">
import type { ICourse } from '@@/types/course'

const props = defineProps<{
    title: string,
    courses: ICourse[]
}>()

const isDragging = ref(false)
const cursorPos = ref([0, 0])
const slider = ref<HTMLDivElement | null>(null)

function onMouseDown(e: MouseEvent) {
    isDragging.value = true
    cursorPos.value = [e.pageX, e.pageY]

    window.addEventListener("mousemove", onMouseHold)
}

function onMouseHold(e: MouseEvent) {
    console.log(e.movementX, e.movementY)
    e.preventDefault()

    // requestAnimationFrame(() => {
    //     const delta = [
    //         e.pageX - cursorPos.value[0],
    //         e.pageY - cursorPos.value[1]
    //     ]

    //     cursorPos.value = [e.pageX, e.pageY]

    slider.value?.scrollBy({
        left: -e.movementX,
        top: -e.movementY
    })
    // })

}

function onMouseUp(e: MouseEvent) {
    isDragging.value = false
    window.removeEventListener('mousemove', onMouseHold)
}

function slideButton(amt: number) {
    const width = slider.value?.clientWidth

    if (width && slider.value) {
        if (amt == 1) {
            slider.value.scrollLeft += width
        } else if (amt == -1) {
            slider.value.scrollLeft -= width
        }
    }
}
</script>

<template>
    <div class="w-full">
        <div class="flex justify-between">
            <div class="text-3xl font-bold mb-4">{{ title }}</div>
            <div class="text-3xl">
                <button @click="slideButton(-1)" class="hover:text-gray-700">
                    <Icon name="fluent:chevron-left-12-regular" />
                </button>
                <button @click="slideButton(1)" class="hover:text-gray-700">
                    <Icon name="fluent:chevron-right-12-regular" />
                </button>
            </div>
        </div>
        <div ref="slider" :class="isDragging ? 'cursor-grabbing' : 'snap-proximity snap-x scroll-smooth'"
            class="flex gap-4 overflow-auto slider" @mousedown="onMouseDown" @mouseup="onMouseUp">
            <LayoutCard v-for="course in courses" class="snap-center" :name=course.title :price=course.price
                :slug="course.slug" />
        </div>
    </div>
</template>

<style scoped>
.slider {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.slider::-webkit-scrollbar {
    display: none;
}
</style>