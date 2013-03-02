function obj() {
    this.v = 88
    this.func1 = function() {
        console.log("this.func1 " + this.
        v);
    }
    this.func2 = function() {
        console.log("this.func2 " + this.
        v);
        this.func1()
    }
}
var i = new obj(); //init this
i.func2()