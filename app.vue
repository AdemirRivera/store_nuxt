<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  htmlAttrs: {
    class: 'h-full bg-white'
  },
  bodyAttrs: {
    class: 'h-full'
  }
});
</script>
