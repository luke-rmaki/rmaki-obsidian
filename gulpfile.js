const {src, dest, watch} = require("gulp");
const postcss = require("gulp-postcss");
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require("postcss-import");
const rename = require("gulp-rename")
const concat = require("gulp-concat");
require('dotenv').config();

function processCSS() {
  console.log(process.env.DEST)
  return src("./styles/index.css")
    .pipe(postcss([atImport, postcssPresetEnv({features: {
    'nesting-rules': true
  }})]))
    .pipe(concat("obsidian.css"))
    .pipe(dest("./"))
    .pipe(rename("./Rmaki-Obsidian.css"))
    .pipe(dest("./"))
    .pipe(dest(process.env.DEST))
}


exports.build = processCSS;

exports.default = () => {
  watch("./styles/**/*.css", {ignoreInitial: false}, processCSS);
}
