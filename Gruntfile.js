'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  
  var baseData = {
    app: 'app',
    dist: 'dist',
    bower: grunt.file.readJSON('bower.json'),
    files: {
      app: {
        js: 'app/**/*.js',
        scss: 'app/**/*.scss',
        templates: '**/*.html',
      },
      tests: 'app/**/*-spec.js'
    }
  };

  require('load-grunt-config')(grunt, {
    data: baseData,
    configPath: require('path').join(process.cwd(), 'build/tasks'),
    jitGrunt: true
  });
};
