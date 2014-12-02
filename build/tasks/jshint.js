var createFolderGlobs2 = function(fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules','bower_components','dist','temp'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
    .map(function(file){
      if (ignore.indexOf(file) !== -1 ||
        file.indexOf('.') === 0 ||
        !fs.lstatSync(file).isDirectory()) {
        return null;
    } else {
      return fileTypePatterns.map(function(pattern) {
        return file + '/**/' + pattern;
      });
    }
  })
    .filter(function(patterns){
      return patterns;
    })
    .concat(fileTypePatterns);
};

// var createFolderGlobs = require('custom/createFolderGlobs');

// console.log(createFolderGlobs);

module.exports = {
  main: {
    options: {
      jshintrc: '.jshintrc'
    },
    src: createFolderGlobs2('<%= files.app.js %>')
  }
};