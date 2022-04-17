var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var connect        = require('gulp-connect');
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

//create sourcemaps, lint check, compile into one file, minify
gulp.task('js', function() {
return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'app/js/**/*.js'
    ])
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-jshint-html-reporter', {
        filename: __dirname + '/jshint-output.html',
        createMissingFolders : false  
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./app/"
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));

gulp.task('serveprod', function() {
    connect.server({
      root: ["./app/"],
      host: '0.0.0.0',
      port: process.env.PORT || 5000, // localhost:5000
      livereload: false
    });
  });