var gulp = require('gulp');
var config = require('../gulp-config');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  gulp.src(config.paths.js.src)
      .pipe(plumber())
      .pipe(uglify())
      .pipe(rename(config.names.js))
      .pipe(gulp.dest(config.paths.js.dest));
});