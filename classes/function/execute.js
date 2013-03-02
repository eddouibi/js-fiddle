function func() {
    return "func result"
}

function execute(callback) {
    if (callback && typeof(callback) === "function") {
        // execute the callback, passing parameters as necessary
        return callback();
    }
}
execute(func)
debug(execute(func))