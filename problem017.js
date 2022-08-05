/*
 1. Write a function that will take an array with 1-20 numbers randomly and will 
    arrange those numbers chronologically.
*/

// Write your program here.

//#### Solution ####

const myArr2 = [5, 6, 2, 4, 7, 9, 1, 3, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

myArr2.sort(function(a,b){
    return a-b
});

console.log(myArr2);

