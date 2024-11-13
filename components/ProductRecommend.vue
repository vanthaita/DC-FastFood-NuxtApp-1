<template>
  <div class="recommend-list mt-8 ml-8 mr-8">
    <h2 class="text-center font-bold text-4xl mb-4 ml-4 text-gray-700">You might also like:</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 pt-2 pb-2">
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
        { id: 1, name: 'KFC Popcorn Chicken', description: 'Delicious popcorn chicken.', price: '$6', image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046883/yyhms2l6c4u5jjxjrkrf.png' },
        { id: 2, name: 'KFC Zinger Burger', description: 'Spicy zinger burger.', price: '$4.5', image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047177/lmvfmrmg6xh7oq0csfp8.png' },
        { id: 3, name: 'KFC Fries', description: 'Crispy golden fries.', price: '$2.5', image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047540/voef6jdpqbsvdsbkdvle.png' },
        { id: 4, name: 'KFC Wings', description: 'Tasty chicken wings.', price: '$5', image: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047388/czd8pjot7y2run7jtnol.png' },
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