const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        "2000": "2000ms",
      },
      margin: {
        "-128": "-32rem",
      },
      transitionTimingFunction: {
        "ease-rubber": "steps(5, jump-end)",
      },
      spacing: {
        "1280px": "1280px",
        "720px": "720px",
      },
      inset: {
        "-200px": "-200px",
      },
      fontFamily: {
        sans: ["'Noto Sans TC'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
