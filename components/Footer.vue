<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 class="text-2xl font-bold mb-4">DC</h2>
          <p class="text-gray-400">Drunken Clam</p>
        </div>
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li class="mb-2"><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
            <li class="mb-2"><a href="/menu" class="text-gray-400 hover:text-white">Menu</a></li>
            <li class="mb-2"><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
            <li class="mb-2"><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com" target="_blank" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://youtube.com" target="_blank" class="text-gray-400 hover:text-white">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Drunken Clam. Let's drunk 🥴. Power by TLee</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
