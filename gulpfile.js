var assign = require('lodash.assign');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

gulp.task('default', function() {
  var customOpts = {
    entries: ['./js/app.jsx'],
    transform: [reactify]
  };

  var opts = assign({}, watchify.args, customOpts);
  var b = watchify(browserify(opts));
  bundle();
  b.on('update', bundle);
  b.on('log', gutil.log);

  function bundle() {
    return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
  }
});
