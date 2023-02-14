/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MainPurple: {
         1:'#8789C8',
         2:'rgba(135, 137, 200, 0.29)',
         3:'rgba(135, 137, 200, 0.63)'
        },
        MainGreen: {
          1: "#4B9D9C",
          2:'rgba(123, 190, 200, 0.53)',
      },
        MainYellow:'#F2AC3C',
        MainPink: "#B9637A",
    },
      fontFamily : {
       inter : ['inter', 'sans-serif']
      },
      },
    },
    plugins: [
      // ...
      require('tailwind-scrollbar'),
  ],
}