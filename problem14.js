/*
 1. Write a function that will take a fullname with LowerCase and show the 
    output as UpperCase.
*/

// Write your program here.

//#### Solution ####

function showName(name) {
    const myName = name.toUpperCase();
    console.log(myName);
    return myName
}

showName("md rubel ahmed rana");
showName("md. mohin uddin rubel");
showName("md bodrul amin mahin");
showName("md najim uddin helal");
