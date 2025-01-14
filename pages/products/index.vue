<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.id}`">
          <div class="bg-white p-5 rounded-lg shadow-lg">
            <img
              :src="p.image"
              alt="product"
              class="w-full h-48 object-cover"
            />
            <h2 class="text-lg font-semibold mt-2">{{ p.title }}</h2>
            <p class="text-gray-500 mt-1">{{ p.price }}$</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>
