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
      'M_Light':'#AEC8FC',
      'D_Black':'#1D1D1F',
      'Red':'#CE4343',
      'D_Gray':'525252',
      'M_Gray':'#677689',
      'L_Gray':'#677689',
      'Light':'#658DF1',
      'D_Blue':'#3563E9',
      'M_Blue':'#1A37A7',
      'T-gray':'#323949',
      'C-green' : '#1DD329',
      'L_white' : '#E5EEFF'
    },
  },
  plugins: [require("daisyui")],
}

 