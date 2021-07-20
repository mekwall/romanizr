import { deromanize } from "./deromanize";
import { matchRomans } from "./matchRomans";

export function deromanizeText(str: string): string {
  const matches = matchRomans(str);
  let replacedStr = str;
  for (const match of matches) {
    const matchLoc = match.index;
    const matchLen = match[0].length;
    replacedStr =
      str.substr(0, matchLoc) +
      deromanize(match[0]) +
      str.substr(matchLoc + matchLen);
  }
  return replacedStr;
}
