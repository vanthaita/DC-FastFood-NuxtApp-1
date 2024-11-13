<template>
    <div class="min-h-screen flex flex-col">
    <CartList/>
    </div>
  </template>
  
  <script>
  import CartList from '~/components/cartList.vue';
  
  export default {
    name: 'CartPage',
    components: {
      CartList,
    },
  };
  </script>
  