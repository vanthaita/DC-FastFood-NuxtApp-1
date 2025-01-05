<template>
  <div class="relative w-full h-96 overflow-hidden">
    <div
      class="flex w-full h-full transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-full flex-shrink-0 min-w-full relative"
      >
        <div
          class="bg-cover bg-center h-full w-full"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div
            class="flex items-center justify-center h-full bg-black bg-opacity-50"
          >
            <div class="text-center text-white max-w-lg px-4">
              <h1 class="text-3xl md:text-4xl font-bold mb-4">
                {{ slide.title }}
              </h1>
              <p
                class="text-lg md:text-xl mb-6 leading-relaxed text-gray-200"
              >
                {{ slide.description }}
              </p>
              <NuxtLink
                :to="slide.link"
                class="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                {{ slide.buttonText }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{
          'bg-white': activeIndex === index,
          'bg-gray-400': activeIndex !== index,
        }"
        class="w-3 h-3 rounded-full transition-colors duration-300"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { NuxtLink } from '#components';

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: 'Welcome to Our Website',
    description: 'Discover amazing products just for you.',
    buttonText: 'Shop Now',
    link: '/findkfc',
    image:
      'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964706/xqbbmm5jfpznvb6ytxi0.png',
  },
  {
    title: 'Exclusive Offers',
    description: 'Get the best deals and discounts today.',
    buttonText: 'Explore Offers',
    link: '/booking',
    image:
      'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964741/fnxuwq8gnq72uemp88sn.png',
  },
  {
    title: 'Join Our Community',
    description: 'Sign up and be a part of our growing community.',
    buttonText: 'Join Now',
    link: '/signIn',
    image:
      'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964773/ukcwkgp9b7cftdajldm0.png',
  },
];

const activeIndex = ref(0);
let autoSlide: ReturnType<typeof setInterval> | null = null;

const startAutoSlide = () => {
  if (autoSlide) clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length;
};

const goToSlide = (index: number) => {
  activeIndex.value = index;
  if (autoSlide) clearInterval(autoSlide);
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (autoSlide) clearInterval(autoSlide);
});
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>