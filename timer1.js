const numberCompare = function(a, b) {
  return a - b;
};

const timer = function(timedArray) {
  timedArray.join();
  timedArray.sort();
  const numberOrder = timedArray.sort(numberCompare);

  // if (numberOrder.length === 0 ) {
  //   throw new Error('No valid inputs given')
  // };

  for (let i = 0; i < numberOrder.length; i++) {
    if (typeof numberOrder[i] !== "number") {
      continue;
    }
    if (numberOrder[i] < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('.');
    }, (i * 1000));
  }

//   setTimeout(() => {
//     console.log('\n');
//   }, (numberOrder.length - 1) * 50);
};

const testArray = [4, 5, 3, 8];
timer(testArray);
// const testArray1 = ["a", "r", 4, 7, 3];
// timer(testArray1);
// const testArray2 = [-1 ,-2 , 6, 7, 8];
// timer(testArray2);
// const testArray3 = [];
// timer(testArray3);
