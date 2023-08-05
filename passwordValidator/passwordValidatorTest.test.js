import validator from './passwordValidator';

describe("Password validator", () => {
    test('Empty string', () => {
        expect(validator("")).toBe(false);
    });
});