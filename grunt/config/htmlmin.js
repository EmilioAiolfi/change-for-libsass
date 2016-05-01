// grunt htmlmin task

module.exports = {
  dist: {
    options: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeAttributeQuotes: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: false,
      useShortDoctype: true
    },
    files: [{
      expand: true,
      cwd: '<%= config.dist %>',
      src: '{,*/}*.html',
      dest: '<%= config.dist %>'
    }]
  }
};
