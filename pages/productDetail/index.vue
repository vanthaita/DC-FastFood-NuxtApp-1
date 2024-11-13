<template>
  <ProductDetail :product="product" />
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';
export default {
  name: 'ProductDetailPage',
  components: {
    ProductDetail,
  },
};
</script>
