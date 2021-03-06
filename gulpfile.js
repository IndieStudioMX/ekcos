'use strict';

var gulp     = require('gulp'),
	connect  = require('gulp-connect'),
	stylus   = require('gulp-stylus'),
	nib      = require('nib'),
	jshint   = require('gulp-jshint'),
	stylish  = require('jshint-stylish'),
	inject   = require('gulp-inject'),
	wiredep  = require('wiredep').stream,
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	historyApiFallback = require('connect-history-api-fallback');

//Busca en las carpetas de estilos y javascript los archivos que hayamos creado para inyectarlos en el index.html

gulp.task('inject', function () {
	var sources = gulp.src(['./app/scripts/**/*.js','./app/stylesheets/**/*.css']);
	return gulp.src('index.html', {cwd: './app'})
		.pipe(inject(sources, {
			read: false,
			ignorePath: '/app'
		}))
		.pipe(gulp.dest('./app'));
});

// Inyecta las librerías que instalaremos vía Bower
gulp.task('wiredep', function () {
	gulp.src('./app/index.html')
		.pipe(wiredep({
			directory: './app/lib'
		}))
		.pipe(gulp.dest('./app'));
});

//Servidor Web de Desarrollo
gulp.task('server', function () {
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true,
		middleware: function (connect, opt) {
			return [historyApiFallback];
		}
	});
});

//Busca errores en el JS y nos lo muestra en pantalla
gulp.task('jshint', function () {
	return gulp.src('./app/scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

// Comprime imágenes jpg, png y svg
gulp.task('imagemin', function () {
	return gulp.src('./app/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist'))
})

//Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function (){
	gulp.src('./app/stylesheets/main.styl')
		.pipe(stylus({ use: nib(), compress: true }))
		.pipe(gulp.dest('./app/stylesheets'))
		.pipe(connect.reload())
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload())
}); 

// Vigila los cambios que se produzcan en el código y lanza las tareas relacionadas

gulp.task('watch', function () {
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
	gulp.watch(['./bower.json'], ['wiredep']);
	gulp.watch(['./app/images/**/*.jpg', './app/images/**/*.png', './app/images/**/*.svg'], ['imagemin']);
});

gulp.task('default', ['server', 'inject', 'wiredep', 'watch']);