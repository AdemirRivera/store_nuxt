/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',              // Archivo raíz de Nuxt 3
    './components/**/*.{vue,js,ts}', // Componentes
    './layouts/**/*.vue',     // Layouts
    './pages/**/*.vue',       // Páginas
    './plugins/**/*.{js,ts}', // Plugins
    './nuxt.config.{js,ts}',  // Configuración de Nuxt
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

