import isFalsy from "../isFalsy";

function isTruthy(value: any): boolean {
  return !isFalsy(value);
}

export default isTruthy;