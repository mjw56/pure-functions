var expect = require('expect');

// no side-effects, pure function
function square(n) {
  return n * n;
}

console.log(
  expect(square(2)).toEqual(4)
);
