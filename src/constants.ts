export const DECIMALS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
export const ROMANS = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

// O'Reilly Strict
// modified to not match empty strings ([^ ]) and added a negative lookbehind to not partially match invalid numerals
// https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
// This doesn't work since it matches some empty strings
export const ROMANS_RXP =
  /(?<![MDCLXVI])(?=[MDCLXVI])M{0,3}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})[^ ]\b/g;

export const DECIMALS_RXP = /\b([1-3]?[0-9]?[0-9]?[0-9])\b/g;
