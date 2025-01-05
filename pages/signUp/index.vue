<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-bisque to-white">
    <div class="flex flex-col items-center justify-center flex-grow p-6 md:p-8">
      <main
        class="flex items-center justify-between w-full max-w-6xl gap-4 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-101"
      >
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047305/c9mf9cecui1s1vbzaajy.png"
            alt="poster"
            class="w-full h-auto md:h-96 object-cover rounded-lg"
          />
        </div>
        <div class=" p-6 md:p-10d w-full md:w-1/2">
          <h2 class="text-2xl md:text-3xl text-red-600 font-bold mb-6 text-center">
            Create Your Account
          </h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4 relative">
              <label for="name" class="block text-gray-700 mb-2 font-medium"
                >Name</label
              >
              <input
                type="text"
                id="name"
                v-model="name"
                class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
                required
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-4 relative">
              <label for="email" class="block text-gray-700 mb-2 font-medium"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
                required
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-6 relative">
              <label
                for="password"
                class="block text-gray-700 mb-2 font-medium"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                 class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
               class="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-lg md:text-xl font-bold py-3 rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
          <p class="mt-4 text-center text-gray-600">
            Already have an account?
            <NuxtLink
              to="/signIn"
              class="text-red-600 hover:underline hover:text-red-700 transition-colors"
              >Sign In</NuxtLink
            >
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.name === '' || this.email === '' || this.password === '') {
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'All fields are required!',
        })
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(this.email)) {
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a valid email address.',
        })
        return;
      }

      if (this.password.length < 6) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password must be at least 6 characters long.',
        })
        return;
      }
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
</style>