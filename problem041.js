/*
  1. You have an array [ 1, 9, 17, 22 ]. Add the all elements
     of this array and give output. Do this using for loop &
     array.reduce() method.
*/

// Write your program here.

// #### Solution-1 ####
// Using for loop
const array = [ 1, 9, 17, 22 ];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
}
console.log(sum);

// #### Solution-2 ####
// Using reduce() method
const getSum = array.reduce((prev, curr) => prev + curr, 0);
console.log(getSum);