/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let c=[]
    for(i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            c.push("FizzBuzz")
        }else if(i%5===0){
            c.push("Buzz")
        }else if(i%3===0){
            c.push("Fizz")
        }else{
            c.push(i+"")
        }
    }
        return c
};