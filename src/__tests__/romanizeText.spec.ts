import { romanizeText } from "../romanizeText";

describe("romanizeText", () => {
  it("should replace I Spit on Your Grave 3: Vengeance is Mine", () => {
    const replacedStr = romanizeText(
      "I Spit on Your Grave 3: Vengeance is Mine"
    );
    expect(replacedStr).toBe("I Spit on Your Grave III: Vengeance is Mine");
  });

  it("should replace Star Wars: Episode 4 - A New Hope", () => {
    const replacedStr = romanizeText("Star Wars: Episode 4 - A New Hope");
    expect(replacedStr).toBe("Star Wars: Episode IV - A New Hope");
  });

  it("should replace Star Wars: Episode 8 - The Last Jedi", () => {
    const replacedStr = romanizeText("Star Wars: Episode 8 - The Last Jedi");
    expect(replacedStr).toBe("Star Wars: Episode VIII - The Last Jedi");
  });

  it("should replace In Year 2012 We Will All Die", () => {
    const replacedStr = romanizeText(
      "should replace In Year 2012 We Will All Die"
    );
    expect(replacedStr).toBe("should replace In Year MMXII We Will All Die");
  });
});
