var gulp = require('gulp');
var jimp = require("gulp-jimp-resize");
const image = require('gulp-image');

// Copy HTML into dist
gulp.task('copyHTML', function () {
	gulp.src('*.html')
		.pipe(gulp.dest('dist'))
});

// Copy CSS into dist
gulp.task('copyCSS', function () {
	gulp.src('css/*')
		.pipe(gulp.dest('dist/css'))
});

// Copy data into dist
gulp.task('copyData', function () {
	gulp.src('data/*')
		.pipe(gulp.dest('dist/data'))
});

// Copy JS into dist
gulp.task('copyJS', function () {
	gulp.src('js/*')
		.pipe(gulp.dest('dist/js'))
});

// Resize and Optimize Images
gulp.task('image', function () {
  gulp.src('img/*.jpg')
  	.pipe(jimp({
  		sizes: [
            {"width": 500}
        ]
  	}))
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['copyHTML', 'copyCSS', 'copyData', 'copyJS', 'image']);