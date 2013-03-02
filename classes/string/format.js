try {
    debug(1, 2, 3)
} catch (e) {
    debug("e.name=" + e.name)
    debug("e.number=" + e.number)
    debug("e.message=" + e.message)
} finally {
    debug("finally")
}