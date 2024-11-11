<template>
  <div class="overflow-x-auto py-4 whitespace-nowrap">
    <div class="flex space-x-8 justify-center">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="text-center font-bold text-lg uppercase tracking-wider flex-shrink-0"
      >
        <a
          href="#"
          :class="{
            'text-black': item.isActive,
            'text-gray-400': !item.isActive,
            'hover:text-red-500': !item.isActive,
            'transition-colors duration-300 ease-in-out': true
          }"
          @click.prevent="handleClick(item.data)"
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

const handleClick = (sectionId: string) => {
  emit('scrollToSection', sectionId);
};
</script>

<style scoped>
a {
  transition: color 0.3s ease-in-out;
}
</style>
