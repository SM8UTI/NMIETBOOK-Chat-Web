/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D633F",
        black: "#06100B",
        lightPrimary: "#E1FCFE",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
