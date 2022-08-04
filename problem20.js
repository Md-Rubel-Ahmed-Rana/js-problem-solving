/*
   ### Main target: to get the summation of all odd numbers of an array.

 1. Write a function that will take an Array as parameter and give all the 
    Odd numbers from this array as output.

    2. 
*/

// Write your program here.

// #### Solution-1 ####
// This function will give all the odd numbers.
function getOddNumberOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element)
        }
    }
    return oddNumbers 
}

const getOddNumbers = getOddNumberOfAnArray([24,13,25,67,20,10,33]);
console.log("Those are expected odd numbers: ", getOddNumbers);


// #### Solution-2 ####
// This function will give the summation of all the odd numbers array.
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
    }
    return sum
}

const getSummation = getSumOfAnArray(getOddNumbers);
console.log("Summation of all Odd numbers:", getSummation);
