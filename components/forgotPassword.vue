<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 flex items-center justify-center bg-black p-6 md:p-16 bg-opacity-50 z-50"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 transform transition-all duration-300 hover:scale-101"
      >
        <h2
          class="text-2xl md:text-3xl text-red-600 font-bold mb-6 text-center"
        >
          Forgot Password
        </h2>
        <p class="mb-6 text-gray-700">
          Enter your email address to reset your password.
        </p>
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          class="w-full p-3 border border-gray-300 rounded-md mb-6 focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
        />
        <div class="flex justify-end space-x-4">
          <button
            @click="closePopup"
             class="border-2 border-gray-400 text-gray-400  bg-clip-text bg-gradient-to-r from-gray-400 to-emerald-600 text-lg md:text-xl font-bold px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            @click="resetPassword"
             class="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-lg md:text-xl font-bold px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import Swal from 'sweetalert2';
  
  export default {
    setup() {
      const isVisible = ref(false);
      const email = ref('');
  
      const closePopup = () => {
        isVisible.value = false;
      };
  
      const resetPassword = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            Swal.fire('Invalid email', 'Please enter a valid email address.', 'error');
          return;
        }
  
        Swal.fire({
          title: 'Processing...',
          didOpen: () => {
            Swal.showLoading();
          },
        });
  
        setTimeout(() => {
            Swal.fire('Success!', 'Check your email to create a new password.', 'success');
            closePopup();
        }, 1500);
      };
  
      const showPopup = () => {
        isVisible.value = true;
      };
  
      return {
        isVisible,
        email,
        closePopup,
        resetPassword,
        showPopup,
      };
    },
  };
  </script>