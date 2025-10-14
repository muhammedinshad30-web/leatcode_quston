/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 let a=x;
    let arr=[];
    while (a > 0 ) {
        arr.push(a%10)
        a=Math.floor(a/10)
    }
    let b=x.toString()
    let c=arr.join("")
    if(b===c){
        return true
    }else if(x===0){
        return true
    }
    else{
       return false
    }
}