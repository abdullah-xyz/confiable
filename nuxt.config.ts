// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-swiper",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
  },
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "free-mode"],
  },
});
