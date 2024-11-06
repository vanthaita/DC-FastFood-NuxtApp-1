<template>
    <div class="bg-white p-6 shadow-lg rounded-lg mt-6">
      <h3 class="text-xl font-bold text-center mb-4 text-red-600">KFC Locations in HCM</h3>
      <ul>
        <li
          v-for="(location, index) in kfcLocations"
          :key="index"
          class="mb-4 p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-100 rounded-lg"
          @click="selectAddress(location)"
        >
          <h4 class="font-semibold text-lg text-gray-800">{{ location.name }}</h4>
          <p class="text-gray-600">{{ location.address }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        kfcLocations: [
          { name: "KFC Nguyễn Thái Học", address: "83 Nguyễn Thái Học, P. Cầu Ông Lãnh, Q.1" },
          { name: "KFC Phạm Hồng Thái", address: "136 Phạm Hồng Thái, Q.1" },
          { name: "KFC Lê Hồng Phong", address: "208 Lê Hồng Phong, P.10, Q.10" },
          { name: "KFC Trường Chinh", address: "40 Trường Chinh, Q.Tân Bình" },
          { name: "KFC Cộng Hòa", address: "268 Cộng Hòa, Q.Tân Bình" },
          { name: "KFC Phú Nhuận", address: "267 Phan Đăng Lưu, Q.Phú Nhuận" },
          { name: "KFC Quận 2", address: "231 Đường Nguyễn Thị Định, Q.2" },
        ],
      };
    },
    methods: {
      selectAddress(location) {
        this.$emit('address-selected', location);
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  