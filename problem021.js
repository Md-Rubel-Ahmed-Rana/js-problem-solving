/*
 ** Write a function which will give the factorials of 5,8,12.
*/

// Write yor program here.

// #### Solution ####

function factorials(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
    }
    return sum
}

// 1*2*3*4*5 = 120
const factorialOf5 = factorials(5);
console.log(factorialOf5);


const factorialOf8 = factorials(8);
console.log(factorialOf8);

const factorialOf12 = factorials(12);
console.log(factorialOf12);