// grunt sass task
var compass = require('compass-importer')

module.exports = {
  options: {
    sourceMap: true,
    sourceMapEmbed: true,
    sourceMapContents: true,
    includePaths: ['./bower_components'],
    importer: compass
  },
  server: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/styles',
      src: [
        '*.{scss,sass}',
        '!_compass/*.{scss,sass}',
        '!compass-version.scss'
      ],
      dest: '.tmp/styles',
      ext: '.css'
    }]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/styles',
      src: [
        '*.{scss,sass}',
        '!_compass/*.{scss,sass}',
        '!compass-version.scss'
      ],
      dest: '<%= config.dist %>/styles',
      ext: '.css'
    }]
  }
};
