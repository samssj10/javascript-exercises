const fibonacci = function (num) {
  if (typeof num === "string") {
    num = +num;
  }
  return num < 0 ? "OOPS" : num == 0 ? 0 : getFibonacciMember(num);
};

function getFibonacciMember(num) {
  let fiboList = [1, 1];
  if (num < 3) {
    return fiboList[num - 1];
  }
  let iterations = num - 2;
  while (iterations) {
    fiboList.push(fiboList.at(-1) + fiboList.at(-2));
    iterations--;
  }
  return fiboList[num - 1];
}

// Do not edit below this line
module.exports = fibonacci;
