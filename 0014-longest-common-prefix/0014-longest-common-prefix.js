/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if(strs.length === 0) return "";

    let prefix = "";
    let firstWord = strs[0];

    for(let i = 0; i < firstWord.length; i++){
        let char = firstWord[i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char){
                return prefix;  // stop when mismatch
            }
        }
        prefix += char;
    }

    return prefix;
};