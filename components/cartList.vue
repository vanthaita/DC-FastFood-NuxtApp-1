<template>
  <div class="min-h-screen flex flex-col bg-white p-8">
    <main class="flex-grow container mx-auto mt-4 flex flex-col space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-red-600">Your Shopping Cart</h1>
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
              <td class="py-2 px-28">{{ item.name }}</td>
              <td class="py-2 px-28">
                <div class="flex items-center space-x-2">
                  <button @click="decreaseQuantity(item.id)" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">-</button>
                  <input
                    type="number"
                    v-model.number="item.quantity"
                    min="1"
                    class="w-16 p-2 border rounded text-center"
                    @change="updateQuantity(item.id, item.quantity)"
                  />
                  <button @click="increaseQuantity(item.id)" class="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">+</button>
                </div>
              </td>
              <td class="py-2 px-28">${{ item.price.toFixed(2) }}</td>
              <td class="py-2 px-28">${{ calculateTotal(item).toFixed(2) }}</td>
              <td class="py-2 px-28">
                <button @click="confirmRemove(item.id)" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center">
        <p class="text-lg">Your cart is empty.</p>
        <router-link to="/menu" class="text-blue-600 underline">Continue Shopping</router-link>
      </div>
      <PackageInf />
      <div class="mt-4 text-right">
        <h3 class="text-xl font-bold">Total: ${{ cartTotal.toFixed(2) }}</h3>
        <button class="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700" @click="checkout">
          Checkout
        </button>
      </div>
      <h2 class="text-2xl font-bold text-gray-600 ml-2">Recommend your choice with:</h2>
      <ProductRecommend />
    </main>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import ProductRecommend from './ProductRecommend.vue';
import PackageInf from './PackageInf.vue';

export default {
  name: 'CartList',
  components: { ProductRecommend, PackageInf },
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
    increaseQuantity(itemId) {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(itemId) {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    confirmRemove(itemId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to remove this item from your cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, remove it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartItems = this.cartItems.filter(item => item.id !== itemId);
          Swal.fire('Removed!', 'The item has been removed from your cart.', 'success');
        }
      });
    },
    checkout() {
      Swal.fire({
        title: 'Proceed to Checkout',
        text: 'Are you sure you want to proceed to checkout?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, proceed!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Processing...',
            didOpen: () => {
              Swal.showLoading();
            }
          });
          setTimeout(() => {
            Swal.fire('Success!', 'Proceeding to checkout...', 'success');
            this.$router.push('/');
          }, 1500);
        }
      });
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
