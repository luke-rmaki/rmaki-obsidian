const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
require('dotenv').config();

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("rmaki-obsidian.css"))
    .pipe(gulp.dest("./"))
    .pipe(
      gulp.dest(process.env.DEST)
    );
});

gulp.task("sass:watch", function () {
  gulp.watch("./styles/**/*.scss", gulp.series('sass'));
});
