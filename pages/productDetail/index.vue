<template>
  <ProductDetail
    name="Chicken Bucket"
    description="A bucket of our famous fried chicken."
    price="$20"
    imageSrc="https://res.cloudinary.com/dbonwxmgl/image/upload/v1730756482/gqvh79lkxfomf90nmysi.png"
    additionalDetails="Includes 10 pieces of chicken, 2 large sides, and 4 biscuits."
  />
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
