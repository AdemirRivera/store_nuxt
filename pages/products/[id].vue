<template>
  <div class="">
    <!-- <div class="flex items-center justify-start">
      <button
        type="button"
        class="text-blue-500 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center me-2 ml-5"
      >
        <FontAwesome icon="arrow-left" @click="$router.back()" />
      </button>
    </div> -->

    <div class="grid grid-cols-2 gap-4">
      <div class="row-span-2 row-start-2 flex items-center justify-center">
        <img class="rounded-lg pa-12" :src="product.image" alt="image description" />
      </div>
      <div class="row-start-2 bg-red-500">3</div>
      <div class="col-start-2 row-start-3 bg-yellow-500">4</div>
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
