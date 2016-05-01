// grunt useminPrepare task

module.exports = {
  options: {
    dest: '<%= config.dist %>'
  },
  html: '<%= config.app %>/templates/partials/layout.dust'
};
