const Cache = require('gulp-file-cache');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const gulp = require('gulp');
const del = require('del');

const cache = new Cache();

gulp.task('eslint', () => {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean:cache', (cb) => {
  del(['./.gulp-cache']).then(() => {
    cb();
  });
});

gulp.task('build', ['eslint'], () => {
  return gulp.src('./src/**/*.js')
    .pipe(cache.filter())
    .pipe(babel())
    .pipe(cache.cache())
    .pipe(gulp.dest('./build'));
});

gulp.task('nodemon', ['build'], () => {
  nodemon({
    script: 'build',
    watch: 'src',
    ext: 'js',
    ignore: ['.git', 'node_modules/**/node_modules'],
    tasks: ['build']
  });
});

gulp.task('dev', ['clean:cache', 'nodemon']);
gulp.task('prod', ['clean:cache', 'build']);
