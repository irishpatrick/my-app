var gulp = require("gulp");
var typescript = require("gulp-typescript")
var project = typescript.createProject("tsconfig.json");

gulp.task("default", ()=>
{
    return project.src()
    .pipe(project())
    .js.pipe(gulp.dest("./dist/js"));
});