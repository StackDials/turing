function isNumber(value: any): boolean {
  if (typeof value === "number") {
    return value - value === 0;
  }
  if (typeof value === "string" && value.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
}

export default isNumber;
