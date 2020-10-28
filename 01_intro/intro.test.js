const { TestScheduler } = require("jest");
const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  test("Sum should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("Should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(4, 7)).toBeLessThanOrEqual(11);
  });

  test("Should sum 2 float values correctly", () => {
    expect(sum(1.1, 4.7)).toBeCloseTo(5.8);
  });
});

describe("Native Null function:", () => {
  test("Native null should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
