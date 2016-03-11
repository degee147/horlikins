var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    // pngcrush = require('imagemin-pngcrush'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    cleanCSS = require('gulp-clean-css'),
    connect = require('gulp-connect');
//browserify = require('gulp-browserify');




var env,
    jsSources,
    cssSources,
    htmlSources,
    assets,
    dev;

assets = 'builds/development/assets/';
dev = 'builds/development/';

env = process.env.NODE_ENV || 'development';

if (env==='development') {
    outputMain = 'builds/development/';
} else {
    outputMain = 'builds/production/';
}

jsTopSources = [
    assets + 'js/jquery.js',
    assets + 'js/owl.carousel.min.js',
    assets + 'js/isotope.pkgd.min.js',
    assets + 'js/jquery.magnific-popup.min.js',
    assets + 'js/imagesloaded.pkgd.min.js',
    assets + 'js/helper.js',
    assets + 'js/template.js',
    assets + 'js/jquery.blockUI.js',
    assets + 'js/lib/angular/angular.min.js',
    assets + 'js/lib/angular/angular-ui-router.min.js',
    assets + 'js/lib/angular/angular-resource.min.js',
    assets + 'js/lib/angular/angular-animate.min.js',
    assets + 'plugins/ngPaginate/angular-animate.min.js',
    assets + 'plugins/ngPaginate/dirPagination.js'
];

jsBottomSources = [
    assets + 'js/app.js',
    assets + 'js/directives.js',
    assets + 'js/controllers/index.js',
    assets + 'js/controllers/about.js',
    assets + 'js/controllers/facilities.js',
    assets + 'js/controllers/gallery.js',
    assets + 'js/controllers/podcast.js',
    assets + 'js/controllers/contact.js',
    assets + 'js/controllers/booking.js'
];

cssSources = [
    assets + 'css/styles_2.css',
    assets + 'css/custom.css',
    assets + 'spinner/components-md.css"'
];

gulp.task('log', function() {
    gutil.log("Workflows are awesome");
});



gulp.task('js', function() {
    gulp.src(jsTopSources)
        .pipe(concat('scripts_top.js'))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputMain + 'assets/js'));

    gulp.src(jsBottomSources)
        .pipe(concat('scripts_bottom.js'))
        .pipe(gulp.dest(outputMain + 'assets/js'))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputMain + 'assets/js'));
});


gulp.task('css', function() {
    return gulp.src(cssSources)
        .pipe(concat('styles.css'))
        .pipe(gulpif(env === 'production', cleanCSS({compatibility: 'ie8'})))
        .pipe(gulp.dest(outputMain + 'assets/css'));
});

gulp.task('views', function() {
    gulp.src(dev + 'views/*.php')
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain + 'views/')));
});

gulp.task('layout', function() {
    gulp.src('builds/development/layout/*.php')
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(outputMain + 'layout/')));
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
