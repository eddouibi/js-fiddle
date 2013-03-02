function dirname(path) {
    return path.replace(/\\/g, '/')
        .replace(/\/[^\/]*\/?$/, '');
}
debug(dirname("/etc/hosts.txt"))