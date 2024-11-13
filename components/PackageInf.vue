<template>
  <div class="bg-white p-6 shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-red-600">Order Information</h2>
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-700">Recipient Details</h3>
      <p class="text-gray-600">Name: {{ recipientName }}</p>
      <p class="text-gray-600">Phone: {{ recipientPhone }}</p>
    </div>
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-700">Delivery Option</h3>
      <p class="text-gray-600">{{ deliveryOption.name }} - ${{ deliveryOption.cost.toFixed(2) }}</p>
    </div>
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-700">Delivery Address</h3>
      <p class="text-gray-600">{{ address.street }}, {{ address.city }}, {{ address.state }} {{ address.zip }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const recipientName = ref('Lê Thanh Tài');
const recipientPhone = ref('0356356497');
const deliveryOption = ref({
  id: 1,
  name: 'Standard',
  cost: 5.00,
});
const address = ref({
  street: '182 Đường số 2',
  city: 'TP Thu Duc',
  state: 'HCM',
  zip: '700000',
});

</script>
