<template>
  <div>
    <div class="flex">
      <span class="font-medium text-xl mx-auto mt-6 mb-12">
        Los mejores artículos para ti...
      </span>
    </div>

    <div class="grid grid-cols-4 gap-2 place-items-stretch mx-12">
      <AppCardComponent
        v-for="p in products"
        :key="p.id"
        :product="p"
        class="mb-6"
      />
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Store | Productos',
  meta: [
    {
      name: 'description',
      content: 'Los mejores productos para ti'
    }
  ]
})
</script>
