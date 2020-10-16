module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
      colors: {
        toptuindeals: {
          lightgreen: "#86B111",
          darkgreen: "#44793B",
          bggreen: "#CCD6CA",
          gray: "#C2D2D7",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
