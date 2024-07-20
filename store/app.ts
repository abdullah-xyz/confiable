import { defineStore } from "pinia";
import type { IToast } from "~/types/toast";

export const useAppStore = defineStore("app", () => {
  const isFormOpen = ref<boolean>(false);
  type TFormRoute = "login" | "register" | "passwordReset";
  const formRoute = ref<TFormRoute>();
  const toasts = ref<IToast[]>([]);

  //   open modal
  function openForm(route: TFormRoute) {
    isFormOpen.value = true;
    formRoute.value = route;
  }

  //   close modal
  function closeForm() {
    isFormOpen.value = false;
  }

  //   create toast
  function createToast(toast: IToast) {
    toasts.value?.push(toast);
    console.log("created toast: ", toast);
  }

  //   remove toast
  function clearToast(index: number) {
    toasts.value?.splice(index, 1);
  }

  return {
    openForm,
    closeForm,
    isFormOpen,
    formRoute,
    createToast,
    clearToast,
    toasts,
  };
});
