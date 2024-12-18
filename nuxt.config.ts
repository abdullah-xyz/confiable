// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    firebasePrivateKeyId: "",
    firebasePrivateKey: "",
    firebaseClientEmail: "",
    firebaseClientId: "",
    firebaseClientCertUrl: "",
    razorpayKeySecret: "",
    public: {
      firebaseApikey: "",
      firebaseAuthDomain: "",
      firebaseProjectId: "",
      firebaseStorageBucket: "",
      firebaseMessagingSenderId: "",
      firebaseAppId: "",
      firebaseMeasurementId: "",
      razorpayApiKey: "",
      supabaseUrl: "",
      supabaseKey: "",
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
  ],

  plugins: ["~/plugins/razorpay.client.ts"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", {injectPosition: "first"}],
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    viewer: true,
  },

  pinia: {
    autoImports: ["defineStore"],
  },

  imports: {
    dirs: ["./store", "./types"],
  },

  supabase: {
    redirect: false,
  },

  ssr: true,
  compatibilityDate: "2024-08-17",
});