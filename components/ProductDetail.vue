<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-50">
    <!-- Main Content -->
    <main class="flex-grow p-8">
      <div class="w-full mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Product Image -->
          <img :src="imageSrc" alt="Product image" class="w-96 h-auto object-cover rounded-lg border border-gray-300">

          <!-- Product Info -->
          <div class="p-4 flex-1">
            <h2 class="text-3xl font-bold text-gray-800">{{ name }}</h2>
            <p class="mt-2 text-lg text-gray-600">{{ description }}</p>
            <p class="mt-4 text-2xl font-bold text-red-600">Price: ${{ formattedPrice }}</p>

            <!-- Quantity and Delivery Selection -->
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

            <!-- Real-time Total Bill -->
            <div class="mt-4">
              <h3 class="text-xl font-bold text-gray-800">Total Bill: ${{ totalBill }}</h3>
            </div>

            <!-- Buy Button -->
            <button class="mt-4 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">Buy Now</button>

            <!-- Additional Details -->
            <div class="mt-6">
              <h3 class="text-xl font-bold text-gray-800">Additional Details</h3>
              <p class="mt-2 text-gray-600">{{ additionalDetails }}</p>
            </div>
          </div>
        </div>

        <!-- Suggested Products -->
        <div class="mt-8">
          <h3 class="text-xl font-bold text-gray-800">You may also like</h3>
          <div class="flex space-x-4 mt-4 overflow-x-auto pb-2">
            <ProductCard
              v-for="item in menuItems"
              :key="item.id"
              :name="item.name"
              :description="item.description"
              :price="item.price"
              :imageSrc="item.imageSrc"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    name: 'ProductDetail',
    props: {
      name: String,
      description: String,
      price: String, 
      imageSrc: String,
      additionalDetails: String,
      suggestedProducts: Array,
    },
    data() {
      return {
        quantity: 1, // Initial quantity
        deliveryOptions: [
          { id: 1, name: 'Standard', cost: 5.00 },
          { id: 2, name: 'Express', cost: 10.00 },
        ],
        menuItems: [
          { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', price: '$20', imageSrc: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Chicken Sandwich', description: 'A delicious chicken sandwich.', price: '$5', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Fries', description: 'Crispy golden fries.', price: '$3', imageSrc: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Fried Chicken', description: 'Delicious fried chicken.', price: '$15', imageSrc: 'https://via.placeholder.com/150' },
        ],
        selectedDelivery: { id: 1, name: 'Standard', cost: 5.00 }
      };
    },
    computed: {
      formattedPrice() {
        return Number(this.price).toFixed(2);
      },
      totalBill() {
        return (Number(this.price) * this.quantity + this.selectedDelivery.cost).toFixed(2);
      },
    },
  };
</script>

<style scoped>
  @media (max-width: 768px) {
    .flex-col {
      flex-direction: column;
    }
  }
</style>
