/*
 1. Write a functiom called foo() which prints "foo" and a function called 
    bar(). Call function bar() in the foo() function after printing. What will be the output?
*/

// Write your program here.

// ###### Solution ########


function foo() {
    console.log("before bar()");
    bar()
    console.log("after bar()");
}
function bar() {
    console.log("I am from bar()");
}

foo();

