<template>
    <div class="min-h-screen flex flex-col">
    <CartList/>
    </div>
  </template>
  
  <script>
  import CartList from '~/components/cartList.vue';
  import Footer from '~/components/Footer.vue';
    import Header from '~/components/header.vue';
  
  export default {
    name: 'CartPage',
    components: {
      CartList,
    },
  };
  </script>
  