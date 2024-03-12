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
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
  ],
  plugins: ["~/plugins/razorpay.client.ts", "~/plugins/firebase.ts"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
});
