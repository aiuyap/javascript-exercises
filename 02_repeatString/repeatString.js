const repeatString = function(str, mult) {
    let word = "";
    if (mult < 0)
        return "ERROR"

    for (let i = 0; i < mult; i++) {
        word += str;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
