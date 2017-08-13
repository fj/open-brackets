var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var merge = require('merge-stream');
var gdebug = require('gulp-debug');

var cfg = require('./config');

gulp.task('styles', () => {
  var stylePaths = cfg.sharedPaths.siteAssetPathsForAsset({assetType: 'styles'});
  var styleTaskForPath = (path) => {
    return gulp.src(path)
      .pipe(gdebug({title: 'styles[in]:'}))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gdebug({title: 'styles[sass]:'}))
      .pipe(autoprefixer('last 2 versions'))
      //.pipe(cleancss({advanced:false}))
      .pipe(gulp.dest('blog/tmp/styles'))
      .pipe(gdebug({title: 'styles[out]:'}))
  };
  return merge(...stylePaths.map(styleTaskForPath));
});
