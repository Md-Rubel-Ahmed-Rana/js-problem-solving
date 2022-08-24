/*
  1.Write an arrow function where it will do following:
    a. It will take two array inputs
    b. Combine the two arrays and assign them in a new array
    c. Find the maximum number from the new array and return the result
*/
// Write your program here.
// #### Solution ####

const getMaxNumber = (array1, array2) => {
    const array3 = [...array1, ...array2];
    const maxNumber = Math.max(...array3);

    return maxNumber;
}

const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10];
const result = getMaxNumber(array1, array2);
console.log(result);