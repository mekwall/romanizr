import { matchDecimals } from "./matchDecimals";
import { romanize } from "./romanize";

export function romanizeText(str: string): string {
  const matches = matchDecimals(str);
  let replacedStr = str;
  for (const match of matches) {
    const matchLoc = match.index;
    const matchLen = match[0].length;
    replacedStr =
      str.substr(0, matchLoc) +
      romanize(parseInt(match[0], 10)) +
      str.substr(matchLoc + matchLen);
  }
  return replacedStr;
}
