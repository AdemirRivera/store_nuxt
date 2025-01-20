<template>
  <div>
    <section
      class="min-h-[calc(100vh-4rem)] bg-blue-900 flex items-center justify-center"
    >
      <div class="text-center">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
        >
          Hasta 50% de descuento en articulos seleccionados
        </h1>
        <p
          class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 mx-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit
          vitae mollitia deserunt odit quae inventore sequi fuga illum id
          obcaecati sunt unde alias harum animi aut, ullam repellat quo.
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <button
            @click="SendToProductFn"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <span class="mr-1"> Comprar </span>
            <FontAwesome icon="arrow-right" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const SendToProductFn = () => {
  useRouter().push('/products')
}
</script>
