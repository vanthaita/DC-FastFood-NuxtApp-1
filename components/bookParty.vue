<template>
  <div class="min-h-screen flex flex-col bg-gray-100 p-6 md:p-8">
    <main class="flex-grow container mx-auto mt-6">
      <div
        class="w-full mx-auto bg-white p-4 md:p-8 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-101"
      >
        <h2
          class="text-3xl md:text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
        >
          Book a Party
        </h2>
        <div class="flex flex-col md:flex-row gap-6 md:gap-8">
          <div class="md:w-1/2">
            <div
              class="relative aspect-video rounded-xl overflow-hidden shadow-md"
            >
              <iframe
                src="https://www.youtube.com/embed/-Un8IOE_7mg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div class="md:w-1/2">
            <form @submit.prevent="submitForm">
              <div class="mb-4 relative">
                <label
                  for="name"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                  >Name <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  id="name"
                  v-model.trim="form.name"
                    placeholder="Enter your name"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.name }"
                  @input="debounceValidate('name')"
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                  {{ errors.name }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="email"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Email <span class="text-red-500">*</span></label
                >
                <input
                  type="email"
                  id="email"
                  v-model.trim="form.email"
                   placeholder="Enter your email"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.email }"
                  @input="debounceValidate('email')"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="phone"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Phone Number <span class="text-red-500">*</span></label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model.trim="form.phone"
                     placeholder="Enter your phone number"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.phone }"
                  @input="debounceValidate('phone')"
                />
                <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                  {{ errors.phone }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="date"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Party Date <span class="text-red-500">*</span></label
                >
                <input
                  type="date"
                  id="date"
                  v-model="form.date"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.date }"
                  @input="debounceValidate('date')"
                />
                <p v-if="errors.date" class="text-red-500 text-sm mt-1">
                  {{ errors.date }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="time"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Party Time <span class="text-red-500">*</span></label
                >
                <input
                  type="time"
                  id="time"
                  v-model="form.time"
                     class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.time }"
                  @input="debounceValidate('time')"
                />
                <p v-if="errors.time" class="text-red-500 text-sm mt-1">
                  {{ errors.time }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="locate"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Location <span class="text-red-500">*</span></label
                >
                <select
                  id="locate"
                  v-model="form.locate"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.locate }"
                  @change="validateField('locate')"
                >
                  <option value="" disabled>Select a location</option>
                  <option
                    v-for="location in storeAddress"
                    :key="location.id"
                    :value="location.address"
                  >
                    {{ location.name }}
                  </option>
                </select>
                 <p v-if="errors.locate" class="text-red-500 text-sm mt-1">
                  {{ errors.locate }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="guests"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                  >Number of Guests <span class="text-red-500">*</span></label
                >
                <input
                  type="number"
                  id="guests"
                  v-model="form.guests"
                  min="1"
                  placeholder="Enter number of guests"
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.guests }"
                  @input="debounceValidate('guests')"
                />
                   <p v-if="errors.guests" class="text-red-500 text-sm mt-1">
                  {{ errors.guests }}
                </p>
              </div>
              <div class="mb-4 relative">
                <label
                  for="requests"
                  class="block text-gray-700 text-sm md:text-base font-medium mb-2"
                    >Additional Requests <span class="text-red-500">*</span></label
                >
                <textarea
                  id="requests"
                  v-model.trim="form.requests"
                   placeholder="Enter any additional requests"
                     class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-100 focus:border-red-200 transition-shadow duration-200"
                  :class="{ 'border-red-500': errors.requests }"
                  @input="debounceValidate('requests')"
                ></textarea>
                  <p v-if="errors.requests" class="text-red-500 text-sm mt-1">
                  {{ errors.requests }}
                </p>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                   class="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md hover:shadow-md transition-shadow duration-200  disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="hasErrors()"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Swal from 'sweetalert2';
import { useBookingStore } from '~/store/bookingStore';
import { storeAddress } from '~/data/storeAddress';

const bookingStore = useBookingStore();

const form = reactive({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  locate: '',
  guests: 1,
  requests: '',
});

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  locate: '',
  guests: '',
  requests: '',
});
const validateField = (field: keyof typeof form) => {
  switch (field) {
    case 'name':
      errors.name = form.name.trim() ? '' : 'Name is required.';
      break;
    case 'email':
      errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? ''
        : 'Invalid email format.';
      break;
    case 'phone':
      errors.phone = /^\d{10}$/.test(form.phone)
        ? ''
        : 'Invalid phone number';
      break;
    case 'date':
      errors.date = form.date ? '' : 'Date is required';
      break;
    case 'time':
      errors.time = form.time ? '' : 'Time is required';
      break;
    case 'locate':
      errors.locate = form.locate ? '' : 'Please select a location';
      break;
    case 'guests':
      errors.guests = form.guests > 0 ? '' : 'Minimum one guest is required';
      break;
    case 'requests':
      errors.requests = form.requests.trim()
        ? ''
        : 'Additional Requests is required.';
      break;
  }
};

const hasErrors = () => {
  return Object.values(errors).some((error) => error);
};

const debouncedValidation: { [key: string]: any } = {};
const debounceValidate = (field: keyof typeof form) => {
  if (debouncedValidation[field]) clearTimeout(debouncedValidation[field]);
  debouncedValidation[field] = setTimeout(() => {
    validateField(field);
  }, 500);
};

const submitForm = () => {
  Object.keys(form).forEach((key) => {
    validateField(key as keyof typeof form);
  });
  if (hasErrors()) return;

  const newBooking = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    phone: form.phone,
    date: form.date,
    time: form.time,
    location: form.locate,
    guests: form.guests,
    requests: form.requests,
  };

  bookingStore.addBooking(newBooking);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Pleased to serve you`,
    showConfirmButton: false,
    timer: 1500,
  });
  Object.assign(form, {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    locate: '',
    guests: 1,
    requests: '',
  });
};
</script>