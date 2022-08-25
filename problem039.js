/*
  1.You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number. 
*/

// Write your program here.

// #### Solution-1 ####
// Using for loop
const oddNumbers = [1,3,5,7,9];
let evenNumbers = []
for (let i = 0; i < oddNumbers.length; i++) {
    const numbers = oddNumbers[i];
    evenNumbers.push(numbers + 1)
}
console.log(evenNumbers);


// #### Solution-2 ####
// Using map()
const evenNumber = oddNumbers.map(num => num + 1);
console.log(evenNumber);


