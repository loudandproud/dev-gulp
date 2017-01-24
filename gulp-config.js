module.exports = {
  paths: {
    project: './',

    css: {
      src: './sass/**/*.scss',
      dest: './css/'
    },
    
    js: {
      src: './js/src/*.js',
      dest: './js/dest/'
    },
  },
  names: {
    css: 'style.css',
    js: 'script.js'
  }  
};