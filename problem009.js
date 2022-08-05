/*
 1. Write a functiom called make_avg() which will take three integers 
    and return the average of those values.
*/

// Write your program here.

// ###### Solution ########


function make_avg(bangla, math, english) {
    const total = bangla + math + english;
    const average = total / 3;

    return average;
}

const myResult = make_avg(65, 67, 80);

console.log(myResult.toFixed(2));
