<template>
    <div class="mx-auto ">
      <div class=" shadow-lg rounded-lg mt-6 p-2 w-full ">
        <bookParty />
      </div>
    </div>
  </template>
  
  <script>
    
  import bookParty from '~/components/bookParty.vue';
  export default {
    name: 'BookPartyPage',
    components: {
      bookParty,
    },
  };
  </script>
  

  