"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var bourbon = require("node-bourbon");
var neat = require("node-neat");

/**
 * SCSS with bourbon neat
 * npm i gulp-jade node-bourbon node-neat --save
 */
class Jade{
    constructor(path){
        this.path = path;
    }

    build(options){
        options = Object.assign({},{
            locals:{
                staffs: require("../../data/staff.js"),
                booth: require("../../data/booth.js"),
                sponsors: require("../../data/sponsor.js"),
                sessions: require("../../data/sessions.js"),
                ltList: require("../../data/lt.js"),
                photos: require("../../data/photo.js"),
                blogs: require("../../data/blog.js"),
                staffBlogs: require("../../data/staffBlog.js"),
                sessionDoc: require("../../data/sessionsDoc.js")
            },
            pretty:true
        },options);

        gulp.src([
            `${this.path.src}assets/tmpl/**/*.jade`,
            `!${this.path.src}assets/tmpl/**/_*`,
        ])
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.jade(options))
        .pipe(gulp.dest(`${this.path.dest}/`));
    }

    watch(tasks){
        gulp.watch([
            `${this.path.src}assets/tmpl/**/*.jade`,
        ],tasks)
    }
}

module.exports = function(path){
    return new Jade(path);
};
