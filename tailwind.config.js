module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-grey': '#64748B',
        'secondary-grey': '#334155',
        'tertiary': '#FF5722',
    }
  },
  plugins: [],
}};
