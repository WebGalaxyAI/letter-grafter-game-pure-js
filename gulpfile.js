const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');

function styles() {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
}

function watchFiles() {
    gulp.watch('src/sass/**/*.sass', styles);
    gulp.watch('src/js/**/*.js', scripts);
}

const build = gulp.series(styles, scripts);
const watch = gulp.series(build, watchFiles);

exports.styles = styles;
exports.scripts = scripts;
exports.build = build;
exports.watch = watch;
