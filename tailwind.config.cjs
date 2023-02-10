/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"'],
      },
      colors: {
        primary: {
          1: "#242731",
          2: "#E0E4E7",
          3: "#A162F7",
        },
        secondary: {
          1: "#A162F7",
          2: "#2884FF",
          3: "#F6CC0D",
          4: "#FF6370",
          5: "#70CF97",
          6: "#FF764C",
        },
        gray: {
          1: "#E0E4E7",
          2: "#A4A5A6",
          3: "#7C7C8D",
          4: "#72767C",
          5: "#5F6165",
          6: "#242731",
          7: "#F5F5F5",
          8: "#F3F5F8",
        },
      },
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.18rem" }],
      },
    },
  },
  plugins: [],
};
