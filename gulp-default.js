var config = require('./gulp-config');
var gulp = require('gulp');

gulp.task('default', ['styles', 'scripts'], function () {
  gulp.watch(config.paths.css.src, ['styles']);
  gulp.watch(config.paths.js.src, ['scripts']);
});