<template>
  <div class="gallery-container p-6 md:p-8">
    <h2
      class="text-3xl md:text-4xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500"
    >
      Gallery
    </h2>
    <p
      class="text-xl text-center font-semibold text-gray-700 mb-8"
    >
      Some photos from Our Drunken Clam
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="cursor-pointer rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-101"
        @click="openModal(index)"
      >
        <NuxtImg
          :src="img"
          alt="Gallery Image"
          class="w-full h-auto rounded-lg object-cover aspect-video"
          width="300"
          height="200"
        />
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70"
      @click.self="closeModal"
    >
      <div class="relative bg-white p-6 rounded-lg max-w-4xl w-full">
          <button
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full text-2xl font-bold shadow-md transition-colors duration-200 hover:bg-gray-200"
            @click="prevImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <img
            :src="images[currentImage]"
            alt="Modal Image"
            class="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg transform transition-all duration-300 hover:scale-101"
          />
        <button
           class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full text-2xl font-bold shadow-md transition-colors duration-200 hover:bg-gray-200"
            @click="nextImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      currentImage: 0,
      images: [
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/huhagtnn9ridkikvx0uh.png',
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/qbs3oln1mxvbqtcqyatf.png',
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/mnnrnh1b7c9csptvg3uj.png',
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/tkd6emhdfeshq5aqco8f.png',
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898114/ibzlsz3vldyk9ispqbl1.png',
        'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898114/vk80hoh6tjwf4rph2qhw.png',
      ],
    };
  },
  methods: {
    openModal(index) {
      this.currentImage = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        this.currentImage === 0 ? this.images.length - 1 : this.currentImage - 1;
    },
  },
};
</script>

<style scoped>
.gallery-container {
  margin-bottom: 4rem;
}

.grid {
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>