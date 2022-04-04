module.exports = (config) => {
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('src/_redirects');
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
