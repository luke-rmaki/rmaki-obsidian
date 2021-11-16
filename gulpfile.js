const {src, dest, watch} = require("gulp");
const postcss = require("gulp-postcss");
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require("postcss-import");
const rename = require("gulp-rename")
const concat = require("gulp-concat");
const log = require("fancy-log");
require('dotenv').config();

function processCSS() {
  return src("./styles/index.css")
    .pipe(postcss([atImport, postcssPresetEnv({features: {
    'nesting-rules': true
  }})]))
    .on('end', () => log('PostCSS processing finished'))
    .pipe(concat("obsidian.css"))
    .on('end', () => log('Output concatenated'))
    .pipe(dest("./"))
    .pipe(rename("./Rmaki-Obsidian.css"))
    .pipe(dest("./"))
    .on('end', () => log('Local files written'))
    .pipe(dest(process.env.DEST))
    .on('end', () => log(`.obsidian file written at ${process.env.DEST}`))
}


exports.build = processCSS;

exports.default = () => {
  watch("./styles/**/*.css", {ignoreInitial: false}, processCSS);
}
