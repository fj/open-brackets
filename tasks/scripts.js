var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var gdebug = require('gulp-debug')

gulp.task('scripts', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(gdebug({title: '!!! TODO !!! scripts[in]: '}))
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(uglify())
        .pipe(gulp.dest('staging/js'))
        .pipe(gdebug({title: '!!! TODO !!! scripts[out]: '}));
});
