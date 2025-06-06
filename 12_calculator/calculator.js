const add = function(val1,val2) {
	return val1+val2
};

const subtract = function(val1,val2) {
	return val1-val2
};

const sum = function(val) {
	return val.reduce((acc,curr)=>acc+curr,0)
};

const multiply = function(val) {
  return val.reduce((acc,curr)=>acc*curr,1)
};

const power = function(val1,val2) {
	return val1**val2
};

const factorial = function(val) {
  let val1 = val
  let factor = 1;
  for(let i = 1; i<=val;i++){
    factor=factor*i
  }
  return factor
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
