<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Header />
    <Banner />
    <ScrollableMenu :menuItems="combodata" @scrollToSection="scrollToSection" />
    <main class="flex-grow">
      <section
        v-for="combo in combodata"
        :key="combo.id"
        :id="combo.data"
        class="p-8"
      >
        <h3 class="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-gray-400">{{ combo.name }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-16">
          <ProductCard
            v-for="item in combo.products"
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
import Header from '~/components/header.vue';

export default {
  name: 'HomePage',
  components: {
    ProductCard,
    Footer,
    Banner,
    ScrollableMenu,
    Header,
  },
  data() {
    return {
      combodata: [
        {
          id: 1,
          name: 'Hot Deals',
          data: 'hotdeals',
          products: [
            { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', price: '$20', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Chicken Sandwich', description: 'A delicious chicken sandwich.', price: '$5', imageSrc: 'https://via.placeholder.com/150' },
             { id: 3, name: 'Grilled Chicken', description: 'Tender grilled chicken.', price: '$22', imageSrc: 'https://via.placeholder.com/150' },
            { id: 4, name: 'Chicken Nuggets', description: 'Crispy chicken nuggets.', price: '$6', imageSrc: 'https://via.placeholder.com/150' },
            { id: 5, name: 'Chicken Wrap', description: 'A tasty chicken wrap.', price: '$8', imageSrc: 'https://via.placeholder.com/150' },
            { id: 6, name: 'Chicken Salad', description: 'Fresh chicken salad.', price: '$10', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
        {
          id: 2,
          name: 'New Products',
          data: 'newproducts',
          products: [
            { id: 1, name: 'Vegan Burger', description: 'A healthy vegan burger.', price: '$10', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Spicy Wings', description: 'Hot and spicy wings.', price: '$7', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Chicken Tenders', description: 'Crispy chicken tenders.', price: '$9', imageSrc: 'https://via.placeholder.com/150' },
          { id: 4, name: 'BBQ Chicken', description: 'Barbecue flavored chicken.', price: '$11', imageSrc: 'https://via.placeholder.com/150' },
          { id: 5, name: 'Chicken Popcorn', description: 'Bite-sized chicken popcorn.', price: '$6', imageSrc: 'https://via.placeholder.com/150' },
          { id: 6, name: 'Chicken Fries', description: 'Chicken fries with dip.', price: '$7', imageSrc: 'https://via.placeholder.com/150' },
          { id: 7, name: 'Chicken Pizza', description: 'Pizza topped with chicken.', price: '$15', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
        {
          id: 3,
          name: 'Combo for 1',
          data: 'combofor1',
          products: [
            { id: 1, name: 'Solo Meal', description: 'A perfect meal for one.', price: '$12', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Snack Combo', description: 'Light and quick meal.', price: '$8', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Quick Bite', description: 'A quick snack.', price: '$5', imageSrc: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Mini Feast', description: 'A small feast for one.', price: '$10', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
        {
          id: 4,
          name: 'Combo for Sharing',
          data: 'comboforsharing',
          products: [
            { id: 1, name: 'Family Pack', description: 'A meal for the whole family.', price: '$30', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Party Pack', description: 'Great for parties.', price: '$40', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Friends Pack', description: 'Perfect for friends gathering.', price: '$35', imageSrc: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Couple Pack', description: 'Ideal for couples.', price: '$25', imageSrc: 'https://via.placeholder.com/150' },
          { id: 5, name: 'Office Pack', description: 'Great for office lunch.', price: '$50', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
        {
          id: 5,
          name: 'Fried & Roasted',
          data: 'friedandroasted',
          products: [
            { id: 1, name: 'Fried Chicken', description: 'Crispy fried chicken.', price: '$15', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Roasted Chicken', description: 'Juicy roasted chicken.', price: '$18', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Grilled Chicken Wings', description: 'Tasty grilled chicken wings.', price: '$14', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
        {
          id: 6,
          name: 'Rice - Burger - Pasta',
          data: 'rbp',
          products: [
            { id: 1, name: 'Cheeseburger', description: 'Delicious cheeseburger.', price: '$5', imageSrc: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Spaghetti', description: 'Italian pasta with sauce.', price: '$12', imageSrc: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Chicken Alfredo', description: 'Creamy chicken alfredo pasta.', price: '$14', imageSrc: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Chicken Fried Rice', description: 'Savory chicken fried rice.', price: '$10', imageSrc: 'https://via.placeholder.com/150' },
          { id: 5, name: 'Beef Burger', description: 'Juicy beef burger.', price: '$7', imageSrc: 'https://via.placeholder.com/150' }
          ],
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
