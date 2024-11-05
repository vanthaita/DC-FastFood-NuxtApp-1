<template>
  <Header />
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <main class="flex-grow flex items-center justify-center w-5/6">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Name</label>
            <input type="text" id="name" v-model="name" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded mt-1" required>
          </div>
          <button type="submit" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Sign Up</button>
        </form>
        <p class="mt-4 text-center text-gray-600">Already have an account? <a href="/signIn" class="text-red-600 hover:underline">Sign In</a></p>
      </div>
    </main>
    <footer class="bg-gray-800 text-white w-full p-4 text-center">
      <p>&copy; 2023 KFC. All rights reserved.</p>
    </footer>
  </div>
    <Footer />
</template>

<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/header.vue';
export default {
  name: 'SignUp',
  components: {
    Footer,
    Header,
  },
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

