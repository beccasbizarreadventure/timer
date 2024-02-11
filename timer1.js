const numberCompare = function(a, b) {
  return a - b;
};

const timer = function(timedArray) {

  if (timedArray.length === 0) {
    throw new Error("Not a valid input"); // throws an error if no numbers inputted into the array
  }

  timedArray.join();
  timedArray.sort();
  const numberOrder = timedArray.sort(numberCompare); // makes sure '10' comes after '2'

  for (let i = 0; i < numberOrder.length; i++) {

    if (typeof numberOrder[i] !== "number") { // skips any non number characters
      continue;
    }
    if (numberOrder[i] < 0) { // skips any negative numbers
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (i * 1000));
  }

};

// SAMPLE TEST CASES //

// const testArray = [4, 5, 3, 8];
// timer(testArray);
// const testArray1 = ["a", "r", 4, 7, 3];
// timer(testArray1);
// const testArray2 = [-1 ,-2 , 6, 7, 10];
// timer(testArray2);
// const testArray3 = [];
// timer(testArray3);
