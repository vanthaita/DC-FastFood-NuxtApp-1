<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-red-600 text-white p-4">
      <h1 class="text-3xl font-bold">KFC Product Detail</h1>
    </header>
    <main class="flex-grow p-8">
      <div class="max-w-4xl mx-auto bg-white p-6 shadow rounded">
        <img :src="imageSrc" alt="Product image" class="w-full h-64 object-cover rounded-t">
        <div class="p-4">
          <h2 class="text-2xl font-bold">{{ name }}</h2>
          <p class="mt-2 text-lg">{{ description }}</p>
          <p class="mt-4 text-xl font-bold">{{ price }}</p>
          <div class="mt-4">
            <h3 class="text-xl font-bold">Additional Details</h3>
            <p class="mt-2">{{ additionalDetails }}</p>
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 KFC. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
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
    additionalDetails: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>