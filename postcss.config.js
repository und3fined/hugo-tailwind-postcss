// postcss.config.js

module.exports = {
    syntax: "postcss-scss",
    plugins: {
      "postcss-import": {
        path: ["assets/scss"],
      },
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano: { // minify without hugo
        preset: "default",
      },
    },
  };
  