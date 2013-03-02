var pad = "00";
var n = '9';
var result = (pad + n)
    .slice(-pad.length);
debug(result)
//http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}
debug(pad2(9))