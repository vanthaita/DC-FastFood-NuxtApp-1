<template>
  <div class="bg-white p-6 shadow-lg rounded-lg mt-6">
    <h3
      class="text-4xl text-center font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
    >
      DC Locations in HCM
    </h3>
    <div class="mb-4">
    </div>
      <div class="max-h-[600px] overflow-y-auto custom-scrollbar">
        <ul class="divide-y divide-gray-200">
          <div v-if="filteredAddresses.length === 0" class="text-center text-gray-500 py-4">No locations found.</div>
        <li
            v-for="location in filteredAddresses"
              :key="location.id"
            class="p-4 hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2"
           @click="selectAddress(location)"
         >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-400">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
            <div>
              <h4 class="font-semibold text-lg text-gray-800">{{ location.name }}</h4>
              <p class="text-gray-600">{{ location.address }}</p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeAddress } from '~/data/storeAddress';
import type { StoreAddress } from '~/data/storeAddress';

const emit = defineEmits<{
  (e: 'address-selected', address: string): void;
}>();

const searchQuery = ref('');

const filteredAddresses = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return storeAddress.filter(location => {
        return location.name.toLowerCase().includes(query) || location.address.toLowerCase().includes(query);
    });
});

const selectAddress = (location: StoreAddress) => {
  emit('address-selected', location.address);
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #777;
}
</style>