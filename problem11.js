/*
 1. Write a functiom called odd_even() which takes an integer value and tells
    weather value is odd or even.
    ## You need to do it 4 ways ##
     1. Has return + Has parameter
     2. No return + Has parameter
*/

// Write your program here.

// ###### Solution-1 ########

function odd_even(number) {
   if (number % 2 == 0) {
      return "This is an Even number"
   } else{
      return "This is an Odd number"
   }
};

const myResult = odd_even(44);
console.log(myResult);



// ###### Solution-2 ########

// This is function will return True for Even and  False for Odd.
function oddEeven(number2) {
   if (number2 % 2 == 0) {
      return true
   } else{
      return false
   }
};

const myResult2 = oddEeven(41);
console.log(myResult2);