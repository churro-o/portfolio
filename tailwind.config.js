/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./content.js"],
  theme: {
    extend: {
      colors: {
        "electric-iris": "#5683da",
        sec1: "#f2e8de",
        sec2: "#e2f0fe",
        sec3: "#f7efe2",
        sec4: "#e5edf0",
        sec5: "#c6b9ff",
        sec6: "#6e87e7",
        ink: "#2b2b2b",
      },
      fontFamily: {
        heading: ["Fraunces", "serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
