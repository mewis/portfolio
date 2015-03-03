// Include gulp
var gulp = require('gulp');

var server = 'mcportfolio:8888';

var assets_dir       = '';
var foundation_dir   = 'bower_components/foundation/';

var src_dir_scss     = 'src/scss/';
var dist_dir_css     = 'css/';

var src_js = [
    foundation_dir + 'js/foundation.js',
    foundation_dir + 'js/vendor/custom.modernizr.js',
    'src/js/**/*.js'
];
var dist_dir_js      = 'js/';

// Include Our Plugins
var jshint  = require('gulp-jshint');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var datauri = require('gulp-data-uri');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(src_dir_scss+'*.scss')
        .pipe(sass({
            includePaths: [
                foundation_dir + 'scss/'
            ]
        }))
        .pipe(sourcemaps.init())
        //.pipe(datauri())
        .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(dist_dir_css));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src(src_js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src(src_js)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify()
          .on('error', function(err){ //console.log(err); }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(dist_dir_js));
});

// Watch Files For Changes
gulp.task('watch', function() {

    browserSync({
        proxy: server
    });

    gulp.watch( 'index.html' ).on( 'change', browserSync.reload );
    gulp.watch(src_js, ['lint', 'js']).on( 'change', browserSync.reload );
    gulp.watch(src_dir_scss+'*.scss', ['sass']).on( 'change', browserSync.reload );
});

// Default Task
gulp.task('default', ['lint', 'sass', 'js', 'watch']);
