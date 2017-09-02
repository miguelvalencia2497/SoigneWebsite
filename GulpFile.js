var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('useref', function(){
  return gulp.src('website/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('website/img/**/*.+(png|jpg|gif|svg|jpeg)')
    .pipe(cache(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 7})
    ])))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function(){
  return gulp.src('website/css/font/**/*')
    .pipe(gulp.dest('dist/css/font'))
});
