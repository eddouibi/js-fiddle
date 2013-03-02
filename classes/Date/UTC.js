// http://stackoverflow.com/questions/8047616/get-a-utc-timestamp-in-javascript
// Get a UTC timestamp in Javascript
var d = new Date();
var utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
//var utc = Date.UTC(2012, 1, 2, 12, 35, 40);
debug(utc)
var d = new Date(utc);
debug(d)