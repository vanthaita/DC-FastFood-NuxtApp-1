<template>
    <div class="min-h-screen flex flex-col bg-gray-100 p-8">
      <main class="flex-grow container mx-auto mt-4 flex flex-col space-y-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-800">Your Shopping Cart</h1>
        </div>
        <div v-if="cartItems.length" class="bg-white p-6 shadow rounded">
          <table class="min-w-full bg-white">
            <thead>
              <tr>
                <th class="py-2">Item</th>
                <th class="py-2">Quantity</th>
                <th class="py-2">Price</th>
                <th class="py-2">Total</th>
                <th class="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id" class="border-t">
                <td class="py-2">{{ item.name }}</td>
                <td class="py-2">
                  <input
                    type="number"
                    v-model.number="item.quantity"
                    min="1"
                    class="w-16 p-2 border rounded"
                    @change="updateQuantity(item.id, item.quantity)"
                  />
                </td>
                <td class="py-2">${{ item.price.toFixed(2) }}</td>
                <td class="py-2">${{ calculateTotal(item).toFixed(2) }}</td>
                <td class="py-2">
                  <button @click="confirmRemove(item.id)" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <div class="mt-4 text-right">
            <h3 class="text-xl font-bold">Total: ${{ cartTotal.toFixed(2) }}</h3>
            <button class="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700" @click="checkout">
              Checkout
            </button>
          </div>
        </div>
  
        <div v-else class="text-center">
          <p class="text-lg">Your cart is empty.</p>
          <router-link to="/menu" class="text-blue-600 underline">Continue Shopping</router-link>
        </div>
        <h2 class="text-xl font-semibold text-gray-800">Recommend your choice with:</h2>
        <ProductRecommend />
      </main>
    </div>
  </template>
  
  <script>
  import ProductRecommend from './ProductRecommend.vue';
  export default {
    name: 'CartList',
    components: { ProductRecommend },
    data() {
      return {
        cartItems: [
          { id: 1, name: 'Chicken Bucket', quantity: 2, price: 20.00 },
          { id: 2, name: 'Chicken Sandwich', quantity: 1, price: 5.00 },
          { id: 3, name: 'Fries', quantity: 3, price: 3.00 },
        ],
      };
    },
    computed: {
      cartTotal() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      calculateTotal(item) {
        return item.price * item.quantity;
      },
      updateQuantity(itemId, newQuantity) {
        const item = this.cartItems.find(item => item.id === itemId);
        if (item && newQuantity > 0) {
          item.quantity = newQuantity;
        }
      },
      confirmRemove(itemId) {
        if (confirm('Are you sure you want to remove this item?')) {
          this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        }
      },
      checkout() {
        alert('Proceeding to checkout...');
      },
    },
  };
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
    }
    th,
    td {
      min-width: 120px;
    }
  }
  </style>
  