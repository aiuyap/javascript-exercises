const reverseString = function(string) {
    let reversed = "";
    let stringCount = string.length;
    for (; stringCount >= 0; stringCount--) {
        reversed += string.charAt(stringCount);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
