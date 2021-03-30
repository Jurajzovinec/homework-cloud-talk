const main = require('./main');

test('Returns valid start index.', () => {
    expect(main.startRangeAtFieldIndex(1, 1)).toBe(0);
    expect(main.startRangeAtFieldIndex(1, 2)).toBe(7);
    expect(main.startRangeAtFieldIndex(1, 3)).toBe(14);
    expect(main.startRangeAtFieldIndex(2, 3)).toBe(15);
});

test('Returns valid stop index.', () => {
    expect(main.stopRangeAtFieldIndex(4, 1)).toBe(3);
    expect(main.stopRangeAtFieldIndex(5, 3)).toBe(18);
    expect(main.stopRangeAtFieldIndex(2, 2)).toBe(8);
    expect(main.stopRangeAtFieldIndex(7, 7)).toBe(48);
});

test('Returns correct sumUp of field yield.', () => {
    expect(main.sumOfRange(1, 1, 7, 7)).toBe(235);
    expect(main.sumOfRange(3, 3, 3, 3)).toBe(8);
    expect(main.sumOfRange(4, 2, 6, 2)).toBe(9);
    expect(main.sumOfRange(2, 7, 5, 7)).toBe(20);
});

