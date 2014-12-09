module.exports = {
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
