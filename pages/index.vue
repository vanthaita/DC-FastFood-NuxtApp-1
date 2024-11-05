<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-red-600 text-white p-4">
      <h1 class="text-3xl font-bold">KFC</h1>
    </header>
    <Banner />
    <main class="flex-grow">
      <section class="hero bg-cover bg-center h-96 flex items-center justify-center" style="background-image: url('path-to-your-hero-image.jpg');">
        <div class="text-center text-white">
          <h2 class="text-4xl font-bold">Welcome to KFC</h2>
          <p class="mt-4 text-lg">Finger Lickin' Good</p>
        </div>
      </section>
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
export default {
  name: 'HomePage',
  components: {
    ProductCard,
    Footer,
    Banner,
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Chicken Bucket', description: 'A bucket of our famous fried chicken.', price: '$20', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730769577/t6gmzeaj4v2tbpkkss4m.png' },
        { id: 2, name: 'Chicken Sandwich', description: 'A delicious chicken sandwich.', price: '$5', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730769577/t6gmzeaj4v2tbpkkss4m.png' },
        { id: 3, name: 'Fries', description: 'Crispy golden fries.', price: '$3', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730769577/t6gmzeaj4v2tbpkkss4m.png' },
        { id: 4, name: 'Fries Chicken', description: 'Crispy golden fries.', price: '$3', imageSrc: 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1730769577/t6gmzeaj4v2tbpkkss4m.png' },
      ],
    };
  },
};
</script>

