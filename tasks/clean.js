
var g = require('gulp');

var cfg = require('./config');
var del = require('del');

g.task('clean:all', function() {
    del.sync(cfg.sharedPaths.outputSite());
    del.sync(cfg.sharedPaths.outputIntermediateAssets());
    del.sync(cfg.sharedPaths.temporaryAssetRoot());
});
