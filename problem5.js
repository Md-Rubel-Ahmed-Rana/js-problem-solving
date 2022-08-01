/*
You are given an array
var fruits = ["Apple", "Banana", "Orange"];

Q-1: Find the index of "Banana" and replace in with "Mango";
Q-2: Remove "Orange" and add "Watermelon";
*/
// Write your program here.



// ###### Solutions ########

// Initializing  an Array
var fruits = ["Apple", "Banana", "Orange"];

// Replace the Banana with the Mango
fruits[1]= "Mango";

// Removing "Orange"
fruits.pop();

// Adding "Watermelon"
fruits.push("Watermelon");

console.log(fruits);