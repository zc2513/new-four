//引入gulp文件
var gulp= require("gulp");
//引入js进行压缩的包：
var uglify=require("gulp-uglify");
//引入js文件进行合并的包：
var concat=require("gulp-concat");
//引入压缩css文件的压缩包
var cssnano= require("gulp-cssnano");
//引入压缩html文件的压缩包
var htmlmin= require('gulp-htmlmin');


//测试:环境运行---五大核心 -----设置gulp.task
gulp.task("text",function(){
	console.log("测试文件");
});
//压缩合并js文件
gulp.task("script",function(){//---------------------链式编程：
	//需要处理的文件：多个文件需要以数组的形式进行传参
	gulp.src(['test.js','tet.js'])
	//合并文件---里面传入合并后的文件名称：
	.pipe(concat('index.js'))
	//压缩文件：
	.pipe(uglify())
	//指定文件输出的路径
	.pipe(gulp.dest('./dest'))
});
//压缩css文件：
gulp.task("style",function(){
	//需要处理的文件--单个或者多个 多个使用数组的形式进行传参
	gulp.src(['one.css','two.css'])
	//合并文件----合并后的文件名：
	.pipe(concat('cc.css'))
	//压缩文件：
	.pipe(cssnano())
	//指定文件的输出路径---
	.pipe(gulp.dest('./css'))
});
//压缩html文件：
gulp.task('html',function(){
	//需要合并的文件的路径：
	gulp.src('1.html')
	//压缩文件
	.pipe(htmlmin({collapseWhitespace:true}))
	//指定文件输出的路径：
	.pipe(gulp.dest('./html'))
});
//检测文件的修改并在检测文件的时候执行其它文件：
gulp.task('watch',function(){
	//gulp.run('script');//每次watch监视执行一次就会立即执行gulp.run的任务；
	gulp.watch(['test.js','tet.js'],['script']);//------监视里面的两个文件，文件每次改变都会执行一次script任务
})

