import validator from './passwordValidator';

describe("Password validator", () => {
    test('Empty string', () => {
        expect(validator("")).toBe(false);
    });

    test('return true given a password 8 chr or longer, a letter, a number', () => {
        expect(validator("1234567a")).toBe(true);
        expect(validator("1234567A")).toBe(true);
        expect(validator("12asdas567A")).toBe(true);
    });

    test('return false given a password 8 chr , no letters', () => {
        expect(validator("12345678")).toBe(false);
    });
});
