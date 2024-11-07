<template>
    <div class="recommend-list mt-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">You might also like:</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in recommendedProducts" :key="product.id" class="bg-white shadow p-4 rounded-lg">
          <img :src="product.image" alt="product image" class="w-full h-48 object-cover rounded mb-4" />
          <h3 class="text-lg font-bold text-gray-700">{{ product.name }}</h3>
          <p class="text-gray-500">${{ product.price.toFixed(2) }}</p>
          <button class="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductRecommend',
    data() {
      return {
        recommendedProducts: [
          { id: 1, name: 'KFC Popcorn Chicken', price: 6.00, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'KFC Zinger Burger', price: 4.50, image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'KFC Fries', price: 2.50, image: 'https://via.placeholder.com/150' },
          { id: 4, name: 'KFC Wings', price: 5.00, image: 'https://via.placeholder.com/150' },
        ],
      };
    },
    methods: {
      addToCart(product) {
      },
    },
  };
  </script>
  
  <style scoped>
  .recommend-list img {
    transition: transform 0.3s ease-in-out;
  }
  .recommend-list img:hover {
    transform: scale(1.05);
  }
  </style>
  