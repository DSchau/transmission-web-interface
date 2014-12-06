module.exports = {
  icons: {
    options: {
      colors: {
        white: '#FFF'
      }
    },
    files: [
      {
        expand: true,
        cwd: 'icons',
        src: '*.svg',
        dest: 'temp/icons'
      }
    ]
  }
};