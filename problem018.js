/*
 1. Write function that will take two parameters as Inch and Feet.
    This is function will convert the Inch to Feet.

 2. John is web developer,  and he cycles to work. He knows the distance between his house and his office in miles. John want to measure the distance in kilometers. Now, Write a function that will convert Miles to Kilometers.
*/
// Write your program here.

// #### Solution-1 ####

function InchToFeet(inches) {
   const getFeet = inches / 12;
   return getFeet;
}

const feet = InchToFeet(436);
console.log(feet);



// #### Solution-2 ####

function mileToKilo(miles){
   const getKM = miles * 1.60934;

   return getKM;
}

const kilometer = mileToKilo(4);
console.log(kilometer);