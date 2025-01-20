<template>
  <div>
    <div class="flex">
      <span class="font-medium text-xl mx-auto mt-6 mb-12">
        Los mejores artículos para ti...
      </span>
    </div>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.id}`">
          <div class="bg-white p-5 rounded-lg shadow-lg">
            <img
              :src="p.image"
              alt="product"
              class="w-full h-48 object-cover"
            />
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2">
                <h2 class="text-lg font-semibold mt-2">{{ p.title }}</h2>
              </div>
              <div class="flex flex-col items-end">
                <p class="text-black mt-2">${{ p.price }}</p>
              </div>
            </div>
            <p class="text-gray-500 mt-1">{{ p.category }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>
