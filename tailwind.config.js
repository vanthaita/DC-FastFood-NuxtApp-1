/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #f97316 0%, #facc15 100%)',
        'custom-radial': 'radial-gradient(circle, #f87171, #fbbf24)',
        'gradient-blue-pink': 'linear-gradient(to right, #3b82f6, #ec4899)',
        'gradient-orange-purple': 'linear-gradient(45deg, #f97316, #a855f7)',

      },
      keyframes: {
        pulseCircle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
        bounceHamburger: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-circle": "pulseCircle 2s infinite",
        "bounce-hamburger": "bounceHamburger 0.8s infinite",
      },
    },
  },
  plugins: [],
}

