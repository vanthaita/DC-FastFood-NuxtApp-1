<template>
  <div class="min-h-screen flex flex-col p-4 bg-gray-100 pb-10">
    <main class="flex-grow container mx-auto mt-8">
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden">
        <h2
          class="text-4xl text-center font-extrabold mb-8 py-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
        >
          Find DC Near You
        </h2>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/4 border-r border-gray-200">
            <div class="overflow-y-auto">
              <TableListAddress @address-selected="updateSearchAddress" />
            </div>
          </div>
          <div class="md:w-3/4 p-8">
            <div class="mb-8">
              <form @submit.prevent="updateMap" class="relative">
                <label for="address" class="sr-only">Enter your address:</label>
                <div class="relative">
                  <input
                    type="text"
                    id="address"
                    v-model="searchAddress"
                    placeholder="Enter address or location"
                    class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-300 focus:border-red-300 text-gray-700 pr-16"
                    required
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 px-4 py-2 rounded-lg hover:shadow-lg transition-shadow focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div class="mb-8 p-4 bg-gray-50 border rounded-md shadow-inner">
              <h3 class="text-lg font-bold text-gray-700 mb-2">
                Selected Address:
              </h3>
              <p v-if="selectedAddress" class="text-gray-800">
                {{ selectedAddress }}
              </p>
              <p v-else class="text-gray-500">No address selected.</p>
            </div>
            <div class="h-[600px] w-full relative rounded-lg overflow-hidden">
              <div id="map" class="h-full w-full z-[9999]"></div>
            </div>
            <div v-if="error" class="mt-4 text-red-600 text-center">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import TableListAddress from './tableListAddress.vue';
import loading from '~/components/loading.vue';

const searchAddress = ref('');
const selectedAddress = ref('');
const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);
const error = ref<string | null>(null);
const isLoading = ref(false);

onMounted(() => {
    if (process.client) {
        initializeMap();
    }
});

const initializeMap = () => {
    if(process.client) {
      map.value = L.map('map').setView([10.8231, 106.6297], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.value as L.Map);
      marker.value = L.marker([10.8231, 106.6297]).addTo(map.value as L.Map);
    }
};

const updateMap = async () => {
    if (searchAddress.value.trim()) {
        isLoading.value = true;
        selectedAddress.value = searchAddress.value;
        try {
            const geocodedLocation = await geocodeAddress(searchAddress.value);

            if (geocodedLocation && map.value) {
                const { lat, lon } = geocodedLocation;
                map.value.setView([lat, lon], 15);
                 if(marker.value) {
                  marker.value.setLatLng([lat, lon]);
                   marker.value
                      .bindPopup(`<b>Selected Location:</b><br>${selectedAddress.value}`)
                      .openPopup();
                 }

                error.value = null;
            } else {
                error.value = 'Location not found. Please try again.';
            }
        } catch (err) {
            error.value = 'An error occurred. Please try again later.';
        } finally {
           isLoading.value = false;
        }
    }
     searchAddress.value = '';
};

const geocodeAddress = async (address: string) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            address
        )}&addressdetails=1&limit=1`
    );
    const data = await response.json();

    if (data && data.length > 0) {
        const { lat, lon } = data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
    }
    return null;
};

const updateSearchAddress = (address: string) => {
   searchAddress.value = address;
   updateMap();
};
</script>

<style scoped>
#map {
  height: 100%;
}
</style>