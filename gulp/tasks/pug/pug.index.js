'use strict';

/*******************************
 * Task: pug:index - compile index page
 *******************************/
module.exports = function() {
  $.gulp.task( 'pug:index', function() {

    let files = getRenderedPages();

    return $.gulp.src('./src/pug/index.pug')
      .pipe( $.gp.pug( {
        pretty: true,
        locals: {'pages': files}
      } ))
      .on('error', $.gp.notify.onError( function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
      }))
      .pipe( $.gulp.dest( $.config.dist ) );
  });
};

function getRenderedPages() {
  if ( $.fs.existsSync( './dist/' ) ) {
    let dirs = $.fs.readdirSync( './dist/' );
    let files = [];

    for (let i = 0, len = dirs.length; i < len; i++) {
      let file = dirs[i];

      if (file.indexOf('.html') + 1 && !( file.indexOf('index') + 1)) {
        files.push({
          file: file.replace('.html', ''),
          name: $.getDesc(file)
        });
      }
    }

    return files;
  }

  return false;
}

