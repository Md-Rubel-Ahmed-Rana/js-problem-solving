/*
    1. Write a function that will convert Centimter to Meter.
    2. Function name will be "centimeterToMeter".
    3. This function will take Centimter as parameter.
    4. It will return inch as output.
*/

// Write your program here.

// #### Solution ####
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
};

const meter = centimeterToMeter(250);
console.log(meter);
