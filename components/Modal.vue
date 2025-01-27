<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

type ModalComponentInstance = ComponentPublicInstance & {
  header?: string;
};

const modalStore = useModalStore();

const header = ref("");
const modalComponent = ref<ModalComponentInstance | null>(null);

watch(
  () => modalStore.modalState.component,
  async () => {
    // make sure header is fetched after component is loaded
    await nextTick()
    if (modalComponent.value?.header) {
      header.value = modalComponent.value.header;
    } else {
      header.value = "";
    }
  },
);
</script>

<template>
  <div
    v-if="modalStore.isOpen"
    @click="modalStore.close()"
    @keydown.esc="modalStore.close()"
    @keyup.esc="modalStore.close()"
    tabindex="1"
    class="fixed z-30 flex h-screen w-screen items-start justify-center bg-black bg-opacity-50 md:items-center"
  >
    <div @click.stop="">
      <!-- header -->
      <div
        class="flex justify-between rounded-t-md bg-primary px-10 py-6 text-2xl font-bold text-primaryText md:px-6"
      >
        <div>{{ header}}</div>
        <div @click="modalStore.close" class="cursor-pointer" tabindex="0">
          <Icon
            class="text-2xl hover:cursor-pointer"
            name="mingcute:close-fill"
          />
        </div>
      </div>

      <!-- Main body -->
      <component
        :is="modalStore.modalState.component"
        v-bind="modalStore.modalState.props"
        ref="modalComponent"
      />
    </div>
  </div>
</template>
