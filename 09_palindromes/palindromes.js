const palindromes = function (str) {
    let removePunctuation = str.split("").filter((str) => {
        if (str === "," || str === " " || str === "." || str === "!") {
            return false;
        }
        return true;
    });

    const final = removePunctuation.join().toLowerCase();
    const reverse = removePunctuation.reverse().join().toLowerCase();

    if (final === reverse) {
        return true;
    }
    return false;
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
