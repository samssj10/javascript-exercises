const palindromes = function (inputString) {
  let processedInputString = inputString
    .replaceAll(/[\p{P}\s]/gu, "")
    .toLowerCase();
  let reversedString = processedInputString.split("").reverse().join("");
  return processedInputString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
