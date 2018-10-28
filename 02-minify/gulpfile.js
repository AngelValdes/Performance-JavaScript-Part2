var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
//var concat = require('gulp-concat');

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS())
        //.pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        //.pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['minify-css', 'minify-js']);