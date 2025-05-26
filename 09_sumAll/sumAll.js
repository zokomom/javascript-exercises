const sumAll = function(startRange,endRange) {
    let sum = 0
    if(startRange<0
        ||endRange<0
        ||startRange%1!=0
        ||endRange%1!=0
        ||typeof startRange === "string"
        ||typeof endRange === "string"
        ||typeof startRange != "number" 
        ||typeof endRange != "number"){
        return "ERROR"
    }
    if(startRange>endRange){
        let temp = startRange
        startRange=endRange
        endRange=temp
    }
    for(let i = startRange; i<=endRange; i++){
        sum += i;     
    }
return sum
};

// Do not edit below this line
module.exports = sumAll;
