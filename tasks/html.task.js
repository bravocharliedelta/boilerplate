'use strict';

const inject = require('gulp-inject');
const gutil = require('gulp-util');
const config = require('./config');

module.exports = gulp => {

  // -- Unit html tasks

  gulp.task('inject-assets', () => {
    return gulp.src(config.glob.html)
      .pipe(inject(gulp.src([
        `${config.path.css}/*.css`, 
        `${config.path.js}/*.js`,
      ]), { ignorePath: 'dist/'}))
      .pipe(gulp.dest(config.path.dist));
  });

  gulp.task('inject-assets:prod', () => {
    return gulp.src(config.glob.html)
      .pipe(inject(gulp.src([
          `${config.path.dist}/css/*.min.css`, 
          `${config.path.dist}/js/*.min.js`,
      ]), {ignorePath: '/dist/'}))
      .pipe(gulp.dest(config.path.dist));
  });

  // -- Main html tasks

  // Task for serving templates in developer mode.
  gulp.task('html', ['javascript', 'style', 'inject-assets']);

  // Task for building templates in production mode.
  gulp.task('html:prod', ['javascript:prod', 'style:prod','inject-assets:prod']);
};
