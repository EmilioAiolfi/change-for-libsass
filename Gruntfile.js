"use strict";

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

var path = require("path");

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths
  var options = {
    configPath: path.join(process.cwd(), "grunt/config"),

    jitGrunt:{
      staticMappings: {
          // here you can specify static mappings, for example:
          dusthtml: 'grunt-dust-html',
          useminPrepare: 'grunt-usemin',
          sprite: 'grunt-spritesmith'
      },
      customTasksDir: "grunt/tasks"
    },

    data: {
      config: {
        app: 'app',
        dist: 'dist'
      }
    }

  };


  require("load-grunt-config")(grunt, options);

};
