var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function(){
	return 	gulp.src('src/**/*.ts')
			.pipe(ts(
				{
					target : "es5",
					module: "amd"
				}
			))	
			.pipe(gulp.dest('build'));
});