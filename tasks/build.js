var gulp = require("gulp");
var reload = require("browser-sync").reload;

gulp.task('build:content', ['reference:all'], reload);

gulp.task('build:all', ['reference:all'], reload);

gulp.task('build:publish', ['reference:all']);
