import { deromanize } from "../deromanize";

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

describe("decimalize", () => {
  testMap.forEach(([from, to]) => {
    it(`should replace ${from} with ${to}`, () => {
      const res = deromanize(from as string);
      expect(res).toBe(to);
    });
  });

  it("should turn LXIX into 69", () => {
    expect(deromanize("LXIX")).toBe(69);
  });

  it("should turn 1776 into MDCCLXXVI", () => {
    expect(deromanize("MDCCLXXVI")).toBe(1776);
  });

  it("should turn 3999 into MMMCMXCIX", () => {
    expect(deromanize("MMMCMXCIX")).toBe(3999);
  });

  it("should throw TypeError when not given a string", () => {
    expect(() => deromanize(1337 as any)).toThrow(
      new TypeError("Expected a string")
    );
  });
});
