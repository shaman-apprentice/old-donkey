const { expect } = require('@jest/globals');
const quickMath = require('./quickMath');

describe('quickMath', () => {
  test('twoPlusTwo', () => {
    expect(quickMath.twoPlusTwo()).toBe('4');
  });

  test('minusOne', () => {
    expect(quickMath.minusOne()).toBe('3');
  });
});
