var g = require("gulp");
var rs = require("run-sequence").use(g);
var browserSync = require("browser-sync");

var cfg = require('./config');
var gutil = require('gulp-util');

g.task('serve:all', () => {
  // Serve files from the root of this project.
  browserSync({
    server: {
      baseDir: cfg.sharedPaths.outputSite(),
    },
    open: false
  });

  // Watch site content for changes.
  g.watch(
    [
      ...cfg.sharedPaths.siteContentPaths()
    ],
    [
      'build:content'
    ]
  );

  // Watch assets for changes.
  g.watch(
    [
      ...cfg.sharedPaths.siteAssetPaths()
    ],
    [
      'build:all'
    ]
  );
});

g.task('serve', function(callback) {
  rs('clean:all', 'build:all', 'clean:post', 'serve:all', callback);
});
