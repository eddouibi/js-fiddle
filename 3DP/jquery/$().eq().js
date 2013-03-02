#!/usr/bin/env node

var $ = require('jquery');
var html = '<div><table id="t">\n\
    <tr id="tr1"><td>td1</td></tr>\n\
    <tr id="tr2"><td>td1</td></tr>\n\
    <tr id="tr3"><td>td1</td></tr>\n\
</table></div>'
console.log(
    $("table tr:eq(0)",html).text()
);