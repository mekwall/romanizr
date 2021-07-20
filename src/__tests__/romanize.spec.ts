import { romanize } from "../romanize";

const testMap = [
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["VII", 7],
  ["VIII", 8],
  ["IX", 9],
  ["X", 10],
  ["XV", 15],
  ["XX", 20],
  ["XXX", 30],
  ["XL", 40],
  ["L", 50],
  ["XC", 90],
  ["C", 100],
  ["CD", 400],
  ["D", 500],
  ["CM", 900],
  ["M", 1000],
];

describe("romanize", () => {
  testMap.forEach(([to, from]) => {
    it(`should turn ${from} into ${to}`, () => {
      expect(romanize(from as number)).toBe(to);
    });
  });

  it("should turn 69 into MCM", () => {
    expect(romanize(69)).toBe("LXIX");
  });

  it("should turn 1776 into MDCCLXXVI", () => {
    expect(romanize(1776)).toBe("MDCCLXXVI");
  });

  it("should turn 3999 into MMMCMXCIX", () => {
    expect(romanize(3999)).toBe("MMMCMXCIX");
  });

  it("should throw TypeError when not given a number", () => {
    expect(() => romanize("foo" as any)).toThrow(
      new TypeError("Expected a number")
    );
  });
});
