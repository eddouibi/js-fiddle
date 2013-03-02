function obj() {
    debug(this)
    this.publicVar = 'public';
    var privateVar = 'private';
    this.someMethod = function() {
        alert('boo');
    }
}
var i = obj();
//debug(i.publicVar) //error! this undefined
var i = new obj(); //init this
debug(i.publicVar)
//public
debug(i.privateVar)
//undefined