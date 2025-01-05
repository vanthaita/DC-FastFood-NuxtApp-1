<template>
  <div class="min-h-screen flex flex-col bg-gray-100 p-6 md:p-8">
    <main class="flex-grow container mx-auto mt-6 flex flex-col space-y-8">
      <div class="flex justify-between items-center">
        <h1
          class="text-3xl md:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
        >
          Your Shopping Cart
        </h1>
      </div>
      <div
        v-if="cartItems && cartItems.length"
        class="bg-white p-4 md:p-6 shadow rounded-lg transform transition-all duration-300 hover:scale-101"
      >
        <table class="min-w-full bg-white">
          <thead class="bg-gray-100">
            <tr>
              <th
                class="py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
              >
                Item
              </th>
              <th
                class="py-3 text-center font-semibold text-gray-700 border-b border-gray-200"
              >
                Quantity
              </th>
              <th
                class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
              >
                Delivery
              </th>
              <th
                class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
              >
                Delivery Cost
              </th>
              <th
                class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
              >
                Price
              </th>
              <th
                class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
              >
                Total
              </th>
              <th
                class="py-3 text-center font-semibold text-gray-700 border-b border-gray-200"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in cartItems"
              :key="item.id"
              class="border-b border-gray-200"
            >
              <td class="py-3 text-left">{{ item.name }}</td>
              <td class="py-3 flex items-center justify-center">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="bg-gray-200 text-gray-700 text-xl font-bold px-3 py-1 rounded-l-md hover:bg-red-200 transition-colors duration-200"
                >
                  -
                </button>
                <input
                  type="number"
                  v-model.number="item.quantity"
                  min="1"
                  class="w-16 p-2 border-t border-b border-gray-200 rounded-none text-center focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  @change="updateQuantity(item.id, item.quantity)"
                />
                <button
                  @click="increaseQuantity(item.id)"
                  class="bg-gray-200 text-gray-700 text-xl font-bold px-3 py-1 rounded-r-md hover:bg-green-200 transition-colors duration-200"
                >
                  +
                </button>
              </td>
              <td class="py-3 text-right">{{ item.deliveryOption.name }}</td>
              <td class="py-3 text-right">
                ${{ item.deliveryOption.cost.toFixed(2) }}
              </td>
              <td class="py-3 text-right">${{ item.price.toFixed(2) }}</td>
              <td class="py-3 text-right">
                ${{ calculateTotal(item).toFixed(2) }}
              </td>
              <td class="py-3 text-center">
                <button
                  @click="confirmRemove(item.id)"
                  class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-else
        class="text-center flex flex-col items-center justify-center space-y-4"
      >
        <table class="min-w-full bg-white p-4 shadow rounded-lg transform transition-all duration-300 hover:scale-101">
          <tbody>
            <tr class="border-b border-gray-200">
              <td class="py-4 text-center text-gray-500">
                Your cart is empty.
                <NuxtLink
                  to="/"
                  class="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >Continue Shopping</NuxtLink
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PackageInf />
      <div class="mt-8 text-right">
        <h3 class="text-xl font-semibold">Total: ${{ cartTotal.toFixed(2) }}</h3>
        <button
          class="bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700 transition-colors duration-200"
          @click="checkout"
        >
          Checkout
        </button>
      </div>
      <ProductRecommend />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { useCartStore } from '~/store';

const cartStore = useCartStore();
const router = useRouter();

const cartItems = computed(() => cartStore.cartItems || []);
const cartTotal = computed(() => cartStore.cartTotal || 0);

const calculateTotal = (item: any) => {
  const deliveryCost = item.deliveryOption ? item.deliveryOption.cost : 0;
  return item.price * item.quantity + deliveryCost;
};

const updateQuantity = (itemId: number, newQuantity: number) => {
  console.log(itemId, newQuantity);
  const item = cartItems.value.find((item: { id: number; }) => item.id === itemId);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
    cartStore.updateCart(cartItems.value);
  }
};

const increaseQuantity = (itemId: number) => {
  const item = cartItems.value.find((item: { id: number; }) => item.id === itemId);
  if (item) {
    item.quantity++;
    cartStore.updateCart(cartItems.value);
  }
};

const decreaseQuantity = (itemId: number) => {
  const item = cartItems.value.find((item: { id: number; }) => item.id === itemId);
  if (item && item.quantity > 1) {
    item.quantity--;
    cartStore.updateCart(cartItems.value);
  }
};

const confirmRemove = (itemId: number) => {
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
      cartStore.deleteItem(itemId);
      Swal.fire({
        title: 'Processing...',
        didOpen: () => {
          Swal.showLoading();
        },
      });
      setTimeout(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item removed from cart.',
          showConfirmButton: false,
          timer: 1000,
        });
      }, 900);
    }
  });
};

const checkout = () => {
  if (cartItems.value.length === 0) {
    Swal.fire({
      title: 'Your cart is empty',
      text: 'Please add some items to your cart before proceeding to checkout.',
      icon: 'warning',
    });
    return;
  }
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
        },
      });
      setTimeout(() => {
        Swal.fire('Success!', 'Proceeding to checkout...', 'success');
        cartStore.addPreviousOrder([...cartItems.value]);
        cartStore.clearCart();
        router.push('/');
      }, 1500);
    }
  });
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