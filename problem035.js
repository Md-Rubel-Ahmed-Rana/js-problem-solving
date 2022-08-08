/*
    # Suppose you have an array of numbers with positive(5) and negative(-5).
        <============= Project Requirement ================>
        1. Write a function called "getPositiveNumber".
        2. Check each value weather value is positive or negative 
           by using for loop.
        3. If you get negative number, then stop the loop.
        4. Return which numbers, those you got before stoping loop or
           before getting negative number.
        5. Positive numbers will be store in a new Array
        6. Retured numbers (positive) should be shown on console.
*/

// Write your program here.

// #### Solution ####

const getPositiveNumber = (numbers) => {
    let positiveNumbers = [];
     for (let i = 0; i < numbers.length; i++) {
         const element = numbers[i];
         if (element > 0) {
             positiveNumbers.push(element)
         } else{
             break;
         }
     }
     return positiveNumbers;
 };
 
 const numbers = [5,5,2,1,6,-3,3,-6, 7, 8, 9];
 const gerPositiveNumber = getPositiveNumber(numbers);
 console.log(gerPositiveNumber);
