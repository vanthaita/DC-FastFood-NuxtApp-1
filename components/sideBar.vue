<template>
    <div>
      <div 
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        v-if="isOpen"
        @click="toggleSidebar"
      ></div>
      <div 
        class="fixed top-0 left-0 w-2/6 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="p-4 flex justify-between items-center bg-red-600 text-white">
          <h3 class="text-lg font-bold">DC Menu</h3>
          <button @click="toggleSidebar" class="text-2xl">&times;</button>
        </div>
  
        <ul class="mt-4">
          <li v-for="item in navdata" :key="item.name" class="p-4 border-b">
            <NuxtLink :to="item.link" class="hover:text-red-600 text-gray-700">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <button
        class="fixed top-4 right-4 bg-red-600 text-white text-xl px-4 py-2 rounded z-50"
        @click="toggleSidebar"
      >
        ☰ Menu
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        navdata: [
          { name: 'Chicken', link: '/chicken' },
          { name: 'Burgers', link: '/burgers' },
          { name: 'Drinks', link: '/drinks' },
          { name: 'Sides', link: '/sides' },
          { name: 'Desserts', link: '/desserts' }
        ]
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  