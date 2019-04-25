import {calculateCashBack} from "../lib.js";

test('should calculate total', () => {
    const expected = 9000;

    const result = calculateCashBack(0, 0, 30000);
    expect(result).toBe(expected);
})