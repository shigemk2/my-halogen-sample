var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./src/example.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('example.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  gulp.start(['browserify']);
});
