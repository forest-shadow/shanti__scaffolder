'use strict';

/*******************************
 * Task: pug:pages - compile pages with markup
 *******************************/
module.exports = function() {
  $.gulp.task( 'pug:pages', () =>
    $.gulp.src(['./src/pug/*.pug', '!./src/pug/index.pug'])
      .pipe( $.gp.pug( {
        pretty: true
      } ))
      .on('error', $.gp.notify.onError( function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
      }))
      .pipe( $.gulp.dest( $.config.dist ) )
  );
};
