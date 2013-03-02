#!/usr/bin/env node

var $ = require('jquery');
var html = '<div><table>\n\
    <tr id="tr1"><td>tr1 td1</td></tr>\n\
    <tr id="tr2"><td>tr2 td1</td></tr>\n\
    <tr id="tr3"><td>tr3 td1</td></tr>\n\
</table></div>'
var i = $("#tr3", html).index();
console.log(i);