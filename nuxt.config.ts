// https://nuxt.com/docs/api/configuration/nuxt-config
const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  css: ['/assets/css/style.css'],
  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [{
          name: 'description',
          content: 'Nuxt 3 for beginners' 
      }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN
  },
})
