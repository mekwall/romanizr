import { ROMANS_RXP } from "./constants";

export function matchRomans(str: string): RegExpExecArray[] {
  const matches: RegExpExecArray[] = [];
  let cur: RegExpExecArray | null;
  while ((cur = ROMANS_RXP.exec(str)) !== null) {
    matches.push(cur);
  }
  return matches;
}
