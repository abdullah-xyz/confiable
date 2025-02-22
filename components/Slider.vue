<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  courses: {
    type: Object as PropType<ICourse>,
    required: true, 
  }
})

const isDragging = ref(false);
const slider = ref<HTMLDivElement | null>(null);

function onMouseDown(e: MouseEvent) {
  isDragging.value = true;

  window.addEventListener("mousemove", onMouseHold);
}

function onMouseHold(e: MouseEvent) {
  e.preventDefault();

  if (slider.value) {
    slider.value.scrollBy({
      left: -e.movementX,
      top: -e.movementY,
    });
  }
}

function onMouseUp(e: MouseEvent) {
  isDragging.value = false;
  window.removeEventListener("mousemove", onMouseHold);
}

function slideButton(amt: number) {
  if (slider.value) {
    const width = slider.value.clientWidth;
    if (amt == 1) {
      slider.value.scrollLeft += width;
    } else if (amt == -1) {
      slider.value.scrollLeft -= width;
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between text-primary">
      <div class="text-2xl md:text-3xl font-bold mb-4">{{ title }}</div>
      <div class="text-2xl md:text-3xl">
        <button @click="slideButton(-1)" class="hover:text-gray-700">
          <Icon name="fluent:chevron-left-12-regular" />
        </button>
        <button @click="slideButton(1)" class="hover:text-gray-700">
          <Icon name="fluent:chevron-right-12-regular" />
        </button>
      </div>
    </div>

    <div
      ref="slider"
      :class="
        isDragging ? 'cursor-grabbing' : 'snap-proximity snap-x scroll-smooth'
      "
      class="flex gap-4 overflow-auto slider"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <Card
        v-for="course in courses"
        class="snap-center"
        :name="course.name"
        :price="course.price"
        :slug="course.slug"
        :one_liner="course.one_liner"
      />
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
