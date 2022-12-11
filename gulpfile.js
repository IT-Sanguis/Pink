"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

function style() {
  return gulp.src("./source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass().on("error", sass.logError))
    // .pipe(postcss([
    //   autoprefixer()
    // ]))
    // .pipe(csso())
    // .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./source/css"))
    .pipe(browserSync.stream());
}

function server() {
  browserSync.init({
    server: {
        baseDir: "source"
    },
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
}

function reload() {
  browserSync.reload();
}


function watchTask() {
  gulp.watch("source/sass/**/*.scss", style)
  gulp.watch("source/*.html").on("change", reload)
  gulp.watch("source/js/**/*.js").on("change", reload)
}

exports.style = style;
exports.server = server;

exports.default = gulp.series(style, gulp.parallel(server, watchTask));
