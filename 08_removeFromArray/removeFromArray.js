const removeFromArray = function (arr, ...args) {
  //   for (const item of args) {
  //     arr = arr.filter((curr) => curr !== item);
  //   }
  //   return arr;
  let newArr = [];
  arr.forEach((element) => {
    if (!args.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
