<template>
  <div class="min-h-screen flex flex-col bg-gray-100 p-6 md:p-8">
    <main class="flex-grow container mx-auto mt-6 flex flex-col space-y-8">
      <div
        class="w-full mx-auto bg-white p-4 md:p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-101"
      >
        <div class="flex flex-col md:flex-row gap-6">
          <img
            :src="product.imageSrc"
            alt="Product image"
            class="w-full md:w-96 h-auto object-cover rounded-lg border border-gray-200"
          />
          <div class="p-4 flex-1">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
              {{ product.name }}
            </h2>
            <p class="mt-2 text-xl font-bold text-red-600">
              Price: ${{ formattedPrice }}
            </p>
            <div class="mt-4">
              <div class="flex items-center">
                <label
                  for="quantity"
                  class="block text-gray-700 text-lg font-semibold mr-4"
                  >Quantity</label
                >
                <button
                  @click="decreaseQuantity"
                  class="bg-gray-200 text-gray-700 text-xl font-bold px-3 py-1 rounded-l-md hover:bg-red-200 transition-colors duration-200"
                >
                  -
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  id="quantity"
                  min="1"
                  class="border border-gray-200 rounded-md w-16 text-center p-2 focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                />
                <button
                  @click="increaseQuantity"
                  class="bg-gray-200 text-gray-700 text-xl font-bold px-3 py-1 rounded-r-md hover:bg-green-200 transition-colors duration-200"
                >
                  +
                </button>
              </div>
              <label
                for="delivery"
                class="block text-gray-700 text-lg font-semibold mt-4"
                >Delivery Option</label
              >
              <select
                v-model="selectedDelivery"
                id="delivery"
                class="border border-gray-200 p-3 rounded-md w-full md:w-3/5 focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
              >
                <option
                  v-for="option in deliveryOptions"
                  :key="option.id"
                  :value="option"
                >
                  {{ option.name }} - ${{ option.cost.toFixed(2) }}
                </option>
              </select>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-red-600">
                Total Bill: ${{ totalBill }}
              </h3>
            </div>
            <button
              @click="buyNow"
              class="mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 px-6 font-medium rounded-md hover:bg-red-600 transition-colors duration-200 w-full"
            >
              Buy Now
            </button>
            <div class="mt-6">
              <h3 class="text-xl font-semibold text-gray-700">
                Additional Details
              </h3>
              <p class="mt-2 text-gray-600 leading-relaxed">
                {{ product.description }}
              </p>
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
  price: parseFloat((route.query.price as string).replace(/[^0-9.-]+/g, '')),
  imageSrc: route.query.imageSrc as string,
});

const quantity = ref(1);
const deliveryOptions = ref([
  { id: 1101, name: 'Standard', cost: 5.0 },
  { id: 2202, name: 'Express', cost: 10.0 },
]);
const selectedDelivery = ref(deliveryOptions.value[0]);

const formattedPrice = computed(() => product.value.price.toFixed(2));
const totalBill = computed(() =>
  (product.value.price * quantity.value + selectedDelivery.value.cost).toFixed(
    2
  )
);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const buyNow = () => {
  cartStore.addToCart({
    ...product.value,
    quantity: quantity.value,
    deliveryOption: selectedDelivery.value,
  });
  router.push('/cart');
};
</script>