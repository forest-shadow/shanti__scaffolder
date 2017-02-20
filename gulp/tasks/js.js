'use strict';

/*******************************
 * Task: Javascript
 *******************************/
module.exports = function() {
  $.gulp.task( 'js', function() {
    return $.streamqueue( { objectMode: true },

        $.gulp.src( [ 'src/js/vendor/jquery-3.0.0.min.js', 'src/js/vendor/jquery-ui.min.js',
          'src/js/vendor/**/*.js' ] ),

        $.gulp.src( [ 'src/js/custom/*.js' ] )

        .pipe( $.gp.sourcemaps.init() )
        .pipe( $.gp.concat( 'all.js' ) )
        .pipe( $.gp.sourcemaps.write( '.' ) )
        //.pipe($.gp.uglify())
        .pipe( $.gulp.dest( './dist/' ) )
        .pipe( $.browserSync.stream() ) );
  });
};