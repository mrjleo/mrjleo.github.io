module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  config.addPassthroughCopy('src/img');
  config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: "_data",
      includes: "_includes",
    },
    markdownTemplateEngine: 'njk',
  }
}
