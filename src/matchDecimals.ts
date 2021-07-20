import { DECIMALS_RXP } from "./constants";

export function matchDecimals(str: string): RegExpExecArray[] {
  const matches: RegExpExecArray[] = [];
  let cur: RegExpExecArray | null;
  while ((cur = DECIMALS_RXP.exec(str)) !== null) {
    matches.push(cur);
  }
  return matches;
}
