/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla.

## Input ##
The first line of the input is the marks of the five subjects mentioned above, respectivly.

## Output ##
Print the result in 2 decimal places.

# sample input: 75.25, 65, 80, 35.45, 99.50
# Output: 71.04
*/

// Write your program here.

// Declaring necessary variable
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;


// sum the total number of subjects
var subjects = 5
// sum the total marks
var totalMarks = math +  biology + chemistry + physics + bangla;

// getting average of marks
var average = totalMarks / subjects;

// getting average for 2 decimal places
var result = average.toFixed(2)

// console.log(result);