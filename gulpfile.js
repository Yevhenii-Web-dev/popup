let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
   return gulp.src('./scss/style.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: ".min"}))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 8 versions']
            }))
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.reload({stream:true}))
});

gulp.task('style', function() {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./css'))
});

gulp.task('script', function() {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('html', function(){
    return gulp.src('./*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
    return gulp.src('./js/*.js')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('./scss/style.scss', gulp.parallel('sass'))
    gulp.watch('./*.html', gulp.parallel('html'))
    gulp.watch('./js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync',))