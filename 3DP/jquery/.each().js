#!/usr/bin/env node
//http://api.jquery.com/each/
var $ = require('jquery');
var html="<ul><li></li><li></li></ul>"
$("li",html).each(function (i,v) {
    console.log(i+":"+v)
});