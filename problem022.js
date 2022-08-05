/*
 ** Write a function which will give the summation of a number.

*/

// Write yor program here.

// #### Solution ####


function sumOfSeries(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// # 1+2+3+4+5 = 15
const result1 = sumOfSeries(5);
console.log(result1);

// # 1+2+3+4+5+......100= 5050 
const result2 = sumOfSeries(100);
console.log(result2);