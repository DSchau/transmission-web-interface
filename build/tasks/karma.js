var createFolderGlobs = function(fileTypePatterns) {
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

module.exports = {
  options: {
    frameworks: ['jasmine'],
    files: [  //this files data is also updated in the watch handler, if updated change there too
      '<%= dom_munger.data.appjs %>',
      'bower_components/angular-mocks/angular-mocks.js',
      createFolderGlobs('<%= files.tests %>')
    ],
    logLevel:'ERROR',
    reporters:['mocha'],
    autoWatch: false, //watching is handled by grunt-contrib-watch
    singleRun: true
  },
  all_tests: {
    browsers: ['PhantomJS','Chrome','Firefox']
  },
  during_watch: {
    browsers: ['PhantomJS']
  }
};