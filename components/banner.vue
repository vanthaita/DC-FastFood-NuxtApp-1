<template>
    <div class="relative w-full h-96 overflow-hidden">
        <div class="flex w-full h-full transition-transform duration-1000 ease-in-out" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
            <div class="w-full flex-shrink-0">
                <div class="bg-cover bg-center h-full w-full" style="background-image: url('https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964706/xqbbmm5jfpznvb6ytxi0.png')">
                    <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <div class="text-center text-white">
                            <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                            <p class="text-lg mb-6">Discover amazing products just for you.</p>
                            <nuxt-link to="/findkfc" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Shop Now</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex-shrink-0">
                <div class="bg-cover bg-center h-full w-full" style="background-image: url('https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964741/fnxuwq8gnq72uemp88sn.png')">
                    <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <div class="text-center text-white">
                            <h1 class="text-4xl font-bold mb-4">Exclusive Offers</h1>
                            <p class="text-lg mb-6">Get the best deals and discounts today.</p>
                            <nuxt-link to="/booking" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Explore Offers</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex-shrink-0">
                <div class="bg-cover bg-center h-full w-full" style="background-image: url('https://res.cloudinary.com/dbonwxmgl/image/upload/v1730964773/ukcwkgp9b7cftdajldm0.png')">
                    <div class="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <div class="text-center text-white">
                            <h1 class="text-4xl font-bold mb-4">Join Our Community</h1>
                            <p class="text-lg mb-6">Sign up and be a part of our growing community.</p>
                            <nuxt-link to="/signIn" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Join Now</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)" :class="{'bg-white': activeIndex === index, 'bg-gray-400': activeIndex !== index}" class="w-3 h-3 rounded-full"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            totalSlides: 3,
            autoSlide: null
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        clearInterval(this.autoSlide);
    },
    methods: {
        startAutoSlide() {
            this.autoSlide = setInterval(() => {
                this.nextSlide();
            }, 3000); 
        },
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.totalSlides;
        },
        goToSlide(index) {
            this.activeIndex = index;
            clearInterval(this.autoSlide);
            this.startAutoSlide();
        }
    }
};
</script>

<style scoped>
button {
    transition: background-color 0.3s ease;
}
</style>