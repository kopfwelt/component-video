import gulp from 'gulp';
import hb from 'gulp-hb';
import rename from 'gulp-rename';
const notify = require('gulp-notify');

const browserSync = require('browser-sync').create();

var server = null;

// use this to test after you build the project
gulp.task('default', ['handlebars', 'sass', 'javascript'], () => {
  browserSync.init({
	notify: false,
	port: 9000,
	server: {
	  baseDir: ['examples']
	}
  });
});

gulp.task('handlebars', () => {
	return gulp.src('src/templates/index.hbs')
		.pipe(hb({
			// helpers: 'app/templates/helpers/*.js',
			partials: [
				'src/templates/*.hbs',
				'node_modules/component*/**/*.hbs'
			],
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest('examples'));
});

gulp.task('sass', () => {
	// return gulp.src('app/styles/*.scss')
	// 	.pipe(plumber())
	// 	.pipe(sourcemaps.init())
	// 	.pipe(sass.sync({ precision: 10, includePaths: ['.'] })
	// 		.on('error', sass.logError))
	// 	.pipe(postcss([autoprefixer({ browsers })]))
	// 	.pipe(sourcemaps.write())
	// 	.pipe(gulp.dest('.tmp/styles'))
	// 	.pipe(browserSync.stream());
});

// gulp.task('css', function () {
//     var postcss = require('gulp-postcss');
//     return gulp.src('src/**/*.css')
//         .pipe( postcss([ require('autoprefixer'), require('cssnano') ]) )
//         .pipe( gulp.dest('build/') );
// });

gulp.task('javascript', () => {
});

gulp.task('test:unit', () => {
});




// const autoprefixer = require('autoprefixer');
// const browserSync = require('./serve');
// const gulp = require('gulp');
// const plumber = require('gulp-plumber');
// const postcss = require('gulp-postcss');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');

// // Compiles Sass with autoprefixer and sourcemaps
// const browsers = ['ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10'];
