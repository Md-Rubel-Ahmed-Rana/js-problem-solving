/*
You and your friends Tom, Jane, Peter, John got their final exam result.
Your total score is 85, Tom's total score is 66, Jane's total score is 95,
Peter's total score is 56, John's total score is 40.

============ Grading Chart is below ==========
           80 or above A+ grade
           70 or above A grade
           60 or above B grade
           50 or above C grade
           40 or above D grade
           30 or less F grade
## Write a program to find your and your friends' grades using if-else.
*/

// Write your program here.

// ###### Solutions ########

// initial variable for marks
// Write your Marks here to see your Grade
var marks = 80;

if(marks >= 80){
    console.log( `You have got "A+"`);
} else if(marks >= 70){
    console.log( `You have got "A"`);
} else if(marks >= 60){
    console.log( `You have got "B"`);
} else if(marks >= 50){
    console.log( `You have got "C"`);
} else if(marks >= 40){
    console.log( `You have got "D"`);
}else{
    console.log( `You have got "F"`);
}

// I have got "A+"
// Tom has got "B"
// Jane has got "A+"
// Peter has got "C"
// John has got "D"
