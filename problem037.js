/*
   1. Write an arrow function where it will do following:
     a. It will take an array of numbers
     b. Square each element
     b. Calculate the sum of squared elements
     c. Return the average of the sum
*/

// Write your program here.

// #### Solution ####

const getAverageOfSquaredSum = (numbers) => {
    let squaredValue = [];
    let getSumOfSquaredValue = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const doSquare = element * element;
        squaredValue.push(doSquare)
    }

    for (let i = 0; i < squaredValue.length; i++) {
        const element = squaredValue[i];
        getSumOfSquaredValue += element; 
    }
    const squaredValueLength = squaredValue.length;
    const averageString = (getSumOfSquaredValue / squaredValueLength).toFixed(2);
    const average = parseFloat(averageString)
    return average;
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const result = getAverageOfSquaredSum(numbers);
console.log(result);