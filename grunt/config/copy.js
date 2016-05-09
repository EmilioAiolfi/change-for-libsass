// grunt copy task

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.app %>',
      dest: '<%= config.dist %>',
      src: [
        '*.txt',
        'images/{,*/}*.webp',
        '{,*/}*.html',
        'fonts/{,*/}*.*'
      ]
    }, {
      expand: true,
      dot: true,
      cwd: '.tmp',
      dest: '<%= config.dist %>',
      src: [
        '{,*/}*.html'
      ]
    }, {
      expand: true,
      dot: true,
      cwd: '.tmp/images/generated/sprites/',
      dest: '<%= config.dist %>/images/generated/sprites/',
      src: [
        'sprite.png'
      ]
    }, {
      expand: true,
      dot: true,
      cwd: '.',
      src: 'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
      dest: '<%= config.dist %>'
    }]
  }
};
