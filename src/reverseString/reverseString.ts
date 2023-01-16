import isString from "../isString";

function reverseString(value: string): string {
  if (!isString(value)) return "";
  return value.split("").reverse().join("");
}

export default reverseString;
