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
        275: "275px",
        270: "267px",
        260: "259px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
