<template>
  <div class="min-h-full">
    <nav class="flex justify-between items-center px-8 py-3">
      <div class="text-2xl">
        <FontAwesome icon="store" />
        <span v-text="'Store'" class="ml-2 font-medium" />
      </div>

      <div>
        <ul class="flex">
          <li class="px-2">
            <NuxtLink to="/" class=""> Home </NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink to="/about" class=""> About </NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink to="/products" class=""> Products </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <FontAwesome icon="search" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search product"
            required
          />
        </div>
      </div>

      <div class="">
        <FontAwesome icon="user" />
        <span v-text="'account'" class="ml-1" />
      </div>

      <div class="">
        <FontAwesome icon="cart-shopping" />
        <span v-text="'cart'" class="ml-1" />
      </div>
    </nav>

    <!-- <div>
      <slot />
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show_menu = ref(false)
let mediaQuery

// Actualiza el booleano según el estado del matchMedia
const updateMediaQuery = () => {
  show_menu.value = mediaQuery.matches
}

onMounted(() => {
  // Configura el media query
  mediaQuery = window.matchMedia('(min-width: 728px)')

  // Llama a la función inicialmente
  updateMediaQuery()

  // Escucha cambios
  mediaQuery.addEventListener('change', updateMediaQuery)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', updateMediaQuery)
})
</script>
