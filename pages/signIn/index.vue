<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-bisque to-white">
    <div class="flex flex-col items-center justify-center flex-grow p-6 md:p-8">
      <main
        class="flex items-center justify-between w-full max-w-6xl gap-4 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-101"
      >
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044437/l7xuyrqazfnkj4j0kmkk.png"
            alt="poster"
            class="w-full h-auto md:h-96 object-cover rounded-lg"
          />
        </div>
        <div class=" p-6 md:p-10 w-full md:w-1/2">
          <h2 class="text-2xl md:text-3xl text-red-600 font-bold mb-6 text-center">
            Sign In to Your Account
          </h2>
          <form @submit.prevent="handleSubmit">
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
              Sign In
            </button>
          </form>
          <p class="mt-4 text-center text-gray-600">
            <a
              href="#"
              @click="showForgotPasswordPopup"
              class="text-red-600 hover:underline hover:text-red-700 transition-colors"
              >Forgot Password?</a
            >
          </p>
          <ForgotPassword ref="forgotPasswordPopup" />

          <p class="mt-4 text-center text-gray-600">
            Don't have an account?
            <NuxtLink
              to="/signUp"
              class="text-red-600 hover:underline hover:text-red-700 transition-colors"
              >Sign Up</NuxtLink
            >
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ForgotPassword from '../../components/forgotPassword.vue';
import { ref } from 'vue';
import Swal from 'sweetalert2';
export default {
  name: 'SignIn',
  components: {
    ForgotPassword,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup() {
    const forgotPasswordPopup = ref(null);
    const showForgotPasswordPopup = () => {
      console.log(forgotPasswordPopup.value);
      if (forgotPasswordPopup.value) {
        forgotPasswordPopup.value.showPopup();
      }
    };

    return {
      showForgotPasswordPopup,
      forgotPasswordPopup,
    };
  },
  methods: {
    handleSubmit() {
      if (this.email === '' || this.password === '') {
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