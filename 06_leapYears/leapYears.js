const leapYears = function(year) {
    const divBy4 = year % 4;
    const divBy100 = year % 100;
    const divBy400 = year % 400;

    if (divBy4 === 0) {
        if (divBy100 === 0 && divBy400 !== 0) {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
