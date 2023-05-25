/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCFDA",
        secondary: "#ffffff",
        tertiary: "#FCB69E",
        accent : "#7371FC",
        accentHover :"#4E4BFB",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
