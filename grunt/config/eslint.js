// grunt eslint task

module.exports = {
  target: [
    'Gruntfile.js',
    '<%= config.app %>/scripts/{,*/}*.js',
    '!<%= config.app %>/scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
