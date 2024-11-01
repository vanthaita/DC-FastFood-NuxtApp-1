// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  tailwindcss: {
    viewer: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] 
    }
  },
  image: {
    domains: ['example.com'],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://api.example.com',
    }
  },
})