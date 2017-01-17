var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('rev-del');
var gdebug = require('gulp-debug');

var cfg = require('./config');

gulp.task('revision', ['styles' /* [DEBUG] , 'scripts', 'images', 'svg'*/], function() {
  var temporaryAssetDirectories = cfg.sharedPaths.siteAssetPathGenerator({
    assetRoots: [cfg.sharedPaths.temporaryAssetRoot()],
    shouldAddSuffixes: true,
    assetPropertySource: 'outputs'
  });

  var outputAssetRoot = cfg.sharedPaths.outputPublicAssets();
  var temporaryAssetRoot = cfg.sharedPaths.temporaryAssetRoot();

  return gulp.src(temporaryAssetDirectories, {base: temporaryAssetRoot})
    .pipe(gdebug({title: 'revision[in]:'}))
    .pipe(rev())
    .pipe(gulp.dest(outputAssetRoot))
    .pipe(rev.manifest())
    .pipe(del({dest: outputAssetRoot}))
    .pipe(gulp.dest(outputAssetRoot))
    .pipe(gdebug({title: 'revision[out]:'}));
});
