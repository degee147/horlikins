var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    connect = require('gulp-connect');
//browserify = require('gulp-browserify');




var env,
    jsSources,
    htmlSources,
    assets;

assets = 'builds/development/assets/js/';

env = process.env.NODE_ENV || 'production';

if (env==='development') {
    outputMain = 'builds/development/';
} else {
    outputMain = 'builds/production/';
}


jsSources = [
    assets + 'jquery.js',
    assets + 'owl.carousel.min.js',
    assets + 'isotope.pkgd.min.js',
    assets + 'jquery.magnific-popup.min.js',
    assets + 'imagesloaded.pkgd.min.js',
    assets + 'helper.js',
    assets + 'template.js',
    assets + 'jquery.blockUI.js',
    assets + 'lib/angular/angular.min.js',
    assets + 'lib/angular/angular-ui-router.min.js',
    assets + 'lib/angular/angular-resource.min.js',
    assets + 'lib/angular/angular-animate.min.js',
    assets + 'app.js',
    assets + 'directives.js',
    assets + 'controllers/index.js',
    assets + 'controllers/about.js',
    assets + 'controllers/facilities.js',
    assets + 'controllers/gallery.js',
    assets + 'controllers/podcast.js',
    assets + 'controllers/contact.js',
    assets + 'controllers/booking.js'
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
//        .pipe(gulpif(env === 'production', gulp.dest(assets + 'images')))
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
