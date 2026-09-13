/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./content.js"],
  theme: {
    extend: {
      colors: {
        "electric-iris": "#5683da",
        sec1: "#F2E9E1",
        sec2: "#DCEAF7",
        sec3: "#F3D9C7",
        sec4: "#DFE7D8",
        sec5: "#E8DDF5",
        sec6: "#314A6E",
        ink: "#2b2b2b",
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
