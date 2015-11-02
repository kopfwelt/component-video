import gulp from 'gulp';
import hb from 'gulp-hb';
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();

// use this to test after you build the project
gulp.task('default', ['handlebars'], () => {
  browserSync.init({
	notify: false,
	port: 9000,
	server: {
	  baseDir: ['public']
	}
  });
});

gulp.task('handlebars', () => {
	return gulp.src('examples/*.html')
		.pipe(hb({
			// helpers: 'app/templates/helpers/*.js',
			partials: 'src/templates/*.hbs',
			bustCache: true
		}))
		.on('error', notify.onError(error => `Handlebars error: ${error}`))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
});