'use strict';

const browsersync = require('browser-sync').create();

module.exports = gulp => {

  gulp.task('browser-sync', () => {
    browsersync.init({
      server: {
        baseDir: "./dist",
      },
      stream: true,
    });

    gulp.task('browser-sync-reload', () => { 
      return browsersync.reload();
    });

    /*
     * -- Temporary not used; unnecessary to realise side quest from Rafał ;)
     * 
     * gulp.task('browser-sync-stream', () => {
     *   return browsersync.stream();
     * });
     *
     */
  });
};
