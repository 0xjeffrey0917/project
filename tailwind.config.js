export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D1D1F',
          light: '#2D2D2F'
        },
        secondary: {
          DEFAULT: '#86868B',
        }
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}