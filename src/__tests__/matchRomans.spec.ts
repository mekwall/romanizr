import { matchRomans } from "../matchRomans";
import allPoss from "./allPossibilities.json";

describe("matchRomans", () => {
  it("should match I Spit on Your Grave III: Vengeance is Mine", () => {
    const matches = matchRomans("I Spit on Your Grave III: Vengeance is Mine");
    expect(matches?.length).toBe(2);
    expect(matches?.[0][0]).toBe("I");
    expect(matches?.[1][0]).toBe("III");
  });

  it("should match Star Wars: Episode VIII - The Last Jedi", () => {
    const matches = matchRomans("Star Wars: Episode VIII - The Last Jedi");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("VIII");
  });

  it("should match This is Part III of VI", () => {
    const matches = matchRomans("This is Part III of VI");
    expect(matches?.length).toBe(2);
    expect(matches?.[0][0]).toBe("III");
    expect(matches?.[1][0]).toBe("VI");
  });

  it("should match What happened back in MDCCLXXVI?", () => {
    const matches = matchRomans("What happened back in MDCCLXXVI?");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("MDCCLXXVI");
  });

  it("should match MMMCMXCIX is the biggest possible numeral", () => {
    const matches = matchRomans("MMMCMXCIX is the biggest possible numeral");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("MMMCMXCIX");
  });

  allPoss.forEach((pos) => {
    it(`should match ${pos}`, () => {
      const matches = matchRomans(`${pos}`);
      expect(matches?.length).toBe(1);
      expect(matches?.[0][0]).toBe(`${pos}`);
    });
  });

  it("should not match invalid MMLLVVDD", () => {
    const matches = matchRomans(`Does it match MMLLVVDD?`);
    expect(matches?.length).toBe(0);
  });

  it("should not match invalid XXLLVVDD", () => {
    const matches = matchRomans(`Does it match XXLLVVDD?`);
    expect(matches?.length).toBe(0);
  });

  it("should not match invalid MMMMDLVX", () => {
    const matches = matchRomans(`Does it match MMMMDLVX?`);
    expect(matches?.length).toBe(0);
  });

  it("should not match invalid XVXDLMM", () => {
    const matches = matchRomans(`Does it match XVXDLMM?`);
    expect(matches?.length).toBe(0);
  });

  it("should not match invalid MMMCCMLXXV", () => {
    const matches = matchRomans(`Does it match MMMCCMLXXV?`);
    expect(matches?.length).toBe(0);
  });
});
