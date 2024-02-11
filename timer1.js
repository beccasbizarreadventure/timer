const numberCompare = function(a, b) {
  return a - b;
};

const timer = function(timedArray) {
  timedArray.join();
  timedArray.sort();
  const numberOrder = timedArray.sort(numberCompare);
  if (numberOrder.length === 0 ) {
    throw new Error('No valid inputs given')
  };
  for (let i = 0; i < numberOrder.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (i * 1000));
  }
};

const testArray = [];
timer(testArray);