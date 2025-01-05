<template>
  <div
    class="profile-form w-full md:w-3/4 p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-102"
  >
    <h2
      class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
    >
      Account Details
    </h2>
    <form @submit.prevent="updateProfile">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative">
          <label class="block mb-2 font-medium text-gray-700" for="lastName"
            >Last Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            required
             placeholder="Enter Last Name"
          />
        </div>

        <div class="relative">
          <label class="block mb-2 font-medium text-gray-700" for="firstName"
            >First Name <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            required
            placeholder="Enter First Name"
          />
        </div>

        <div class="relative">
          <label class="block mb-2 font-medium text-gray-700" for="phone"
            >Phone Number <span class="text-red-500">*</span></label
          >
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            required
              placeholder="Enter Phone Number"
          />
        </div>

        <div class="relative">
          <label class="block mb-2 font-medium text-gray-700" for="email"
            >Email Address <span class="text-red-500">*</span></label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="border border-gray-300 p-3 w-full rounded-md bg-gray-100 text-gray-500 focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200 cursor-not-allowed"
             placeholder="Enter Email Address"
            required
            readonly
          />
        </div>

        <div class="relative">
          <label class="block mb-2 font-medium text-gray-700" for="gender"
            >Gender <span class="text-red-500">*</span></label
          >
          <select
            id="gender"
            v-model="gender"
            class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            required
          >
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label class="block mb-2 font-medium text-gray-700"
            >Date of Birth (optional)</label
          >
          <div class="flex space-x-2">
            <select
              v-model="day"
              class="border border-gray-300 p-3 w-1/3 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            >
              <option disabled value="" selected>Day</option>
              <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
            </select>
            <select
              v-model="month"
              class="border border-gray-300 p-3 w-1/3 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            >
              <option disabled value="" selected>Month</option>
              <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
            </select>
            <select
              v-model="year"
              class="border border-gray-300 p-3 w-1/3 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
            >
              <option disabled value="" selected>Year</option>
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 font-bold px-6 rounded-md hover:bg-red-600 transition-colors duration-300 w-full"
      >
        Update Account
      </button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      lastName: 'Tài',
      firstName: 'Lê Thanh',
      phone: '',
      email: '22521276@gm.uit.edu.vn',
      gender: '',
      day: '',
      month: '',
      year: '',
      years: this.getYears()
    };
  },
  methods: {
    getYears() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 100 }, (_, i) => currentYear - i);
    },
    updateProfile() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to update your profile?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Updated!', 'Your profile has been updated.', 'success');
        }
      });
    }
  }
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%234a5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.7rem;
}

select:focus {
    outline: none;
    border-color: #fbcfe8;
    box-shadow: 0 0 0 2px #fbcfe8;
}

</style>