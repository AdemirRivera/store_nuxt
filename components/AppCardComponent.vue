<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <NuxtLink :to="`/products/${product.id}`">
        <div class="bg-white h-full p-5 rounded-lg shadow-lg">
        <img
          :src="product.image"
          alt="product"
          class="w-full h-48 object-cover"
        />
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2">
            <h2 class="text-lg font-semibold mt-2">{{ product.title }}</h2>
          </div>
          <div class="flex flex-col items-end">
            <p class="text-black mt-2">${{ product.price }}</p>
          </div>
        </div>
        <p class="text-gray-500 mt-1 mb-6">{{ product.category }}</p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <span class="mr-1"> Agregar al carrito </span>
        </button>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
