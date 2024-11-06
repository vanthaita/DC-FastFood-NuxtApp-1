<template>
    <header class="bg-red-600 text-white py-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1730811513/a3dlu88uiel0pogi3sdz.png"
            alt="KFC Logo"
            class="h-12"
          />
          <nav class="hidden lg:flex space-x-6">
            <nuxt-link to="/" class="hover:text-gray-200">Homepage</nuxt-link>
            <nuxt-link to="/deals" class="hover:text-gray-200">Deals</nuxt-link>
            <nuxt-link to="/booking" class="hover:text-gray-200">Book a Party</nuxt-link>
            <nuxt-link to="/findkfc" class="hover:text-gray-200">Find a KFC</nuxt-link>
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <div
              @click="toggleLanguage"
              role="switch"
              :aria-checked="selectedLanguage === 'VN'"
              class="w-16 h-8 bg-white rounded-full flex items-center cursor-pointer relative transition-all duration-300"
              :class="{'bg-green-500': selectedLanguage === 'VN'}"
            >
              <div
                class="w-8 h-8 bg-gray-600 rounded-full shadow-md transition-transform duration-300 transform"
                :class="{'translate-x-full': selectedLanguage === 'VN'}"
              ></div>
              <div class="absolute inset-0 flex justify-between px-2 text-xs font-bold">
                <span :class="{'text-white': selectedLanguage === 'VN'}">EN</span>
                <span :class="{'text-white': selectedLanguage === 'EN'}">VN</span>
              </div>
            </div>
          </div>
          <nuxt-link to="/profile" class="hover:text-gray-200" aria-label="Profile">
            <img
              src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1730812166/pgvlfot3advrc9kheorc.png"
              alt="Profile"
              class="h-6 w-6"
            />
          </nuxt-link>
          <nuxt-link to="/cart" class="hover:text-gray-200 relative" aria-label="Cart">
            <img
              src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1730812260/z6rutifjregmcrcjuecx.png"
              alt="Cart"
              class="h-6 w-6"
            />
            <span
              class="absolute top-0 right-0 bg-white text-red-600 rounded-full text-xs w-3 h-3 flex items-center justify-center"
            >
              3
            </span>
          </nuxt-link>
          <sideBar />
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import sideBar from './sideBar.vue';
  export default {
    components: {
      sideBar,
    },
    data() {
      return {
        sidebarOpen: false,
        selectedLanguage: "EN",
      };
    },
    methods: {
      toggleDropdown(dropdown) {
        this[dropdown] = !this[dropdown];
      },
      toggleLanguage() {
        this.selectedLanguage = this.selectedLanguage === "EN" ? "VN" : "EN";
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  /* Transition for smoother sliding effect */
  .w-16 {
    transition: background-color 0.3s ease-in-out;
  }
  
  .w-8 {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  