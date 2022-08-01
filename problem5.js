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

// finding the index of Banana
var bananaIndex = fruits.indexOf("Banana");
// Replace the Banana with the Mango
fruits[bananaIndex]= "Mango";

// Removing "Orange"
fruits.pop();

// Adding "Watermelon"
fruits.push("Watermelon");

console.log(fruits);