const removeFromArray = function(array, ...numToDelete) {
    return array.filter((val) => !numToDelete.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
