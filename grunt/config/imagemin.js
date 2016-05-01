// grunt imagemin task

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/images',
      src: '{,*/}*.{gif,jpeg,jpg,png}',
      dest: '<%= config.dist %>/images'
    }, {
      expand: true,
      cwd: '<%= config.app %>',
      src: '*.{ico,png}',
      dest: '<%= config.dist %>'
    }]
  }
};
