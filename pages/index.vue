<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Banner />
    <ScrollableMenu :menuItems="combodata" @scrollToSection="scrollToSection" />
    <main class="flex-grow">
      <section
        v-for="combo in combodata"
        :key="combo.id"
        :id="combo.data"
        class="p-8"
      >
        <h3 class="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-emerald-600">
          {{ combo.name }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/Banner.vue';
import ScrollableMenu from '~/components/ScrollableMenu.vue';

// Define a type for product items
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

// Define a type for combo data items
interface ComboData {
  id: number;
  name: string;
  data: string;
  products: Product[];
}

// Sample data
const combodata = ref<ComboData[]>([
        {
          id: 1,
          name: 'Hot Deals',
          data: 'hotdeals',
          products: [
            { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', price: '$20', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044437/l7xuyrqazfnkj4j0kmkk.png' },
            { id: 2, name: 'Chicken Sandwich', description: 'A delicious chicken sandwich.', price: '$5', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044531/fbrttmcbp5rx0cqqabja.png' },
             { id: 3, name: 'Grilled Chicken', description: 'Tender grilled chicken.', price: '$22', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044623/b98yjprdpdeuzrkp3gdd.png' },
            { id: 4, name: 'Chicken Nuggets', description: 'Crispy chicken nuggets.', price: '$6', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044699/gvn1u2l5i6mw2lfofgev.png' },
            { id: 5, name: 'Chicken Wrap', description: 'A tasty chicken wrap.', price: '$8', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046685/jdzis2scbg8esw1kavra.png' },
            { id: 6, name: 'Chicken Salad', description: 'Fresh chicken salad.', price: '$10', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046784/sljg5wnjkzm1j9xjvvhv.png' }
          ],
        },
        {
          id: 2,
          name: 'New Products',
          data: 'newproducts',
          products: [
            { id: 1, name: 'Vegan Burger', description: 'A healthy vegan burger.', price: '$10', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046883/yyhms2l6c4u5jjxjrkrf.png' },
            { id: 2, name: 'Spicy Wings', description: 'Hot and spicy wings.', price: '$7', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046958/tvgvph7l3cevx45vfam7.png' },
          { id: 3, name: 'Chicken Tenders', description: 'Crispy chicken tenders.', price: '$9', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047028/y3tmw0b1gsdlrbk5htyw.png' },
          { id: 4, name: 'BBQ Chicken', description: 'Barbecue flavored chicken.', price: '$11', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047098/fdy8jq9cozgbnhnugb2m.png' },
          { id: 5, name: 'Chicken Popcorn', description: 'Bite-sized chicken popcorn.', price: '$6', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047177/lmvfmrmg6xh7oq0csfp8.png' },
          { id: 6, name: 'Chicken Fries', description: 'Chicken fries with dip.', price: '$7', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047305/c9mf9cecui1s1vbzaajy.png' },
          { id: 7, name: 'Chicken Pizza', description: 'Pizza topped with chicken.', price: '$15', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047388/czd8pjot7y2run7jtnol.png' }
          ],
        },
        {
          id: 3,
          name: 'Combo for 1',
          data: 'combofor1',
          products: [
            { id: 1, name: 'Solo Meal', description: 'A perfect meal for one.', price: '$12', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047465/wkkhkxh9olf37nifb0b4.png' },
            { id: 2, name: 'Snack Combo', description: 'Light and quick meal.', price: '$8', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047540/voef6jdpqbsvdsbkdvle.png' },
          { id: 3, name: 'Quick Bite', description: 'A quick snack.', price: '$5', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047603/lamlz93fbxjkq7u2v2ae.png' },
          { id: 4, name: 'Mini Feast', description: 'A small feast for one.', price: '$10', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047388/czd8pjot7y2run7jtnol.png' }
          ],
        },
        {
          id: 4,
          name: 'Combo for Sharing',
          data: 'comboforsharing',
          products: [
            { id: 1, name: 'Family Pack', description: 'A meal for the whole family.', price: '$30', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046685/jdzis2scbg8esw1kavra.png' },
            { id: 2, name: 'Party Pack', description: 'Great for parties.', price: '$40', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047388/czd8pjot7y2run7jtnol.png' },
          { id: 3, name: 'Friends Pack', description: 'Perfect for friends gathering.', price: '$35', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047465/wkkhkxh9olf37nifb0b4.png' },
          { id: 4, name: 'Couple Pack', description: 'Ideal for couples.', price: '$25', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047540/voef6jdpqbsvdsbkdvle.png' },
          { id: 5, name: 'Office Pack', description: 'Great for office lunch.', price: '$50', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044699/gvn1u2l5i6mw2lfofgev.png' }
          ],
        },
        {
          id: 5,
          name: 'Fried & Roasted',
          data: 'friedandroasted',
          products: [
            { id: 1, name: 'Fried Chicken', description: 'Crispy fried chicken.', price: '$15', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046784/sljg5wnjkzm1j9xjvvhv.png' },
            { id: 2, name: 'Roasted Chicken', description: 'Juicy roasted chicken.', price: '$18', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047388/czd8pjot7y2run7jtnol.png' },
          { id: 3, name: 'Grilled Chicken Wings', description: 'Tasty grilled chicken wings.', price: '$14', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046958/tvgvph7l3cevx45vfam7.png' }
          ],
        },
        {
          id: 6,
          name: 'Rice - Burger - Pasta',
          data: 'rbp',
          products: [
            { id: 1, name: 'Cheeseburger', description: 'Delicious cheeseburger.', price: '$5', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046685/jdzis2scbg8esw1kavra.png' },
            { id: 2, name: 'Spaghetti', description: 'Italian pasta with sauce.', price: '$12', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731044531/fbrttmcbp5rx0cqqabja.png' },
          { id: 3, name: 'Chicken Alfredo', description: 'Creamy chicken alfredo pasta.', price: '$14', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046883/yyhms2l6c4u5jjxjrkrf.png' },
          { id: 4, name: 'Chicken Fried Rice', description: 'Savory chicken fried rice.', price: '$10', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731047177/lmvfmrmg6xh7oq0csfp8.png' },
          { id: 5, name: 'Beef Burger', description: 'Juicy beef burger.', price: '$7', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1731046784/sljg5wnjkzm1j9xjvvhv.png' }
          ],
        },
      ],);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

h3 {
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.section-title {
  color: #0a6e45;
  transition: color 0.3s ease;
}

.section-title:hover {
  color: #3b6f7f;
}

main {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 0.5rem;
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
