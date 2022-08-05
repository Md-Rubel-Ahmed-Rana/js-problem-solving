/*
  1. Write functions that will tell you the interest, principal, 
     interest rate and time  of a certain amount of money.

  2. Show simple Interest:
     Interest = principal * interest rate * time;
*/

// Write your program here.

// ##### Solution-1 ######
// Simple solution
const principal = 5000;
const interestRate = 10;
const time = 6;
const interest = (principal * interestRate * time) / 100;
console.log(interest);


// ##### Solution-2 ######
// functional solution to get Interest
const getInterest = (p, r, n) => {
    /* Here: 
       i = interest
       p = principal
       r = interest rate (%)
       n = time
    */
    const interest = (p * r * n) / 100;
    return interest;
}

const myInterest = getInterest(5000, 10, 6);
console.log("My Interest=",myInterest);


// ##### Solution-3 ######
// functional solution to principal
const getPrincipal = (i, r, n) => {
    /* Here: 
       i = interest
       p = principal
       r = interest rate (%)
       n = time
    */
    const principal = i / ((r / 100) * n);
    return principal;
}

const myPrincipal = getPrincipal(3000, 10, 6);
console.log("My Principal=",Math.round(myPrincipal));


// ##### Solution-4 ######
// functional solution to Interest Rate
const getInterestRate = (i, p, n) => {
    /* Here: 
       i = interest
       p = principal
       r = interest rate (%)
       n = time
    */
    const interestRate = i / (p * n) * 100;
    return interestRate;
}

const myInterestRate = getInterestRate(1500, 3000, 5);
console.log("My Interest Rate=",myInterestRate);



// ##### Solution-4 ######
// functional solution to get Time
const getTime = (i, p, r) => {
    /* Here: 
       i = interest
       p = principal
       r = interest rate (%)
       n = time
    */
    const time = i / (p * r) * 100;
    return time;
}

const myTime = getTime(1500, 3000, 10);
console.log("My Time=",myTime);



// ##### Solution-5 ######
// Simple solution to get Compound Interest
const n = 3;
const p = 62500;
const r = 8;
const compound = p * Math.pow((1 + (r / 100)), n);
console.log("Compound is =", Math.round(compound));


// ##### Solution-6 ######
// functional solution to get Compound Interest

const getCompoundInterest = (p, r, n) => {
    const getCompound = Math.round(p * Math.pow((1 + (r / 100)), n));

    return getCompound
}

const myCompound = getCompoundInterest(62500, 8, 3);
console.log("My Compound =", myCompound);

