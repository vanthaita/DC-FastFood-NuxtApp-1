<template>
    <div class="min-h-screen flex flex-col h-full">
      <main class="flex-grow container mx-auto mt-8 h-full">
        <div class="mx-auto bg-white p-4 shadow-lg rounded-lg">
          <h2 class="text-2xl font-bold mb-6 text-center text-red-600">Find KFC Near You</h2>
        <div class="flex flex-wrap gap-2 justify-between">
            <div class="w-2/6">
       <tableListAddress />
       </div>
        <div class="w-3/6">
            <div class="mb-8">
            <form @submit.prevent="updateMap">
              <label for="address" class="block text-gray-700 mb-2">Enter your address:</label>
              <div class="relative">
                <input
                  type="text"
                  id="address"
                  v-model="searchAddress"
                  placeholder="Enter address or location"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
                <button
                  type="submit"
                  class="absolute right-1 top-1/2 transform -translate-y-1/2 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="mb-4">
            <h3 class="text-lg font-bold">Selected Address:</h3>
            <p v-if="selectedAddress">{{ selectedAddress }}</p>
            <p v-else class="text-gray-500">No address selected.</p>
          </div>
          <div id="map" class="h-96 w-full rounded-lg"></div>
          <div v-if="error" class="mt-4 text-red-600 text-center">
            <p>{{ error }}</p>
          </div>
        </div>
        </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import tableListAddress from './tableListAddress.vue';
  export default {
    components: {
      tableListAddress,
    },
    data() {
      return {
        searchAddress: '',
        selectedAddress: '',
        map: null,
        marker: null,
        error: null,
      };
    },
    mounted() {
      if (process.client) {
        this.initializeMap();
      }
    },
    methods: {
      initializeMap() {
        this.map = L.map('map').setView([10.8231, 106.6297], 13); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
        this.marker = L.marker([51.505, -0.09]).addTo(this.map);
      },
      async updateMap() {
        if (this.searchAddress.trim()) {
          this.selectedAddress = this.searchAddress;
          try {
            const geocodedLocation = await this.geocodeAddress(this.searchAddress);
  
            if (geocodedLocation) {
              const { lat, lon } = geocodedLocation;
              this.map.setView([lat, lon], 15);
              this.marker.setLatLng([lat, lon]);
              this.marker.bindPopup(`<b>Selected Location:</b><br>${this.selectedAddress}`).openPopup();
              this.error = null;
            } else {
              this.error = 'Location not found. Please try again.';
            }
          } catch (error) {
            this.error = 'An error occurred. Please try again later.';
          }
        }
      },
      async geocodeAddress(address) {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&addressdetails=1&limit=1`
        );
        const data = await response.json();
  
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          return { lat: parseFloat(lat), lon: parseFloat(lon) };
        }
        return null;
      },
    },
  };
  </script>
  
  <style scoped>
  #map {
    height: 400px;
    border-radius: 8px;
  }
  </style>
  