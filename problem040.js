/*
  1. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
     return/get all the elements which are divisible by 10 using
     array.filter() method.
*/

// Write your program here.

// #### Solution ####
const myArray = [33, 50, 79, 78, 90, 101, 30 ];
const result = myArray.filter(num => num % 10 == 0);
const result2 = myArray.filter((num) => num % 10 == 0);
console.log(result);
console.log(result2);