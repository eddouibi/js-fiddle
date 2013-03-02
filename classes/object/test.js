var json = {
    "filename": "fullpath"
};
debug(json.filename)
debug("iterate:")
for (var key in json) {
    debug(key + ' : ' + json[key])
}