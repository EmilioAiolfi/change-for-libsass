'use strict'
var fs = require('fs');

module.exports = function generateIconsData(grunt) {

  var files_ = [];
  var dir = 'app/images/sprites/icon';
  var files = fs.readdirSync(dir);
  for (var i in files){
      var ext = files[i].split('.').pop();
      if (ext === 'png') {
        var name = 'icon-' + files[i].split('.').shift();

        files_.push({
            "iconName" : name
        });
      }
  }
  return files_;

};
