#!/usr/bin/env node
//http://api.jquery.com/each/
var $ = require('jquery');
var html="<html><div></div></html>"
console.log($("div",html).is(":visible"))
$("div",html).hide()

console.log($("div",html).is(":visible"))
