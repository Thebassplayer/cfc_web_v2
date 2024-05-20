/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      "7xl": "5rem", // 80px
      "8xl": "6rem", // 96px
      "9xl": "8rem", // 128px
    },
    extend: {
      fontFamily: {
        sifonn: ["Sifonn", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-yellow": "#FFCB20",
        "purple-extralight": "#838AE6",
        "purple-light": "#6C3BC5",
        "purple-primary": "#5A0C8F",
        "purple-dark": "#300133",
        "primary-grey": "#606060",
        "primary-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
