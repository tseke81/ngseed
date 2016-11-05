var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ngdocs = require('gulp-ngdocs');
var copy = require('gulp-copy');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

var buildDir = 'dist/';

var depsJs = ['node_modules/angular/angular.min.js', 
              'node_modules/angular-messages/angular-messages.min.js',
              'node_modules/angular-ui-router/release/angular-ui-router.min.js',
              'node_modules/ngstorage/ngStorage.js',
              'node_modules/angular-animate/angular-animate.min.js',
              'node_modules/angular-touch/angular-touch.min.js'];

var appJs = ['src/app/app.js', 'src/app/modules.js', 'src/app/configs.js', 'src/app/run.js',
              'src/app/services/**/*.js', 'src/app/components/**/*.js'];


/** tasks */ 
gulp.task('devDeps', function(){
    var depsjs = gulp.src(depsJs);
    return depsjs.pipe(concat('app_deps.js'))
     .pipe(gulp.dest('dist'));

});

gulp.task('devJs', function(){
    var js = gulp.src(appJs);
    return js.pipe(concat('app.js'))
     .pipe(gulp.dest('dist'));
});

gulp.task('copyindex', function(){
   gulp.src('src/index.html')
   .pipe(gulp.dest('dist'));
});

gulp.task('copyassets', function(){
   gulp.src('src/assets/**/*')
   .pipe(gulp.dest('dist/assets'));
});

gulp.task('copyviews', function(){
   gulp.src('src/views/**/*')
   .pipe(gulp.dest('dist/views'));
});

gulp.task('copy', function(callback){
    runSequence('copyindex', 'copyassets', 'copyviews' , callback);
});


/** initialize */

gulp.task('build', function(callback){
    runSequence('copy','devDeps', 'devJs' , callback);
});

gulp.task('default', function(callback){
    runSequence('devDeps', 'devJs' , callback);
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.js', ['devJs']);
});
