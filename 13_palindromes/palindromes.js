const palindromes = function (str) {
    str=str.toLowerCase()
    let str1 = '';
    let punctuations = ['.', ',', '!', '?', ':', ';', '-', '_', '"', "'", '(', ')',' '];
    let cleanedstr = ''
    for(let i in str){
        if(punctuations.includes(str[i])){
           
            continue
        }
        cleanedstr += str[i];
        str1 = str[i]+str1
    }
    
    return cleanedstr == str1
};

// Do not edit below this line
module.exports = palindromes;
