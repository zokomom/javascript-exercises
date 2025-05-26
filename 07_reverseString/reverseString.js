const reverseString = function(anyString) {
    let disposeArray = anyString.split("")
    let returnValue = ""
    for(let i = disposeArray.length-1; i>=0; i--){
        returnValue = returnValue + disposeArray[i]
    }
return returnValue
};

// Do not edit below this line
module.exports = reverseString;
