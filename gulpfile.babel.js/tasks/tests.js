import gulp from 'gulp'

gulp.task('tests', ['karma', 'webdriverio'])
gulp.task('test:unit', ['karma'])
gulp.task('test:functionsl', ['webdriverio'])
