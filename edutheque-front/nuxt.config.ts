// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "light",
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/ui"],
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  ui: {
    icons: ['mdi', 'heroicons']
  }
});
