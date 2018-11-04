var gulp = require("gulp");
var htmlbeautify = require("gulp-html-beautify");
var markdown = require("gulp-breakdance");
var rename = require("gulp-rename");
var replace = require("gulp-replace");

gulp.task("normal", () => {
  gulp
    .src("./_jsdoc/**/*.html")
    .pipe(
      htmlbeautify({
        preserve_newlines: false
      })
    )
    .pipe(gulp.dest("./_jsdoc/"));
});
gulp.task("convert", () => {
  gulp
    .src("./_jsdoc/**/*.html")
    .pipe(markdown())
    .pipe(rename({
      extname: ".md"
    }))
    .pipe(gulp.dest("./docs/jsdoc/"));
});

gulp.task("replace", () => {
  gulp
    .src("./docs/jsdoc/**/*.html")
    .pipe(replace(/\[(.*?)\]\((.*?)\.html\)/g,"[$1]($2.md)"))
    .pipe(gulp.dest("./docs/jsdoc/"));
});