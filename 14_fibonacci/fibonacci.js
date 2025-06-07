const fibonacci = function(member) {
    if(member<0) return 'OOPS'
    if(member==0) return 0
    let a = 0
    let b = 1
    let fibonacci = 1
    for(let i = 1; i<member;i++){
        fibonacci = a+b
        a = b
        b = fibonacci
    }
    return fibonacci
};
console.log(fibonacci("3"))

// Do not edit below this line
module.exports = fibonacci;
