<template>
  <div
    class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-101 max-w-xs"
  >
    <img :src="imageSrc" alt="Product image" class="w-full h-64 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ name }}</h3>
      <p class="text-gray-600 mt-1 leading-relaxed">{{ description }}</p>
      <p class="text-2xl font-bold text-gray-900 mt-4">${{ price }}</p>
    </div>
    <NuxtLink
      :to="{
        path: '/productDetail',
        query: {
          id: id,
          name: name,
          description: description,
          price: price,
          imageSrc: imageSrc,
        },
      }"
      class="block text-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 mt-4 font-medium hover:bg-red-600 transition-colors duration-200"
    >
      Buy
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}>();
</script>