function unixpath(path) {
    return path.replace(" ", "\\ ")
}
debug(unixpath("/etc/long name.txt"))