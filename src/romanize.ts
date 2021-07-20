import { DECIMALS, ROMANS } from "./constants";

export function romanize(num: number): string {
  if (typeof num !== "number" || isNaN(num)) {
    throw new TypeError("Expected a number");
  }
  let roman = "";
  for (let i = 0; i < ROMANS.length; i++) {
    while (num >= DECIMALS[i]) {
      num -= DECIMALS[i];
      roman += ROMANS[i];
    }
  }
  return roman;
}
