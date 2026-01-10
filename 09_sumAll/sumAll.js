const sumAll = function (a, b) {
  let sum = 0;
  let smaller_input, larger_input;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else if (a <= b) {
    smaller_input = a;
    larger_input = b;
  } else {
    smaller_input = b;
    larger_input = a;
  }
  for (let i = smaller_input; i <= larger_input; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
