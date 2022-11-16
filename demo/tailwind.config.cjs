const config = {
  content: [
    require("path").join(
      require.resolve("@brainandbones/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],

  theme: {
    extend: {},
  },

  darkMode: "class",

  plugins: [require("@brainandbones/skeleton/tailwind/theme.cjs")],
};

module.exports = config;
