
//turn str into a 32-bit signed integer

      /* Given Algo
        1.Whitespace: Ignore any leading whitespace (" "
        2. Signedness: Determine the sign by checking if the next character is 
        '-' or '+', assuming positivity is neither present.
        3. Conversion: Read the integer by skipping leading 
        zeros until a non-digit character is encountered or the 
        end of the string is reached.
         If no digits were read, then the result is 0.
        4. Rounding: If the integer is out of the 32-bit signed 
         integer range [-231, 231 - 1], then round the integer to 
         remain in the range. Specifically, integers less than -231 
         should be rounded to -231, and integers 
         greater than 231 - 1 should be rounded to 231 - 1.
        */
    /* 
         Edge Cases: 
        Check if white space exists "_____"
            - if it does ignore move on
            - if it doesn't
        Check if "-" or "+ " exists
            - if it does store
            - if it doesn't assume positive
        CHeck if "0" exist move on until a non-digit character is encountered or you reach a string
        0-1" ("0" is read in; reading stops because the next character is a non-digit)
        if 

    
    */
    /* 
    Coding Idea
    I need to break the string apart and read each item individually
    - once I can loop through each individual item I can check and store and return the stored solution
    I turn item into integers
    - turn any char to zero - Reading stops at the first non-digit character 'w'.

    
    */

    /*
    Learning:
    Three-pointer problem you need to track, assume positive, and store the resulting integeD
    */

function myAtori(s) {
       //Check for whitespace "___"
       s = s.trim()
    //check for whitespace in str 
    if(s === " "){
        return 0;
    }

    //initialize variables
    let sign = 1 // assume positive
    let index = 0 // track position
    let num = 0 // store result

    //Check Edge Cases
    if(s[index] === '-') {
        sign = -1; //store negative
        index++
    }else if(s[index] === '+') {
        index++ //store positive sign 
    }
 



    //pass to number and skip leading zeros

    while (index < s.length && isDigit(s[index])) {
        //Create a var to convert char to num
        const digit = s[index] - '0';
        // Check for overflow/underflow
        if (num > Math.floor((2147483647 - digit) / 10)) {
            return sign === 1 ? 2147483647 : -2147483648; // Return limits
       
        }
        // note helperFunction being used
        num = num * 10 + digits;
        index++
    }
    //Apply sign
    num *= sign

    return num; // Return the parsed number , or 0 if no digits were found
}


//Helper function to check if a char is a digt 
     function isDigit(char) {
        return char >= '0' && char <= '9';
     }

console.log(myAtori("42"))
console.log(myAtori("words 42")); 
console.log(myAtori("   -42")); 



    
