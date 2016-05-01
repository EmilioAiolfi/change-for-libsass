// grunt filerev task

module.exports = {
  dist: {
    src: [
      '<%= config.dist %>/scripts/{,*/}*.js',
      '<%= config.dist %>/styles/{,*/}*.css',
      '<%= config.dist %>/images/{,*/}*.*',
      '<%= config.dist %>/fonts/{,*/}*.*',
      '<%= config.dist %>/*.{ico,png}'
    ]
  }
};
