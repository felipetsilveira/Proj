const { series } = require ('gulp')
const gulp = require ('gulp')
const uglifycss = require ('gulp-uglifycss')
const sass = require ('gulp-sass')
const concat = require ('gulp-concat')
const htmlmin = require ('gulp-htmlmin')

function minificarCSS() {
    return gulp.src('sass/index.scss')
        .pipe(sass())
        .pipe(uglifycss({ "uglycomments": true}))
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest('dist'))
}

function minificarHTML() {
    return gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
}

exports.default = series(minificarCSS, minificarHTML)