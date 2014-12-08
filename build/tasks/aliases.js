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
      tasksToRun = tasksToRun.concat(['sass', 'cssmin']);
    }

    if ( filepath.indexOf('.html') > -1 ) {
      tasksToRun = tasksToRun.concat(['ngtemplates', 'concat', 'ngAnnotate', 'uglify']);
    }

    //if index.html changed, we need to reread the <script> tags so our next run of karma
    //will have the correct environment
    if (filepath === 'index.html') {
      tasksToRun.push('dom_munger:read');
    }

    grunt.config('watch.main.tasks', tasksToRun);

  });

  return {
    'build': {
      description: 'JSHint, Compile SASS, JS, and build the application assets.',
      tasks: [
        'jshint',
        'clean:before',
        'sass',
        'autoprefixer',
        'dom_munger:read',
        'dom_munger:update',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy',
        'clean:after'
      ],
    },
    'compile': {
      description: 'Build and minify assets',
      tasks: [
        'jshint',
        'clean:before',
        'sass',
        'autoprefixer',
        'dom_munger:read',
        'dom_munger:compile',
        'ngtemplates',
        'cssmin',
        'concat',
        'ngAnnotate',
        'uglify',
        'htmlmin',
        'copy:main',
        'clean:after'
      ]
    },
    'icons': {
      description: 'Generate base-64 SVG and PNGs from SVG icons',
      tasks: [
        'svgmin',
        'grunticon'
      ]
    },
    'serve': {
      description: 'Build and launch a local node server for local development',
      tasks: [
        'build',
        'dom_munger:read',
        'jshint',
        'configureProxies:main',
        'connect',
        'watch'
      ],
    },
    'test': {
      description: 'Unit test the application',
      tasks: [
        'dom_munger:read',
        'karma:all_tests'
      ]
    },
    'help': ['availabletasks']
  };

};
