var gulp = require("gulp");
var replace = require("gulp-rev-replace");
var size = require('gulp-size');
var gdebug = require('gulp-debug');

gulp.task('reference:all', ['hugo:all'], function() {
    var manifest = gulp.src('blog/public/rev-manifest.json');

    return gulp.src(['blog/public/**/*.html', 'blog/public/**/*.xml', 'blog/public/**/*.css'])
        .pipe(gdebug({title: 'reference[in]:'}))
        .pipe(replace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
        .pipe(size())
        .pipe(gulp.dest('blog/public'))
        .pipe(gdebug({title: 'reference[out]:'}));
});
