// grunt usemin task

module.exports = {
  options: {
    assetsDirs: [
      '<%= config.dist %>',
      '<%= config.dist %>/images',
      '<%= config.dist %>/styles'
    ]
  },
  html: ['<%= config.dist %>/{,*/}*.html'],
  css: ['<%= config.dist %>/styles/{,*/}*.css']
};
