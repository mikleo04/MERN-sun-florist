/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fffffe',
        light: '#eef9ff',
        dark: '#0c0c04',
        primary: '#068191',
        secondary: '#0d445b',
        info: '#23abb9',
        success: '#04c066',
        warning: '#efd103',
        danger: '#ff1521',
      }
    }
  }
}

