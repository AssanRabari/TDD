import fizzBuzz from "./fizzBuzz";

describe("Fzz buzz", () => {
  test("returns 'zero' for input of 0", () => {
    expect(fizzBuzz(0)).toBe("zero");
  });
});