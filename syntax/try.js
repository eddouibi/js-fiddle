try {
    var i = 1 + 1
    eval(code)
} catch (e) {
    console.log("e.name=" + e.name)
    console.log("e.number=" + e.number)
    console.log("e.message=" + e.message)
} finally {
    console.log("finally")
}
try {
    var i = 1 + 1
    eval(code)
} catch (e) {
    debug("e.name=" + e.name)
    debug("e.number=" + e.number)
    debug("e.message=" + e.message)
}