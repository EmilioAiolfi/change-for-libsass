// grunt dusthtml task

var generateIconsData = require('../common/icons-data-generator.js');

module.exports = {
  options: {
    context: {
      listIcons: generateIconsData,
      env: {
        production: true
      }
    },
    whitespace: true,
    partialsDir: '<%= config.app %>/templates/partials/'
  },
  index: {
    src: ['<%= config.app %>/templates/index.dust'],
    dest: '.tmp/index.html'
  },
  libsass: {
    src: ['<%= config.app %>/templates/libsass.dust'],
    dest: '.tmp/libsass.html'
  },
  compass: {
    src: ['<%= config.app %>/templates/compass.dust'],
    dest: '.tmp/compass.html'
  }
};
