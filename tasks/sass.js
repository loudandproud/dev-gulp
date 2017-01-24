var gulp = require('gulp');
var config = require('../gulp-config');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('styles', function () {
  gulp.src('sass/**/*.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(rename(config.names.css))
      .pipe(gulp.dest(config.paths.css.dest));
});
