/*
 1. You are given three numbers 13,, 79 and 45. Write a program that 
    will   print the largest number using if-else.

 2. You are given a triangle with the sides 9, 8, 9. Write a program to 
    check the weather a triangle is Isossceles or not using if-else.
          Isosceles => two sides are equal
*/

// Write your program here.

// ###### Solutions-1 ########

// initial variable for marks
var num1 = 13;
var num2 = 79;
var num3 = 45;


// Here I am finding the largest number.
if (num1 > num2 && num1 > num3) {
   console.log(`The largest number is: ${num1}`);
} else if(num2 > num1 && num2 > num3) {
   console.log(`The largest number is: ${num2}`);
} else{
   console.log(`The largest number is: ${num3}`);
}

// ===================================
// ###### Solutions-2 ########

// initial variable for sides
var height = 9;
var land = 8;

// Here is using the Theory of Triangle
var triangleArea = (land * height) / 2;

console.log(`Triangle Area is: ${triangleArea}`);

// ###### Solutions-2 alternative ########
 var side1 = 9;
 var side2 = 8;
 var side3 = 9;

 if (side1 == side2 || side1 == side3 || side2 == side3) {
   console.log("This is an Isosceles Triangle");
 } else{
   console.log("This is not an Isosceles Triangle");
 }