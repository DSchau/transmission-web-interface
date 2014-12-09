module.exports = function(grunt) {
  grunt.event.on('watch', function(action, filepath) {
    var tasksToRun = [];

    if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

      //lint the changed js file
      grunt.config('jshint.main.src', filepath);
      tasksToRun.push('jshint');

      //find the appropriate unit test for the changed file
      var spec = filepath;
      if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
        spec = filepath.substring(0,filepath.length - 3) + '-spec.js';
      }

      //if the spec exists then lets run it
      if (grunt.file.exists(spec)) {
        var files = [].concat(grunt.config('dom_munger.data.appjs'));
        files.push('bower_components/angular-mocks/angular-mocks.js');
        files.push(spec);
        grunt.config('karma.options.files', files);
        tasksToRun.push('karma:during_watch');
      }
    }

    if ( filepath.indexOf('.scss') > -1 ) {
      tasksToRun = tasksToRun.concat(['sass', 'copy:build']);
    }

    if ( filepath.indexOf('.js') > -1 || filepath.indexOf('.tpl.html') > -1 ) {
      tasksToRun = tasksToRun.concat(['ngtemplates', 'concat', 'ngAnnotate', 'copy:build']);
    }

    //if index.html changed, we need to reread the <script> tags so our next run of karma
    //will have the correct environment
    if ( filepath.indexOf('index.html') > -1 ) {
      tasksToRun.push('dom_munger:read', 'dom_munger:update');
    }

    grunt.config('watch.main.tasks', tasksToRun);

  });

  return require('../custom-tasks.js');

};
