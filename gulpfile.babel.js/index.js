const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('../node_modules/gulp-tasks/tasks', {recurse: true});

gulp.task('test', ['webpack']);
