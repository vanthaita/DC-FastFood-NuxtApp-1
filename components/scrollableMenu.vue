<template>
  <div class="overflow-x-auto whitespace-nowrap">
    <div
      class="flex justify-start items-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-b-xl p-2"
      role="tablist"
    >
      <div
        v-for="item in menuItems"
        :key="item.id"
      >
        <a
          href="#"
          role="tab"
          :aria-selected="item.isActive"
          class="px-4 py-2 rounded-xl transition-all duration-300 ease-in-out focus:outline-none inline-block min-w-fit relative text-gray-100 font-medium shadow-sm hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          :class="{
            'bg-gray-100 text-gray-900': item.isActive,
            'hover:bg-gray-200 hover:text-gray-900': !item.isActive,
             'active-tab': item.isActive,
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
import type { PropType } from 'vue';

interface MenuItem {
  id: number | string;
  name: string;
  data: string;
  isActive: boolean;
}

const props = defineProps({
    menuItems: {
        type: Array as PropType<MenuItem[]>,
        required: true,
    },
});
const emit = defineEmits<{ (e: 'scrollToSection', sectionId: string): void }>();


const handleClick = (item: MenuItem) => {
  props.menuItems.forEach(menuItem => {
    menuItem.isActive = menuItem.id === item.id;
  });
  emit('scrollToSection', item.data);
};
</script>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
    height: 5px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
   background-color: #9ca3af;
     border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background-color: #6b7280;
}
.overflow-x-auto {
     scrollbar-width: thin;
    scrollbar-color: #6b7280 #f1f1f1;
}

.active-tab {
    border-image: linear-gradient(to right, #F97316, #EC4899, #EF4444) 1;
    border-bottom-width: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>