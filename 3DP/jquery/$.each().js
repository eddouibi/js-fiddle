#!/usr/bin/env node
//http://api.jquery.com/each/
var $ = require('jquery');
$.each([10,11,12,13], function (i,v) {
    console.log(i+":"+v)
});