<template>
  <div class="recommend-list mt-8 ml-8 mr-8">
    <h2 class="text-2xl font-semibold mb-4 ml-4 text-gray-800">You might also like:</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in recommendedProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :imageSrc="product.image"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductRecommend',
  components: {
    ProductCard,
  },
  data() {
    return {
      recommendedProducts: [
        { id: 1, name: 'KFC Popcorn Chicken', description: 'Delicious popcorn chicken.', price: 6.00, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'KFC Zinger Burger', description: 'Spicy zinger burger.', price: 4.50, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'KFC Fries', description: 'Crispy golden fries.', price: 2.50, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'KFC Wings', description: 'Tasty chicken wings.', price: 5.00, image: 'https://via.placeholder.com/150' },
      ],
    };
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