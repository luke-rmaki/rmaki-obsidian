const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename")
const concat = require("gulp-concat");
require('dotenv').config();

sass.compiler = require("node-sass");

function processSass() {
  src("./styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("obsidian.css"))
    .pipe(dest("./"))
    .pipe(rename("./Rmaki-Obsidian.css"))
    .pipe(dest("./"))
    .pipe(dest(process.env.DEST))
}


exports.build = processSass;

exports.default = () => {
  watch("./styles/*.scss", {ignoreInitial: false}, series(processSass));
}
