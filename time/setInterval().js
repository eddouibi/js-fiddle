function func() {
    debug("func")
}
debug("hello")
try {
    window.setInterval(func, 1000);
} catch (e) {
    debug("e.name=" + e.name)
    debug("e.number=" + e.number)
    debug("e.message=" + e.message)
}