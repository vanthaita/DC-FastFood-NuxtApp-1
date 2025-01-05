<template>
  <div>
    <loading v-if="isLoading" />
    <div
      v-else
      class="p-6 md:p-8 bg-white mx-auto shadow-lg rounded-lg transform transition-all duration-300 hover:scale-101"
    >
      <h2
        class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
      >
        We Value Your Feedback!
      </h2>
      <p class="text-xl text-center font-semibold text-gray-700 mb-8">
        Share your experience with us and help us improve our service.
      </p>

      <div class="flex w-full flex-col md:flex-row gap-6 md:gap-8">
        <form @submit.prevent="submitFeedback" class="space-y-6 md:w-1/2">
          <div class="relative">
            <label for="name" class="block text-gray-700 font-medium mb-2"
              >Your Name</label
            >
            <input
              v-model="newTestimonial.name"
              type="text"
              id="name"
                placeholder="Enter your name"
              class="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
              required
            />
          </div>
          <div class="relative">
            <label for="message" class="block text-gray-700 font-medium mb-2"
              >Your Feedback</label
            >
            <textarea
              v-model="newTestimonial.message"
              id="message"
                 placeholder="Write your feedback"
              class="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
              required
            ></textarea>
          </div>
          <div class="relative">
            <label for="role" class="block text-gray-700 font-medium mb-2"
              >Your Role</label
            >
            <input
              v-model="newTestimonial.role"
              type="text"
              id="role"
                placeholder="E.g., Loyal Customer"
              class="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
              required
            />
          </div>
          <div class="relative">
            <label for="image" class="block text-gray-700 font-medium mb-2"
              >Image URL</label
            >
            <select
              id="image"
              v-model="newTestimonial.image"
              class="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
              required
            >
              <option value="" disabled>Select desired dishes feedback !</option>
              <option
                v-for="product in products"
                :key="product.id"
                :value="product.imageSrc"
              >
                {{ product.name }}
              </option>
            </select>
          </div>
           <div class="text-center">
             <button
                type="submit"
                 class="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                Submit Feedback
              </button>
            </div>
        </form>

        <div
          v-if="testimonials.length"
          class="md:w-1/2 max-h-[600px] overflow-y-auto p-4"
        >
          <ul class="space-y-4">
            <li
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.name"
              class="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
            >
              <p class="text-lg font-semibold text-red-600 mb-2">
                {{ testimonial.name }}
              </p>
              <p class="text-gray-700 italic mb-4">"{{ testimonial.message }}"</p>
              <p class="text-sm text-gray-500">
                - {{ testimonial.role || 'Customer' }}
              </p>
                <button
              v-if="!isDefaultTestimonial(testimonial)"
              @click="handleDeleteTestimonial(testimonial.name)"
              class="mt-4 text-white bg-red-300 p-2 rounded-md hover:bg-red-500 transition-colors duration-200"
            >
              Delete
            </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTestimonialStore } from '~/store/useTestimonialStore';
import Swal from 'sweetalert2';
import { combodata } from '~/data/combodata';
import loading from '~/components/loading.vue';
const testimonialStore = useTestimonialStore();
const { testimonials } = storeToRefs(testimonialStore);
const {
  addTestimonial,
  loadTestimonialsFromLocalStorage,
  deleteTestimonial: storeDeleteTestimonial,
} = testimonialStore;
const defaultAvatar =
  'https://res.cloudinary.com/dbonwxmgl/image/upload/v1727938015/bmvfqez2etar0obzrqgt.jpg';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const newTestimonial = ref({
  name: '',
  message: '',
  role: '',
  avatar: defaultAvatar,
  image: '',
});

const validateMessage = () => {
  if (newTestimonial.value.message.length < 50) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Feedback',
        text: 'Your feedback must be at least 50 characters long.',
        confirmButtonColor: '#d33'
      });
    return false;
  }
  return true;
};

const submitFeedback = async () => {
    if (!validateMessage()) {
        return;
    }
  try {
    addTestimonial({ ...newTestimonial.value });
    newTestimonial.value = {
      name: '',
      message: '',
      role: '',
      avatar: defaultAvatar,
      image: '',
    };
    await Swal.fire({
      icon: 'success',
      title: 'Feedback Submitted!',
      text: 'Thank you for sharing your experience with us.',
    });
  } catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong, please try again.',
    });
  }
};
const products = computed(() => combodata.flatMap((combo) => combo.products));

const handleDeleteTestimonial = async (name: string) => {
  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this feedback?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      testimonialStore.deleteTestimonial(name);
      Swal.fire('Deleted!', 'The feedback has been deleted.', 'success');
    }
  } catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong, please try again.',
    });
  }
};

const isDefaultTestimonial = (testimonial: any) => {
  return (
    testimonial.name === 'カイドウ' ||
    testimonial.name === 'モンキー・Dディー・ガープ' ||
    testimonial.name === 'ロロノア・ゾロ'
  );
};

onMounted(() => {
  loadTestimonialsFromLocalStorage();
});
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>