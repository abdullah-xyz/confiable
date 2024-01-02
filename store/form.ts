import { defineStore } from "pinia";

export const useFormStore = defineStore("user", () => {
  const modalOpen = ref(false);
  const currentPage = ref("login");

  return { modalOpen, currentPage };
});
