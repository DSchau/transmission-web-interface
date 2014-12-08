module.exports = {
  main: {
    files: [
      {
        src: ['img/**'],
        dest: '<%= dist %>/'
      }
    ]
  },
  build: {
    files: [
      {
        cwd: 'temp',
        expand: true,
        src: [
          'app.full.js',
          'app.css'
        ],
        dest: '<%= dist %>/'
      }
    ]
  }
};