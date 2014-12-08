module.exports = {
  read: {
    options: {
      read: [
        {
          selector:'script[data-concat!="false"]',
          attribute:'src',
          writeto:'appjs'
        },
        {
          selector:'link[rel="stylesheet"][data-concat!="false"]',
          attribute:'href',
          writeto:'appcss'
        }
      ]
    },
    src: '<%= app %>/index.html'
  },
  update: {
    options: {
      remove: [
        'script[data-remove!="false"]',
        'link[data-remove!="false"]'
      ],
      append: [
        {
          selector:'body',
          html:'<script src="app.full.js"></script>'
        },
        {
          selector:'head',
          html:'<link rel="stylesheet" href="app.css">'
        }
      ]
    },
    src:'<%= app %>/index.html',
    dest: '<%= dist %>/index.html'
  },
  compile: {
    options: {
      remove: [
        'script[data-remove!="false"]',
        'link[data-remove!="false"]'
      ],
      append: [
        {
          selector:'body',
          html:'<script src="app.full.min.js"></script>'
        },
        {
          selector:'head',
          html:'<link rel="stylesheet" href="app.full.min.css">'
        }
      ]
    },
    src:'<%= app %>/index.html',
    dest: '<%= dist %>/index.html'
  }
};