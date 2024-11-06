<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Banner />
    <ScrollableMenu :menuItems="combodata" />
    <main class="flex-grow">
      <section class="p-8">
        <h3 class="text-2xl font-bold mb-4">Our Menu</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
          <ProductCard
            v-for="item in menuItems"
            :key="item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :imageSrc="item.imageSrc"
          />
        </div>
      </section>
    </main>
   <Footer />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/banner.vue';
import ScrollableMenu from '~/components/scrollableMenu.vue';
import header from '~/components/header.vue';
export default {
  name: 'HomePage',
  components: {
    ProductCard,
    Footer,
    Banner,
    ScrollableMenu,
    header,
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', price: '$20', imageSrc: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Chicken Sandwich', description: 'A delicious chicken sandwich.', price: '$5', imageSrc: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Fries', description: 'Crispy golden fries.', price: '$3', imageSrc: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Fries Chicken', description: 'Crispy golden fries.', price: '$3', imageSrc: 'https://via.placeholder.com/150' },
      ],
      combodata: [
  { id: 1, name: 'Hot Deals', isActive: false },
  { id: 2, name: 'New Products', isActive: false },
  { id: 3, name: 'Combo for 1', isActive: false },
  { id: 4, name: 'Combo for Sharing', isActive: false },
  { id: 5, name: 'Fried & Roasted', isActive: false },
  { id: 6, name: 'Rice - Burger - Pasta', isActive: false },
],
    };
  },
};
</script>

