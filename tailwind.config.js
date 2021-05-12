module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ripley: "#6A148E",
      },
      inset: {
        "1/5": "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
