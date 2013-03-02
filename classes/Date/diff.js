Date.prototype.addHours = function(h) {
    this.setHours(this.getHours() + h);
    return this;
}
var now=new Date();
var next=new Date().addHours(4);
console.log(now)
console.log(next)
var diff=next-now
console.log(diff)
console.log(typeof diff)
var minutes = Math.floor(diff / (60*1000));
console.log(minutes)