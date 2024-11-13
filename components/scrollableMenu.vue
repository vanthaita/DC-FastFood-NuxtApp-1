<template>
  <div class="overflow-x-auto py-0 whitespace-nowrap">
    <div class="flex space-x-8 justify-center bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-xl">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="text-center font-bold text-lg uppercase tracking-wider flex-shrink-0"
      >
        <a
          href="#"
          :class="{
            'text-black': item.isActive,
            'text-white': !item.isActive,
            'hover:text-black': !item.isActive,
            'transition-colors duration-300 ease-in-out': true
          }"
          @click.prevent="handleClick(item)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface MenuItem {
  id: number | string;
  name: string;
  data: string;
  isActive: boolean;
}

const props = defineProps<{ menuItems: MenuItem[] }>();
const emit = defineEmits<{ (e: 'scrollToSection', sectionId: string): void }>();

const handleClick = (item: MenuItem) => {
  props.menuItems.forEach(menuItem => {
    menuItem.isActive = menuItem.id === item.id;
  });
  emit('scrollToSection', item.data);
};
</script>

<style scoped>
a {
  transition: color 0.3s ease-in-out;
}
</style>