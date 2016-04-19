'use strict'
var fs = require('fs');

//
// function getFiles (dir, files_){
//     files_ = files_ || [];
//     var files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }
//
// console.log(getFiles('path/to/dir'))


// var fs = require('fs');
// fs.realpath(__dirname, function(err, path) {
//     if (err) {
//         console.log(err);
//      return;
//     }
//     console.log('Path is : ' + path);
// });
// fs.readdir(__dirname, function(err, files) {
//     if (err) return;
//     files.forEach(function(f) {
//         console.log('Files: ' + f);
//     });
// });


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

  //
  // // Pass encoding, utf8, so `readFileSync` will return a string instead of a
  // // buffer
  // var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
  // var glyphiconsLines = glyphiconsFile.split('\n');
  //
  // // Use any line that starts with ".glyphicon-" and capture the class name
  // var iconClassName = /^\.(glyphicon-[a-zA-Z0-9-]+)/;
  // var glyphiconsData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
  //                      '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
  // var glyphiconsYml = 'docs/_data/glyphicons.yml';
  // for (var i = 0, len = glyphiconsLines.length; i < len; i++) {
  //   var match = glyphiconsLines[i].match(iconClassName);
  //
  //   if (match !== null) {
  //     glyphiconsData += '- ' + match[1] + '\n';
  //   }
  // }
  //
  // // Create the `_data` directory if it doesn't already exist
  // if (!fs.existsSync('docs/_data')) {
  //   fs.mkdirSync('docs/_data');
  // }
  //
  // try {
  //   fs.writeFileSync(glyphiconsYml, glyphiconsData);
  // } catch (err) {
  //   grunt.fail.warn(err);
  // }
  // grunt.log.writeln('File ' + glyphiconsYml.cyan + ' created.');
};
