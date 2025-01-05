<template>
  <div class="min-h-screen flex flex-col p-6 md:p-8">
    <h2
      class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
    >
      Previous Orders
    </h2>
    <div
      v-if="previousOrders.length"
      class="bg-white p-4 md:p-6 shadow rounded-lg transform transition-all duration-300 hover:scale-101"
    >
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th
              class="py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
            >
              Order #
            </th>
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
              Price
            </th>
            <th
              class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(order, orderIndex) in previousOrders" :key="orderIndex">
            <tr
              v-for="(item, itemIndex) in order"
              :key="item.id"
              class="border-b border-gray-200"
            >
              <td
                v-if="itemIndex === 0"
                :rowspan="order.length"
                class="py-3 text-left align-top"
              >
                {{ orderIndex + 1 }}
              </td>
              <td class="py-3 text-left">{{ item.name }}</td>
              <td class="py-3 text-center">{{ item.quantity }}</td>
              <td class="py-3 text-right">${{ item.price.toFixed(2) }}</td>
              <td class="py-3 text-right">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="mt-6 text-right">
        <button
          @click="clearPreviousOrders"
          class="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 font-medium transition-colors duration-300"
        >
          Clear All Previous Orders
        </button>
      </div>
    </div>
    <div
      v-else
      class="bg-white p-4 md:p-6 shadow rounded-lg transform transition-all duration-300 hover:scale-101"
    >
      <table class="min-w-full bg-white">
        <thead class="bg-gray-100">
          <tr>
            <th
              class="py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
            >
              Order #
            </th>
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
              Price
            </th>
            <th
              class="py-3 text-right font-semibold text-gray-700 border-b border-gray-200"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td colspan="5" class="py-4 text-center text-gray-500">
              No previous orders found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/store';

const cartStore = useCartStore();

const previousOrders = computed(() => cartStore.previousOrders);

const clearPreviousOrders = () => {
  cartStore.clearPreviousOrders();
};
</script>