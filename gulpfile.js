const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function compactImage(){
    return gulp.src("./source/styles/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/styles/images"))
}

function comprimidorJavaScript(){
    return gulp.src("./source/styles/script/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/styles/script"))
}


function compiladorSass(){
    return gulp.src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"))
}


exports.sass = compiladorSass

exports.javascript = comprimidorJavaScript
exports.images = compactImage