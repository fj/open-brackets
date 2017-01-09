var g = require("gulp");
var browserSync = require("browser-sync");

var cfg = require('./config');
var gutil = require('gulp-util');

g.task('serve', ['build:all'], function() {
  // Serve files from the root of this project
  browserSync({
    server: {
      baseDir: cfg.sharedPaths.output(),
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
