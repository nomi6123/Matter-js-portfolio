/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        s: ["League Spartan", "sans-serif"],
        m: ["Merriweather Sans", "sans-serif"],
        n: ["Nunito Sans", "sans-serif"],
        m2: ["Merriweather", "serif"],
      },
      keyframes: {
        borderColorChange: {
          "0%": { borderColor: "red" },
          "25%": { borderColor: "green" },
          "50%": { borderColor: "blue" },
          "75%": { borderColor: "yellow" },
          "100%": { borderColor: "red" },
        },
      },
      animation: {
        "border-animation": "borderColorChange 4s linear infinite",
      },
      screens: {
        no: "330px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        mg1: "1536px",
      },
    },
    plugins: [],
  },
};