var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    connect = require('gulp-connect');
//browserify = require('gulp-browserify');


var env,
    jsSources,
    htmlSources,
    outputDir;

outputDir = 'builds/development/assets/js/';

env = process.env.NODE_ENV || 'production';

if (env==='development') {
    outputMain = 'builds/development/';
} else {
    outputMain = 'builds/production/';
}


jsSources = [
    outputDir + 'jquery.js',
    outputDir + 'owl.carousel.min.js',
    outputDir + 'isotope.pkgd.min.js',
    outputDir + 'jquery.magnific-popup.min.js',
    outputDir + 'imagesloaded.pkgd.min.js',
    outputDir + 'helper.js',
    outputDir + 'template.js',
    outputDir + 'jquery.blockUI.js',
    outputDir + 'lib/angular/angular.min.js',
    outputDir + 'lib/angular/angular-ui-router.min.js',
    outputDir + 'lib/angular/angular-resource.min.js',
    outputDir + 'lib/angular/angular-animate.min.js',
    outputDir + 'app.js',
    outputDir + 'directives.js',
    outputDir + 'controllers/index.js',
    outputDir + 'controllers/about.js',
    outputDir + 'controllers/facilities.js',
    outputDir + 'controllers/gallery.js',
    outputDir + 'controllers/podcast.js',
    outputDir + 'controllers/contact.js',
    outputDir + 'controllers/booking.js'
];

gulp.task('log', function() {
    gutil.log("Workflows are awesome");
});



gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain + 'assets/')))
});

gulp.task('views', function() {
    gulp.src('builds/development/views/*.php')
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain + 'views/')))
});

gulp.task('layout', function() {
    gulp.src('builds/development/layout/*.php')
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain + 'layout/')))
});

gulp.task('index', function() {
    gulp.src('builds/development/index.php')
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain)))
});

//gulp.task('images', function() {
//    gulp.src('builds/development/images/**/*.*')
//        .pipe(gulpif(env === 'production', imagemin({
//        progressive: true,
//        svgoPlugins: [{ removeViewBox: false }],
//        use: [pngcrush()]
//    })))
//        .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
//        .pipe(connect.reload())
//});


gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch('builds/development/*.html', ['html']);
    gulp.watch('builds/development/js/*.json', ['json']);
    gulp.watch('builds/development/images/**/*.*', ['images']);
});


gulp.task('default', ['views', 'layout', 'js', 'index', 'watch']);


//gulp.src('client/js/**/*.js') // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
//    .pipe(minify())
//    .pipe(gulp.dest('build'));  // Writes 'build/somedir/somefile.js'


//gulp.task('connect', function() {
//    connect.server({
//        root: 'builds/development',
//        livereload: true
//    });
//});
