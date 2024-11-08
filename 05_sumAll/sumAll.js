const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    let totalSum = 0;
    let firstNum = num1;
    let secNum = num2;
    if ( num1 > num2 ) {
        firstNum = num2;
        secNum = num1;
    }
    for (; firstNum <= secNum; firstNum++) {
        totalSum += firstNum;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
