var gulp       = require('gulp'),
    plumber    = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    ts         = require('gulp-typescript'),
    rename     = require('gulp-rename');

gulp.task('js', function() {
    gulp.src('./cookie.ts')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(ts({
            target: 'ES5'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('min', function() {
    gulp.src('./cookie.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./cookie.ts', ['js']);
    gulp.watch('./cookie.js', ['min']);
});

gulp.task('default', ['watch', 'js', 'min']);