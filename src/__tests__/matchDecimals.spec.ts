import { matchDecimals } from "../matchDecimals";
import allPoss from "./allPossibilities.json";

describe("matchDecimals", () => {
  it("should match I Spit on Your Grave 3: Vengeance is Mine", () => {
    const matches = matchDecimals("I Spit on Your Grave 3: Vengeance is Mine");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("3");
  });

  it("should match Star Wars: Episode 8 - The Last Jedi", () => {
    const matches = matchDecimals("Star Wars: Episode 8 - The Last Jedi");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("8");
  });

  it("should match This is Part 3 of 6", () => {
    const matches = matchDecimals("This is Part 3 of 6");
    expect(matches?.length).toBe(2);
    expect(matches?.[0][0]).toBe("3");
    expect(matches?.[1][0]).toBe("6");
  });

  it("should match What happened back in 1776?", () => {
    const matches = matchDecimals("What happened back in 1776?");
    expect(matches?.length).toBe(1);
    expect(matches?.[0][0]).toBe("1776");
  });
});
