function isNaNOrInfinity(value: any): boolean {
  return value * 0 !== 0;
}

export default isNaNOrInfinity;
