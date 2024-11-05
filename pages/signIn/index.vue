<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <header class="bg-red-600 text-white w-full p-4 text-center">
      <h1 class="text-3xl font-bold">KFC Sign In</h1>
    </header>
    <main class="flex-grow flex items-center justify-center w-5/6">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Sign In to Your Account</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          </div>
          <button type="submit" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Sign In</button>
        </form>
        <p class="mt-4 text-center text-gray-600">Don't have an account? <a href="/signUp" class="text-red-600 hover:underline">Sign Up</a></p>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script>
import { routeLocationKey } from 'vue-router';
import Footer from '~/components/Footer.vue';
export default {
  name: 'SignIn',
  components: {
    Footer,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
        if (this.email === '' || this.password === '') {
            alert('All fields are required.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (this.password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        this.$router.push('/');
    },
  },
};
</script>