/*
 1. Write a function that will take the "firstName" and lastName as parameter
    and show the fuulName in one line.
*/


// Write your program here.

//#### Solution ####

function fullName(firstName, lastName) {
    const fullName = firstName + " " + lastName
    return fullName
}

const getName = fullName("Md Rubel", "Ahmed Rana");
console.log(getName);


