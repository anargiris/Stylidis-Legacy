module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        next: ['"Mate SC"', "serif"],
        cab: ['"Lato"', "sans-serif"],
      },
      colors: {
        gray: {
          darkest: "#212121",
        },
        pink: {
          border: "#efd3d7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
