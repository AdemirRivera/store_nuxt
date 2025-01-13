<template>
  <div>
    <h1 class="text-3xl font-bold underline">Product detail number {{id}}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis
      totam inventore earum ipsam ullam blanditiis, quidem assumenda vero illum
      veniam similique ex quasi tenetur magni. At id tenetur nesciunt.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>
