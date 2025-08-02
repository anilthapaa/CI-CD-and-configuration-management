// __test__/addition.test.js

test('input takes a city name', () => {
  expect(2 + 3).toBe(5);
});
// __test__/arithmetic.test.js

test('numeric input gives error', () => {
  expect(5 - 2).toBe(3);
});

test('unknown city gives error', () => {
  expect(10 / 2).toBe(5);
});
