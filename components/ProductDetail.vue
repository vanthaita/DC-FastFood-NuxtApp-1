<template>
  <div class="min-h-screen flex flex-col bg-white p-8">
    <main class="flex-grow container mx-auto mt-4 flex flex-col space-y-6">
      <div class="w-full mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div class="flex flex-col md:flex-row gap-6">
          <img :src="product.imageSrc" alt="Product image" class="w-96 h-auto object-cover rounded-lg border border-gray-300">
          <div class="p-4 flex-1">   
            <h2 class="text-3xl font-bold text-gray-800">{{ product.name }}</h2>
            <p class="mt-4 text-1xl font-bold text-red-600">Price: ${{ formattedPrice }}</p>
            <div class="mt-4">
              <div class="flex flex-row">
                <label for="quantity" class="block text-xl font-semibold mr-4">Quantity</label>
                <input v-model.number="quantity" type="number" id="quantity" min="1" class="border rounded w-16 text-center" />
              </div>
              <label for="delivery" class="block text-lg font-semibold mt-4">Delivery Option</label>
              <select v-model="selectedDelivery" id="delivery" class="border p-2 rounded w-3/5">
                <option v-for="option in deliveryOptions" :key="option.id" :value="option">
                  {{ option.name }} - ${{ option.cost.toFixed(2) }}
                </option>
              </select>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-red-600">Total Bill: ${{ totalBill }}</h3>
            </div>
            <button @click="buyNow" class="mt-4 bg-red-600 text-white p-3 font-medium rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">Buy Now</button>
            <div class="mt-6">
              <h3 class="text-xl font-bold text-gray-800">Additional Details</h3>
              <p class="mt-2 text-gray-600">{{ product.description }}</p>
            </div>
          </div>
        </div>
        <ProductRecommend />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '../store';
import ProductRecommend from './ProductRecommend.vue';

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const product = ref({
  id: parseInt(route.query.id as string),
  name: route.query.name as string,
  description: route.query.description as string,
  price: parseFloat((route.query.price as string).replace(/[^0-9.-]+/g, "")),
  imageSrc: route.query.imageSrc as string,
});

const quantity = ref(1);
const deliveryOptions = ref([
  { id: 1101, name: 'Standard', cost: 5.00 },
  { id: 2202, name: 'Express', cost: 10.00 },
]);
const selectedDelivery = ref(deliveryOptions.value[0]);

const formattedPrice = computed(() => product.value.price.toFixed(2));
const totalBill = computed(() => (product.value.price * quantity.value + selectedDelivery.value.cost).toFixed(2));

const buyNow = () => {
  cartStore.addToCart({
    ...product.value,
    quantity: quantity.value,
    deliveryOption: selectedDelivery.value,
  });
  router.push('/cart');
};
</script>