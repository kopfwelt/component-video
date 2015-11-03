
import gulp from 'gulp';
import webdriver from 'gulp-webdriver';
import path from 'path';

gulp.task('webdriverio', function() {
    return gulp.src('./tests/functional/wdio.conf.js', {read: false})
        .pipe(webdriver({
        	// for npm 3+
            wdioBin:  path.join(__dirname, 'node_modules', '.bin', 'wdio')
        }));
});