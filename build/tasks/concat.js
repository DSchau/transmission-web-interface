module.exports = {
  main: {
    src: [
    	'<%= dom_munger.data.appjs %>',
    	'<%= files.app.js %>',
    	'<%= ngtemplates.main.dest %>'
    ],
    dest: 'temp/app.full.js'
  }
};