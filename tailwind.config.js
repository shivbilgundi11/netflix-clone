/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        netflixRg: ["Net-Sans-Rg", "Segoe UI", "Roboto", "sans-serif"],
        netflixMd: ["Net-Sans-Md", "Segoe UI", "Roboto", "sans-serif"],
        netflixBold: ["Net-Sans-Bold", "Segoe UI", "Roboto", "sans-serif"],
        circularXWeb: ["CircularXXWeb", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        primary: "#E50914",
        "black-shade": "#232323",
        "dark-gray": "#2D2D2D",
        "1": "#414141",
        "white-400": "rgba(255, 255, 255, 0.70)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        wide: "1172px",
      },
    },
  },
  plugins: [],
};
