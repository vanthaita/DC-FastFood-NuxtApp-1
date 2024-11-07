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
          :class="{'text-black': item.isActive, 'text-gray-400': !item.isActive, 'hover:text-red-500': !item.isActive}"
          @click.prevent="handleClick(item.data)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollableMenu',
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(sectionId) {
      this.$emit('scrollToSection', sectionId);
    },
  },
};
</script>
