#!/usr/bin/env node
//http://api.jquery.com/attr/
var $ = require('jquery');
var html="<ul><li name='li1'></li><li></li></ul>"
$("li",html).each(function (i,li) {
    var name=$(li).attr("name");
    if (name) {
        console.log($(li).attr("name"))
    }
    else {
        console.log("not exists")
    }
});