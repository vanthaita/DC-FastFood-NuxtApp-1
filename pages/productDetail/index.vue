<template>
  <Header />
  <ProductDetail
    name="Chicken Bucket"
    description="A bucket of our famous fried chicken."
    price="$20"
    imageSrc="https://via.placeholder.com/150"
    additionalDetails="Includes 10 pieces of chicken, 2 large sides, and 4 biscuits."
  />
  <Footer />
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';
import Footer from '~/components/Footer.vue';
import header from '~/components/header.vue';
export default {
  name: 'ProductDetailPage',
  components: {
    ProductDetail,
    Footer,
    header,
  },
};
</script>
