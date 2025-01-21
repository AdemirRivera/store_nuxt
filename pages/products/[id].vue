<template>
  <div class="">
    <div class="grid grid-cols-2 gap-4">
      <div class="row-span-2 row-start-2 flex items-center justify-center">
        <img
          class="rounded-lg pa-12"
          :src="product.image"
          alt="image description"
        />
      </div>
      <div class="row-start-2 flex flex-col justify-center">
        <span class="text-2xl font-medium">{{ product.title }}</span>
        <span class="text-gray-600">{{ product.category }}</span>
        <p class="my-6">
          {{ product.description }}
        </p>
        <span class="text-3xl font-bold">${{ product.price }}</span>
      </div>
      <div class="col-start-2 row-start-3 flex flex-col">
        <div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            <span class="mr-1"> Agregar al carrito </span>
          </button>
        </div>
        <span class="text-gray-600 text-xs">*precios están sujetos a cambios</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}
</script>
