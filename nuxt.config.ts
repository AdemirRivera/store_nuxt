// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxtjs/google-fonts'],
  fontawesome: {
    icons: {
      solid: ['store', 'cart-shopping', 'user', 'search', 'arrow-right', 'arrow-left', 'angle-down'],
    }
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 700], // Cambia "Roboto" por la fuente que deseas usar
    },
  },
  app: {
    head: {
      title: 'Nuxt store',
      meta: [
        {
          name: 'description',
          content: 'Nuxt store'
        }
      ]
    }
  }
})