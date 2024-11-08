const removeFromArray = function(array, ...toBeRemoved) {
    for (let x = 0; x <= toBeRemoved.length; x++) {
        const index = array.indexOf(toBeRemoved[x]);
        if (index > -1) {
            array.splice(index, 1);
            x--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
