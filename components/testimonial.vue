<template>
  <div
    class="relative w-full h-auto bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-12"
  >
    <div class="text-center mb-10">
      <h2 class="text-2xl md:text-3xl font-bold text-white mt-2">
        What they're saying about us
      </h2>
    </div>
    <div class="flex w-full overflow-hidden relative">
      <div
        class="flex w-full transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="w-full min-w-full flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 p-6"
        >
          <div class="flex-shrink-0">
            <img
              :src="testimonial.image"
              alt="Testimonial Highlight"
              class="w-72 h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div
            class="bg-red-400 text-white p-6 md:p-8 rounded-lg shadow-md max-w-lg transform transition-all duration-300 hover:scale-101"
          >
            <p class="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
              “
            </p>
            <p class="text-base md:text-lg italic text-gray-200 mb-4">
              {{ testimonial.message }}
            </p>
            <p class="text-3xl md:text-4xl font-bold text-yellow-500 mt-4 text-right">
              ”
            </p>
            <div class="flex items-center mt-6">
              <img
                :src="testimonial.avatar"
                alt="Avatar"
                class="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-gray-700 shadow-md"
              />
              <div class="ml-4">
                <h4 class="font-semibold text-lg text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-sm text-gray-300">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(testimonial, index) in testimonials"
        :key="index"
        @click="goToSlide(index)"
        :class="{
          'bg-yellow-500': activeIndex === index,
          'bg-gray-500': activeIndex !== index,
        }"
        class="w-3 h-3 rounded-full transition-colors duration-300"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTestimonialStore } from '~/store/useTestimonialStore';

const testimonialStore = useTestimonialStore();
const testimonials = testimonialStore.testimonials;

const activeIndex = ref(0);
let autoSlide: ReturnType<typeof setInterval> | null = null;

const startAutoSlide = () => {
  if (autoSlide) clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 5000);
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length;
};

const goToSlide = (index: number) => {
  activeIndex.value = index;
  if (autoSlide) clearInterval(autoSlide);
  startAutoSlide();
};

onMounted(() => {
  testimonialStore.loadTestimonialsFromLocalStorage();
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (autoSlide) clearInterval(autoSlide);
});
</script>