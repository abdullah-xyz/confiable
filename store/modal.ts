import { defineStore } from "pinia";
import type { Component } from "vue";

// types
type ComponentProps = Record<string, any>

type ModalState<T> = {
    component: T | null,
    props: ComponentProps,
}

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false)
  const modalState = shallowRef<ModalState<Component>>({
    component: null,
    props: {},
  })

  function open<T extends Component>(component: T, props: ComponentProps) {
    console.log(isOpen.value);
    isOpen.value = true
    console.log(isOpen.value);
    modalState.value = {
        component,
        props: props ?? {},
    }
  }

  function replace<T extends Component>(component: T, props: ComponentProps) {
    modalState.value = {
        component,
        props: props ?? {},
    }
  }

  function close() {
    modalState.value = {
        component: null,
        props: {},
    }
    isOpen.value = false
  }

  return {
    modalState,
    isOpen,
    open,
    replace,
    close
  }
});
