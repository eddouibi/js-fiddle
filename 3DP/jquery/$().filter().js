#!/usr/bin/env node

var $ = require('jquery');
var html = '<div>mess</div>'
//console.log($(html).filter("div").length)
//console.log($("div", html).length)
var html="<div>div</div><span>span</span>"
console.log($("<div>div</div>").filter("div").length)
console.log($("span",html).length)
console.log($(html,"span").length)
//console.log($("span",html).text())
