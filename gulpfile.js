const gulp = require('gulp')
const browserSync = require('browser-sync').create();


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;