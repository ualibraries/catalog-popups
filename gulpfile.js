const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('styles', () => {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  connect.server({
    root: 'dist',
    port: 8000
  })

  gulp.watch('**/*.css', ['styles'])
  gulp.watch('**/*.pug', ['html'])
})

gulp.task('default', ['html', 'styles'])
