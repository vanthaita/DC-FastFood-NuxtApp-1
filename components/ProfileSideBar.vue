<template>
  <div class="sidebar bg-gray-900 text-white p-6 w-1/4 min-h-screen rounded-lg shadow-lg">
    <div class="text-center mb-8">
      <img
        src="https://res.cloudinary.com/dbonwxmgl/image/upload/v1727938015/bmvfqez2etar0obzrqgt.jpg"
        alt="Profile Picture"
        class="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 shadow-md"
      />
      <h2 class="text-2xl font-semibold mt-4">Hello TLee</h2>
      <NuxtLink
        to="/SignIn"
        class="text-sm text-gray-400 underline hover:text-red-400 transition-colors duration-200 mt-1 block"
      >Logout</NuxtLink>
    </div>
    <nav>
      <ul class="space-y-2 text-lg font-medium">
        <SidebarItem title="Account Details" link="/profile/detail" :activeLink="currentPath" />
        <SidebarItem title="Previous Orders" link="/profile/previous_orders" :activeLink="currentPath" />
        <SidebarItem title="Booking Details" link="/profile/booking" :activeLink="currentPath" />
        <SidebarItem title="Your Address" link="/profile/address" :activeLink="currentPath" />
        <SidebarItem title="Reset Password" link="/profile/reset_password" :activeLink="currentPath" />
        <SidebarItem title="Delete Account" link="/profile/delete_account" :activeLink="currentPath" />
      </ul>
    </nav>
  </div>
</template>

<script>
import SidebarItem from './ProfileSideBarItem.vue';

export default {
  components: {
    SidebarItem
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>