<template>
  <div
    class="address-container w-full md:w-3/4 relative p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102"
  >
    <h2
      class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
    >
      Your Addresses
    </h2>
    <div class="address-form mb-8">
      <form @submit.prevent="saveAddress">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="relative">
            <label
              class="block mb-2 font-medium text-gray-700"
              for="street"
              >Street <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="street"
              v-model="form.street"
              class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
              required
              placeholder="Enter Street"
            />
          </div>
          <div class="relative">
            <label class="block mb-2 font-medium text-gray-700" for="city"
              >City <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="city"
              v-model="form.city"
              class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
              required
               placeholder="Enter City"
            />
          </div>
          <div class="relative">
            <label class="block mb-2 font-medium text-gray-700" for="state"
              >State <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="state"
              v-model="form.state"
              class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
              required
              placeholder="Enter State"
            />
          </div>
          <div class="relative">
            <label class="block mb-2 font-medium text-gray-700" for="zip"
              >ZIP Code <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              id="zip"
              v-model="form.zip"
              class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
              required
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
        <button
          type="submit"
          class="mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition-colors duration-300 w-full"
        >
          {{ editMode ? 'Update Address' : 'Add Address' }}
        </button>
      </form>
      
    </div>
    <div class="address-list">
      <h3 class="text-2xl font-semibold mb-4 text-gray-800">Saved Addresses</h3>
      <ul class="space-y-4">
        <li
          v-for="(address, index) in addresses"
          :key="address.id"
          class="p-4 bg-gray-50 rounded-lg shadow flex items-center justify-between"
        >
          <div class="flex-1">
            <p class="text-gray-700">{{ address.street }}, {{ address.city }}, {{ address.state }} {{ address.zip }}</p>
          </div>
          <div class="flex space-x-2">
            <button
              @click="editAddress(index)"
              class="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Edit
            </button>
            <button
              @click="confirmDeleteAddress(address.id)"
              class="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
      <button 
        @click="clearData" 
        class=" mt-6 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors font-medium">
        Clear All
      </button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { useAddressStore } from '~/store/addressStore';
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const addressStore = useAddressStore();

    const form = ref({
      id: Date.now(),
      street: '',
      city: '',
      state: '',
      zip: ''
    });

    const editMode = ref(false);
    const editIndex = ref(null);

    const addresses = computed(() => addressStore.addresses);

    onMounted(() => {
      addressStore.loadAddressesFromLocalStorage();
    });

    const saveAddress = () => {
      if (editMode.value) {
        addressStore.updateAddress({ ...form.value });
        editMode.value = false;
        editIndex.value = null;
      } else {
        addressStore.addAddress({ ...form.value });
      }
      resetForm();
    };

    const editAddress = (index) => {
      const address = addresses.value[index];
      form.value = { ...address };
      editMode.value = true;
      editIndex.value = index;
    };

    const confirmDeleteAddress = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this address?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          addressStore.deleteAddress(id);
          Swal.fire('Deleted!', 'The address has been deleted.', 'success');
        }
      });
    };

    const resetForm = () => {
      form.value = {
        id: Date.now(),
        street: '',
        city: '',
        state: '',
        zip: ''
      };
    };

      const clearData = () => {
      if(addresses.value.length === 0) {
        Swal.fire({
          title: 'No address to clear',
          text: 'You have no saved address to clear.',
          icon: 'info',
          confirmButtonColor: '#3498db'
        });
        return;
      }
      Swal.fire({
        title: 'Are you sure?',
        text: 'This will remove all saved addresses.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, clear all!'
      }).then((result) => {
        if (result.isConfirmed) {
          addressStore.clearAddresses();
          Swal.fire('Cleared!', 'All addresses have been removed.', 'success');
        }
      });
    };

    return {
      form,
      addresses,
      saveAddress,
      editAddress,
      confirmDeleteAddress,
      resetForm,
      clearData,
      editMode
    };
  }
};
</script>

<style scoped>
/* No additional styles are required here */
</style>