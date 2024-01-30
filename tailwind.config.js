/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#000428',
      'cyc': '#004E94',
      'white': '#fff',
      'bluehover':'#AEC8FC',
    },
  },
  plugins: [require("daisyui")],
}

