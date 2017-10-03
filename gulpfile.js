var gulp = require("gulp");
var server = require("gulp-server-livereload");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');

//server
gulp.task('start', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

//styles
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ["last 15 versions"]
    }))
    .pipe(gulp.dest('app/css'));
});

//build
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

gulp.task("watch", function(){
	gulp.watch("app/sass/**/*.sass", ["style"])
});

gulp.task("default", ["start", "watch"]);