<template>
    <div class="relative w-full h-96 overflow-hidden">
      <div
        class="flex w-full h-full transition-transform duration-1000 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 min-w-full">
          <div class="flex flex-col items-center justify-center h-full bg-white p-8">
            <img
              :src="testimonial.avatar"
              alt="Avatar"
              class="w-20 h-20 rounded-full mb-4 shadow-lg"
            />
            <h2 class="text-2xl font-semibold mb-2">{{ testimonial.name }}</h2>
            <p class="italic text-gray-700 text-center mb-4">"{{ testimonial.message }}"</p>
            <span class="text-sm text-gray-500">{{ testimonial.role }}</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          @click="goToSlide(index)"
          :class="{
            'bg-red-500': activeIndex === index,
            'bg-gray-400': activeIndex !== index
          }"
          class="w-3 h-3 rounded-full transition-colors duration-300"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  interface Testimonial {
    name: string;
    message: string;
    role: string;
    avatar: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "カイドウ",
      message: "Drinking sake with food at this restaurant is really delicious. I'll open a shop in Onigashima !",
      role: "Kaidou of the Beasts",
      avatar: "https://res.cloudinary.com/dbonwxmgl/image/upload/v1719120844/gdfgqtutjv2lteatix5d.jpg",
    },
    {
      name: "モンキー・Dディー・ガープ",
      message: "I ate chicken at this restaurant before going to deal with Blackbeard.",
      role: "Marine Vice Admiral",
      avatar: "https://res.cloudinary.com/dbonwxmgl/image/upload/v1718817087/z4nt0sdjlvhi3an5nqzz.jpg",
    },
    {
      name: "ロロノア・ゾロ",
      message: "I got lost and ended up at this restaurant. The chicken here is really delicious. That guy Sanji could definitely make chicken this good too.",
      role: "Pirate Hunter",
      avatar: "https://res.cloudinary.com/dbonwxmgl/image/upload/v1718873734/zkzfapfwda9uglxrlqnr.jpg",
    },
  ];
  
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
  