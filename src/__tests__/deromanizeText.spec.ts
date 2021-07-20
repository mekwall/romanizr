import { deromanizeText } from "../deromanizeText";

describe("decimalizeTest", () => {
  it("should replace I Spit on Your Grave III: Vengeance is Mine", () => {
    const replacedStr = deromanizeText(
      "I Spit on Your Grave III: Vengeance is Mine"
    );
    expect(replacedStr).toBe("I Spit on Your Grave 3: Vengeance is Mine");
  });

  it("should replace Star Wars: Episode IV - A New Hope", () => {
    const replacedStr = deromanizeText("Star Wars: Episode IV - A New Hope");
    expect(replacedStr).toBe("Star Wars: Episode 4 - A New Hope");
  });

  it("should replace Star Wars: Episode VIII - The Last Jedi", () => {
    const replacedStr = deromanizeText(
      "Star Wars: Episode VIII - The Last Jedi"
    );
    expect(replacedStr).toBe("Star Wars: Episode 8 - The Last Jedi");
  });

  it("should replace In Year MMXII We Will All Die", () => {
    const replacedStr = deromanizeText(
      "should replace In Year MMXII We Will All Die"
    );
    expect(replacedStr).toBe("should replace In Year 2012 We Will All Die");
  });
});
