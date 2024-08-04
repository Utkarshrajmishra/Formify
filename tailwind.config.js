/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#663AB7",
        textColor: "#55585D",
        blue: "#4284F4",
        bgColor: "#F2F2F2",
        white: "#FFFFFFF",
      },
      fontFamily: {
        ProductSansBold: ["ProductSansBold"],
        ProductSansRegular: ["ProductSansRegular"],
      },
    },
  },
  plugins: [],
};

