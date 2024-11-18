<template>
    <div>
      <h2 class="text-4xl text-center font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-red-500">Gallery</h2>
      <p class="text-xl text-center font-bold text-gray-500 mb-10">Some photos from Our Drunken Clam </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          @click="openModal(index)"
        >
          <nuxt-img
            :src="img"
            alt="Gallery Image"
            class="w-full h-auto rounded-lg"
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
            class="absolute top-2 right-2 bg-white text-gray-700 p-2 rounded-full shadow-lg"
            @click="closeModal"
          >
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            @click="prevImage"
          >
            &larr;
          </button>
          <img
            :src="images[currentImage]"
            alt="Modal Image"
            class="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 font-bold rounded-full shadow-lg"
            @click="nextImage"
          >
            &rarr;
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
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/huhagtnn9ridkikvx0uh.png",
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/qbs3oln1mxvbqtcqyatf.png",
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/mnnrnh1b7c9csptvg3uj.png",
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898100/tkd6emhdfeshq5aqco8f.png",
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898114/ibzlsz3vldyk9ispqbl1.png",
        "https://res.cloudinary.com/dbonwxmgl/image/upload/v1731898114/vk80hoh6tjwf4rph2qhw.png",
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


  