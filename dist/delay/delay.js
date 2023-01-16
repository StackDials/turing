function delay(func, ms, ...args) {
    if (typeof func !== "function") {
        throw new TypeError("Expected a function");
    }
    return setTimeout(func, +ms, ...args);
}
export default delay;