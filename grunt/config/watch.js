// grunt watch task

module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  babel: {
    files: ['<%= config.app %>/scripts/{,*/}*.js'],
    tasks: ['babel:dist']
  },
  babelTest: {
    files: ['test/spec/{,*/}*.js'],
    tasks: ['babel:test', 'test:watch']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  dusthtml: {
    files: ['<%= config.app %>/templates/{,*/}*.dust'],
    tasks: ['dusthtml']
  },
  sass: {
    files: [
      '<%= config.app %>/styles/{,*/}*.{scss,sass}',
      '!<%= config.app %>/styles/_compass/{,*/}*.{scss,sass}',
      '!<%= config.app %>/styles/compass-version.scss'
    ],
    tasks: ['sass', 'postcss']
  },
  sprite: {
    files: [
      '<%= config.app %>/styles/_libsass/{,*/}*.{scss,sass}',
      '<%= config.app %>/images/sprites/{,*/}*.{png}'
    ],
    tasks: ['sprite']
  },
  compass: {
    files: [
      '<%= config.app %>/styles/{,*/}*.{scss,sass}',
      '!<%= config.app %>/styles/_libsass/{,*/}*.{scss,sass}',
      '!<%= config.app %>/styles/libsass-version.scss'
    ],
    tasks: ['compass:server', 'postcss']
  },
  styles: {
    files: ['<%= config.app %>/styles/{,*/}*.css'],
    tasks: ['newer:copy:styles', 'postcss']
  }
};
