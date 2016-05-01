// grunt browserSync task

module.exports = {
  options: {
    notify: false,
    background: true,
    watchOptions: {
      ignored: ''
    }
  },
  livereload: {
    options: {
      files: ['.tmp/{,*/}*.html',
        '.tmp/styles/{,*/}*.css',
        '<%= config.app %>/images/{,*/}*',
        '.tmp/scripts/{,*/}*.js'
      ],
      port: 9000,
      server: {
        baseDir: ['.tmp', 'app'],
        routes: {
          '/bower_components': './bower_components'
        }
      }
    }
  },
  test: {
    options: {
      port: 9001,
      open: false,
      logLevel: 'silent',
      host: 'localhost',
      server: {
        baseDir: ['.tmp', './test', 'app'],
        routes: {
          '/bower_components': './bower_components'
        }
      }
    }
  },
  dist: {
    options: {
      background: false,
      server: '<%= config.dist %>'
    }
  }
};
