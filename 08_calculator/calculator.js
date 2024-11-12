const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, arr) => total += arr, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, arr) => total *= arr, 1)
};

const power = function(num, power) {
  let total = 1;
  for (let x = 1; x <= power; x++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
  if (num !== 0) {
    let total = 1;
    for (let x = num; num >= 1; num--) {
      total *= num;
    }
    return total;
  }
  return 1;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
