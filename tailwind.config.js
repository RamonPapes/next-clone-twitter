/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121214',
        'primary': '#1DA1F2',
        'secundary':'#828282',
        'textColor': '#E1E1E6',
        'colorBorder': '#828282'
      },
    },
  },
  plugins: [],
}
