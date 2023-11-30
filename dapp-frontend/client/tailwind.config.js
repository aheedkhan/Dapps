/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "375.552px",
        gallery: "679.719px",
        about: "600px",
      },
      height: {
        custom: "375.552px",
        gallery: "153.583px",
        about: "600px",
      },
      textColor: ["responsive", "hover", "focus", "group-hover"],
      colors: {
        green: {
          700: "#20c997",
        },
        scale: {
          102: "1.02",
        },
      },
      spacing: {
        131: "131px",
        8: "2.5rem",
        15: "15px",
        20: "7rem",
        999: "0.5rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        colorchange: {
          "0%": { color: "#FFFFFF" }, // White
          "25%": { color: "#53d8b6" }, // Lighter Teal
          "50%": { color: "#20c997" }, // Teal
          "75%": { color: "#53d8b6" }, // Lighter Teal
          "100%": { color: "FFFFFF" }, // White
        },
      },
      animation: {
        colorchange: "colorchange 5s infinite",
      },
    },
  },

  plugins: [],
};
