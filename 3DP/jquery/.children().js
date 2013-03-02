#!/usr/bin/env node

var $ = require('jquery');
var html = '<div><table>\n\
    <tr id="tr1"><td>td1</td><td>td2</td></tr>\n\
    <tr id="tr2"><td>td1</td><td>td2</td></tr>\n\
    <tr id="tr3"><td>td1</td><td>td2</td></tr>\n\
</table></div>'
$("tr",html).each(function (i,tr) {
    console.log(tr.id)
    console.log($(tr).children("td").eq(0).text())
});