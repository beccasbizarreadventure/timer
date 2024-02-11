const numberCompare = function(a, b) {
  return a - b;
};

const timer = function(timedArray) {
  timedArray.join();
  timedArray.sort();
  const numberOrder = timedArray.sort(numberCompare);
  for (let i = 0; i < numberOrder.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (i * 1000));
  }
}


const testArray = [10, 3, 5, 15, 9];
timer(testArray);