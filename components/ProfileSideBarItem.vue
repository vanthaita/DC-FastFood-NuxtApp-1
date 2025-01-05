<template>
  <li class="relative">
    <NuxtLink
      v-if="title !== 'Delete Account'"
      :to="link"
      class="group flex items-center py-2 px-4 rounded-md transition-colors w-full hover:bg-gray-800 hover:text-red-400"
      :class="{ 'bg-gray-800 text-red-400 font-semibold': isActive }"
       @mouseover="handleHover"
      @mouseleave="handleLeave"
    >
      <span class="flex-1">{{ title }}</span>
      <span class="ml-2 transition-transform transform group-hover:rotate-90 duration-200" v-if="!isActive">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
       </span>
       <span class="ml-2 transition-transform transform group-hover:rotate-90 duration-200" v-else>
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M15.31 16.11a.75.75 0 0 1-.75.75H6.31a.75.75 0 0 1 0-1.5h8.25a.75.75 0 0 1 .75.75v0Zm-4.81 2.25a.75.75 0 0 1-.75.75H6.31a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 .75.75v0Zm-.45-3.59a.75.75 0 0 1 .74-.75h4.16a.75.75 0 0 1 0 1.5h-4.16a.75.75 0 0 1-.75-.75v0ZM19.37 4.8a.75.75 0 0 1 .74-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v0Zm-1.78 2.25a.75.75 0 0 1 .74-.75h.44a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1-.75-.75v0Zm-2.69 2.25a.75.75 0 0 1 .74-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v0Zm1.39-4.21a.75.75 0 0 1 .75.75v7.69a.75.75 0 0 1-1.5 0V7.84a.75.75 0 0 1 .75-.74v0ZM12.4 6.8a.75.75 0 0 1 .74-.75h1.25a.75.75 0 0 1 0 1.5H13.15a.75.75 0 0 1-.75-.75v0Z" clip-rule="evenodd" />
           </svg>
       </span>
    </NuxtLink>
    <button
      v-else
      @click="confirmDeleteAccount"
      class="group flex items-center py-2 px-4 rounded-md transition-colors w-full text-left hover:bg-gray-800 hover:text-red-400"
      :class="{ 'bg-gray-800 text-red-400 font-semibold': isActive }"
      @mouseover="handleHover"
      @mouseleave="handleLeave"
    >
      <span class="flex-1">{{ title }}</span>
      <span class="ml-2 transition-transform transform group-hover:rotate-90 duration-200" v-if="!isActive">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
       </span>
      <span class="ml-2 transition-transform transform group-hover:rotate-90 duration-200" v-else>
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M15.31 16.11a.75.75 0 0 1-.75.75H6.31a.75.75 0 0 1 0-1.5h8.25a.75.75 0 0 1 .75.75v0Zm-4.81 2.25a.75.75 0 0 1-.75.75H6.31a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 .75.75v0Zm-.45-3.59a.75.75 0 0 1 .74-.75h4.16a.75.75 0 0 1 0 1.5h-4.16a.75.75 0 0 1-.75-.75v0ZM19.37 4.8a.75.75 0 0 1 .74-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v0Zm-1.78 2.25a.75.75 0 0 1 .74-.75h.44a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1-.75-.75v0Zm-2.69 2.25a.75.75 0 0 1 .74-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v0Zm1.39-4.21a.75.75 0 0 1 .75.75v7.69a.75.75 0 0 1-1.5 0V7.84a.75.75 0 0 1 .75-.74v0ZM12.4 6.8a.75.75 0 0 1 .74-.75h1.25a.75.75 0 0 1 0 1.5H13.15a.75.75 0 0 1-.75-.75v0Z" clip-rule="evenodd" />
           </svg>
       </span>
    </button>
  </li>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    activeLink: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    isActive() {
      return this.link === this.activeLink;
    }
  },
  methods: {
    handleHover() {
      this.isHovered = true;
    },
    handleLeave() {
      this.isHovered = false;
    },
    confirmDeleteAccount() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete your account?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/signIn');
          Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
        }
      });
    }
  }
};
</script>