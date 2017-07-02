var g = require('gulp');

var gutil = require('gulp-util');
var cfg = require('./config');
var del = require('del');
var deleteEmpty = require('delete-empty');

g.task('clean:all', function() {
  del.sync(cfg.sharedPaths.outputSite());
  del.sync(cfg.sharedPaths.outputIntermediateAssets());
  del.sync(cfg.sharedPaths.temporaryAssetRoot());
});

g.task('clean:post', () => {
  var deleted = deleteEmpty.sync(cfg.sharedPaths.outputSite(), {silent: true});
  deleted.forEach((path) => gutil.log(`deleted: ${path}`));
})
