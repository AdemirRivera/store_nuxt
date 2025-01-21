<template>
  <div class="min-h-screen">
    <nav class="grid grid-cols-5 gap-2 py-3 px-12 h-16">
      <!-- logo -->
      <div class="text-2xl flex items-center">
        <FontAwesome icon="store" />
      </div>

      <!-- normal menu -->
      <div class="col-span-2 flex items-center justify-center">
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

      <!-- search -->
      <div class="flex items-center justify-center">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <FontAwesome icon="search" />
          </div>
          <input
            class="block w-full px-4 py-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-300 focus:border-blue-300"
            placeholder="Search product"
            required
          />
        </div>
      </div>

      <!-- account and cart -->
      <div class="flex items-center justify-around">
        <div class="">
          <FontAwesome icon="user" />
          <span v-text="'account'" class="ml-1" />
        </div>

        <div class="">
          <FontAwesome icon="cart-shopping" />
          <span v-text="'cart'" class="ml-1" />
        </div>
      </div>
    </nav>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show_dropdown = ref(false)

const { data: categories } = await useFetch(
  'https://fakestoreapi.com/products/categories'
)
</script>
