var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            PORT:3000,
            JWT_SECRET: 'test'
        },
        ignore: ['./node_modules/**']
    })
});