import fizzBuzz from "./fizzBuzz";

describe("Fzz buzz", () => {
  test("returns 'zero' for input of 0", () => {
    expect(fizzBuzz(0)).toBe("zero");
  });

  test("returns fizz for numbers with multiply of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(18)).toBe("fizz");
    expect(fizzBuzz(24)).toBe("fizz");
    expect(fizzBuzz(48)).toBe("fizz");
    expect(fizzBuzz(93)).toBe("fizz");
    expect(fizzBuzz(1236)).toBe("fizz");
  });
});