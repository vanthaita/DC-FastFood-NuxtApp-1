<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="bg-white mt-16 shadow-lg rounded-lg w-full h-full p-2">
        <findAddress />
      </div>
    </div>
  </template>
  
  <script>
  import findAddress from '~/components/findAddress.vue';
  import tableListAddress from '~/components/tableListAddress.vue';
  export default {
    name: 'FindKFCPage',
    components: {
      findAddress,
        tableListAddress,
    },
  };
  </script>
  