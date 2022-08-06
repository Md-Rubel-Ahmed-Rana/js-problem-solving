/*
    1. Write a program that will give Fibonacci series till 15th position.
     ## Your first two numbers are 0 and 1;
     ## Sample output: 0,1,1,2,3,5,8,13,21,34,55,89

    1. Write a program that will give Fibonacci series till 10th position.
     ## Your first two numbers are 3 and 4;
     ## Sample output:3,4,7,11,18,29,47,76,123,199,322
*/

// Write your program here.

//#### Solution-1 ####
// Starting index must start from 2 index inside the loop variable.
const fibonacci1 = [0,1];
for (let i = 2; i <= 15; i++) {
   fibonacci1[i] = fibonacci1[i-1] + fibonacci1[i-2]; 
};

console.log(fibonacci1);


//===========================
//#### Solution-2 ####
// Starting index must start from 2 index inside the loop variable.
const fibonacci2 = [3,4];
for (let i = 2; i <= 10; i++) {
   fibonacci2[i] = fibonacci2[i-1] + fibonacci2[i-2]; 
};

console.log(fibonacci2);