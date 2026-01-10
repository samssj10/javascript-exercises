const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    while (n) {
      result *= n;
      n -= 1;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
