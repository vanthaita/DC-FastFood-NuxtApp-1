<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-50">
    <main class="flex-grow p-8">
      <div class="w-full mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div class="flex flex-col md:flex-row gap-6">
          <img :src="product.imageSrc" alt="Product image" class="w-96 h-auto object-cover rounded-lg border border-gray-300">
          <div class="p-4 flex-1">
            <h2 class="text-3xl font-bold text-gray-800">{{ product.name }}</h2>
            <p class="mt-2 text-lg text-gray-600">{{ product.description }}</p>
            <p class="mt-4 text-2xl font-bold text-red-600">Price: ${{ formattedPrice }}</p>
            <div class="mt-4">
              <label for="quantity" class="block text-lg font-semibold">Quantity</label>
              <input v-model.number="quantity" type="number" id="quantity" min="1" class="border p-2 rounded w-16 text-center" />
              <label for="delivery" class="block text-lg font-semibold mt-4">Delivery Option</label>
              <select v-model="selectedDelivery" id="delivery" class="border p-2 rounded w-3/5">
                <option v-for="option in deliveryOptions" :key="option.id" :value="option">
                  {{ option.name }} - ${{ option.cost.toFixed(2) }}
                </option>
              </select>
            </div>
            <div class="mt-4">
              <h3 class="text-xl font-bold text-gray-800">Total Bill: ${{ totalBill }}</h3>
            </div>
            <button @click="buyNow" class="mt-4 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">Buy Now</button>
            <div class="mt-6">
              <h3 class="text-xl font-bold text-gray-800">Additional Details</h3>
              <p class="mt-2 text-gray-600">{{ additionalDetails }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <ProductRecommend :productId="product.id" />
  </div>
</template>

<script>
import ProductRecommend from './ProductRecommend.vue';
export default {
  name: 'ProductDetail',
  components: {
    ProductRecommend,
  },
  data() {
    return {
      product: {
        name: this.$route.query.name,
        description: this.$route.query.description,
        price: this.parsePrice(this.$route.query.price),
        imageSrc: this.$route.query.imageSrc,
      },
      quantity: 1,
      deliveryOptions: [
        { id: 1, name: 'Standard', cost: 5.00 },
        { id: 2, name: 'Express', cost: 10.00 },
      ],
      selectedDelivery: { id: 1, name: 'Standard', cost: 5.00 },
      additionalDetails: 'Some additional details about the product.',
    };
  },
  computed: {
    formattedPrice() {
      return this.product.price.toFixed(2);
    },
    totalBill() {
      return (this.product.price * this.quantity + this.selectedDelivery.cost).toFixed(2);
    },
  },
  methods: {
    parsePrice(price) {
      return parseFloat(price.replace(/[^0-9.-]+/g, ""));
    },
    buyNow() {
      this.$router.push('/cart');
    },
  },
};
</script>