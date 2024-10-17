function palidrome(x) {
//to solve palidrome you must check that each num matches
//you can use two-pointer method
//set up two-pointer method like so

x = x.toString().split('')
let start = 0
let end = x.length-1;  

// x is a number and you need to check each individual digit
//turn each number into a str to do str techniques



//check if digits match
//use while loop for easy decramenting and incrementing the pointers
while(start < end){
    if(x[start] !== x[end]){
        return false
    }
    start++
    end--
}
return Number(x.join(''))
}

const x = 171
console.log(palidrome(x))