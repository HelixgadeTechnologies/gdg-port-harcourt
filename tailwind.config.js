/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A3A3A",
        secondary: "#FFFAEB",
        nav: "#132634",
        yellow: "#FFC103",
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('/src/assets/images/banner.png')",
        aside: "url('/src/assets/images/aside.png')",
        blackGdg: "url('/src/assets/images/blackgdg.png')",
        organiser1: "url('/src/assets/images/organiser1.png')",
        organiser2: "url('/src/assets/images/organiser2.png')",
      },
      dropShadow: {
        card: "0px 1.311475396156311px 110px 0px rgba(0, 0, 0, 0.1)",
        imageShadow: "0px 24px 134px 0px rgba(255, 193, 3, 0.2)",
      },

      boxShadow: {
        event: "0px 1.311475396156311px 110px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

