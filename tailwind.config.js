/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-75px': 'repeat(auto-fit, minmax(75px, 1fr))',
        'auto-fit-46px': 'repeat(auto-fit, minmax(46px, 1fr))',
      }
    },
  },
  plugins: [],
};
