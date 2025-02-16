module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/shaders");
  eleventyConfig.addPassthroughCopy("./src/sanity");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/three": "js/three",
    "./node_modules/p5": "js/p5",
    "./node_modules/pixi.js/dist": "js/pixi",
    // "./node_modules/pixi-filters/dist": "js/pixi-filters",
    "./node_modules/shader-park-core/dist": "js/shaderpark",
    "./node_modules/shader-park-core/dist": "js/shaderpark",
    "./node_modules/@sanity/client": "js/sanityClient",
  });

  eleventyConfig.setServerOptions({
    browserSync: false,
    // Opt-out of the live reload snippet
    enabled: true,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
    devOptions: {
      host: "10.0.0.57",
      port: 8080,
    },
    // The 'watch' option enables Eleventy to automatically rebuild the site when files change.
    watch: true,
  };
};
