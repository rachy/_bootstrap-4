var gulp 		= require('gulp');
var sass 		= require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))

});
// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("src/js"))

});
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'], ['sass']);

});

gulp.task('default', ['js','serve']);