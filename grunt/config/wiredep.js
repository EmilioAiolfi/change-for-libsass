// grunt wiredep task

module.exports = {
  app: {
    src: ['<%= config.app %>/templates/partials/layout.html'],
    exclude: ['bootstrap.js'],
    ignorePath: /^(\.\.\/)*\.\./
  },
  sass: {
    src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
    ignorePath: /(\.\.\/){1,2}bower_component\//
  }
};
