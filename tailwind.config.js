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
          lightgreen: "#F8BC4C",
          darkgreen: "#202A35",
          gray: "#C2D2D7",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
