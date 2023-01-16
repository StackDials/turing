function delay(func: any, ms: number, ...args: any[]): NodeJS.Timeout {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(func, +ms, ...args);
}

export default delay;