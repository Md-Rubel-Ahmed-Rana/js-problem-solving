/*
 ** Write two function which will convert Celsius to Fahrenheit
    and Fahrenheit to Celsius
*/

// This function will convert Celsius to Fahrenheit
function CtoF(celsius) {
    // Theory of Celsius to Fahrenheit: (0°C × 9/5) + 32 = 0°F
    const getFahrenheit = (celsius * 9/5) + 32;
    return getFahrenheit;
}

// It will show the output as Celsius
const fahrenheit  = CtoF(1);
console.log(fahrenheit.toFixed(2),"°F");



//=============================================
// This function will convert Fahrenheit to Celsius 
function FtoC(fahrenheit) {
    // Theory of Fahrenheit to Celsius:  (0°F - 32) × 5/9 = 0°C
    const getCelsius = (fahrenheit - 32) * 5/9;
    return getCelsius;
}

// It will show the output as fahrenheit
const celsius  = CtoF(33.8);
console.log(celsius,"°C");