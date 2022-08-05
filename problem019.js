/*
 1. Write a function that will take a year (in number) as parameter and tell weather 
    year is a leap-year or not a leap-year.
*/

// Write your program here.

// #### Solution ####

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log(`This is a leap year: ${year}`);
    } else{
        console.log(`This is not a leap year: ${year}`);
    }
}

isLeapYear(1952);
isLeapYear(1953);
isLeapYear(2019);
isLeapYear(2020);