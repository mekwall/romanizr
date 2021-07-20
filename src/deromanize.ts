import { DECIMALS, ROMANS } from "./constants";

export function deromanize(str: string): number {
  if (typeof str !== "string") {
    throw TypeError("Expected a string");
  }
  const romanStr = str.toUpperCase();
  let num = 0;
  let iterations = romanStr.length;
  while (iterations--) {
    const idx1 = ROMANS.indexOf(romanStr[iterations]);
    const idx2 = ROMANS.indexOf(romanStr[iterations + 1]);
    const cumulative1 = DECIMALS[idx1];
    const cumulative2 = DECIMALS[idx2];
    num += cumulative1 < cumulative2 ? -cumulative1 : cumulative1;
  }
  return num;
}
