<template>
  <div class="bg-white p-4 shadow rounded">
    <img :src="imageSrc" alt="Product image" class="w-full h-auto object-fill rounded-t">
    <div class="p-4">
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <p class="mt-2">{{ description }}</p>
      <p class="mt-2 font-bold">{{ price }}</p>
    </div>
    <nuxt-link to="/productDetail" class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
  Buy
</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>