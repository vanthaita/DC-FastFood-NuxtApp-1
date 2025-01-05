<template>
  <div
    class="reset-password-container w-full md:w-3/4 p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102"
  >
    <h2
      class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
    >
      Reset Password
    </h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4 relative">
        <label
          class="block mb-2 font-medium text-gray-700"
          for="currentPassword"
          >Current Password <span class="text-red-500">*</span></label
        >
        <input
          type="password"
          id="currentPassword"
          v-model="form.currentPassword"
          class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
          required
          placeholder="Enter Current Password"
        />
      </div>
      <div class="mb-4 relative">
        <label class="block mb-2 font-medium text-gray-700" for="newPassword"
          >New Password <span class="text-red-500">*</span></label
        >
        <input
          type="password"
          id="newPassword"
          v-model="form.newPassword"
          class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
          required
          placeholder="Enter New Password"
        />
      </div>
      <div class="mb-4 relative">
        <label class="block mb-2 font-medium text-gray-700" for="confirmPassword"
          >Confirm New Password <span class="text-red-500">*</span></label
        >
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          class="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-red-200 focus:border-red-300 transition-shadow duration-200"
          required
          placeholder="Confirm New Password"
        />
      </div>
      <div v-if="errorMessage" class="mb-4 text-red-600 text-sm">
        {{ errorMessage }}
      </div>
      <button
        type="submit"
        class="mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3 font-bold px-6 rounded-md hover:bg-red-600 transition-colors duration-300 w-full"
      >
        Reset Password
      </button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.newPassword !== this.form.confirmPassword) {
        this.errorMessage = "New password and confirmation do not match.";
        return;
      }
      this.errorMessage = '';
      this.confirmResetPassword();
    },
    confirmResetPassword() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to reset your password?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetPassword();
          Swal.fire('Reset!', 'Your password has been reset.', 'success');
        }
      });
    },
    resetPassword() {
      this.form.currentPassword = '';
      this.form.newPassword = '';
      this.form.confirmPassword = '';
    }
  }
};
</script>

<style scoped>
/* No additional styles required. */
</style>