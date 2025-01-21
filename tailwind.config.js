/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}", 
      "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        DarkOrange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        Black: "hsl(0, 0%, 0%)",
        footerColor: "#585858"
      },
      animation: {
        zoom: "zoom 0.6s linear",
      },
      keyframes: {
        zoom: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
      screens: {
        sm2: "320px",
      },
      boxShadow: {
        sm2: "0px 2px , 0px -2px , 2px 0px, -2px 0 ",
      },
    },
  },
  plugins: [],
};
