describe("import ES modules", () => {
  it("should be able to import", async () => {
    const module = await import("../../es/index.mjs");
    expect(module.deromanize).toBeDefined();
    expect(module.deromanizeText).toBeDefined();
    expect(module.matchDecimals).toBeDefined();
    expect(module.matchRomans).toBeDefined();
    expect(module.romanize).toBeDefined();
    expect(module.romanizeText).toBeDefined();

    expect(module.deromanize("XVI")).toBe(16);
    expect(module.deromanizeText("This is XVI")).toBe("This is 16");
    expect(module.romanize(16)).toBe("XVI");
    expect(module.romanizeText("This is 16")).toBe("This is XVI");
  });
});
