/*
  ## Suppose you have an array of some integer numbers.

 1. Write a function that will return the largest number from the array.
 2. Write a function that will return the lowest number from the array.
*/

// Write your program here.

// #### Solution-1 ####;
// Finding the Largest number
function getLargest(numbers) {
   let largest = numbers[0];

   for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element > largest) {
        largest = element
    }
   }
   return largest
};

const numbers = [167, 190, 120, 165, 137, 265];
const largestNumber = getLargest(numbers);
console.log(largestNumber);



//======================================
// #### Solution-2 ####;
// Finding the Smallest number
function getSmallest(numbers) {
   let lowest = numbers[0];

   for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];

    if (element < lowest) {
        lowest = element
    }
   }
   return lowest
};

const numbers2 = [167, 190, 120, 165, 137, 265];
const smallestNumber = getSmallest(numbers);
console.log(smallestNumber);