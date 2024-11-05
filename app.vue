<template>
  <!-- <div class="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200">
    <div class="max-w-4xl p-8 bg-white rounded-lg shadow-lg text-gray-800 text-center">
      <div class="flex items-center justify-center font-extrabold text-5xl mb-6">
        <Icon name="mdi-hand-wave" size="64" class="mr-4 text-blue-500 animate-wave" />
        <span>Welcome, Jamco-san and Cydas-san!</span>
      </div>
      <p class="text-red-500 text-lg font-medium mb-4">
        Note:
      </p>
      <div class="mt-8 text-lg">
        <p class="font-semibold text-gray-700 underline">Technologies used in this project:</p>
        <ul class="list-disc list-inside text-left mt-4 space-y-2">
          <li><span class="font-semibold">Nuxt.js</span> - Main framework</li>
          <li><span class="font-semibold">TypeScript</span> - For type safety</li>
          <li><span class="font-semibold">Vue 3</span> - Using <code class="px-1 bg-gray-100 rounded">&lt;script setup&gt;</code> syntax for a modular structure, without <code class="px-1 bg-gray-100 rounded">export default</code></li>
          <li><span class="font-semibold">Tailwind CSS</span> - For styling (@nuxtjs/tailwindcss)</li>
          <li><span class="font-semibold">Nuxt Icon</span> - For icons (@nuxt/icon)</li>
          <li><span class="font-semibold">Nuxt Image</span> - Image optimization (@nuxt/image-edge, @nuxt/image)</li>
          <li><span class="font-semibold">Pinia</span> - State management (@pinia/nuxt)</li>
          <li><span class="font-semibold">Radix UI</span> (upcoming) - Additional UI components</li>
          <li><span class="font-semibold">Nuxt UI</span> (optional) - Optional UI library</li>
        </ul>
      </div>
    </div>
  </div> -->
  <div>
     <NuxtLayout>
       <NuxtPage/>
     </NuxtLayout>
  </div>
</template>
<style scoped>
.animate-wave {
  animation: wave 2s infinite;
}

@keyframes wave {
  0% { transform: rotate(0); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(0); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0); }
}
</style>
