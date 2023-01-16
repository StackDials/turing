import { isOdd } from "../isOdd";

function isEven(value: any): boolean {
  return !isOdd(value);
}

export default isEven;
