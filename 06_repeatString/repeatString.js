const repeatString = function(string,num) {
    if(num < 0) return "ERROR"
    let returnValue="";
    for(let i = 0; i<num; i++){
        returnValue = returnValue + string
    }
return returnValue
};

// Do not edit below this line
module.exports = repeatString;
