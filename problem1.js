/*
Harry's mom gave him and asked him to buy some oranges and apples.
Write a program to help Harry calculate how much money the shopkeeper will return.

### Input ###
The first line of the input is the Taka Harry's mom gave him.
The second line is the cost of 1kg of oranges and 1kg of apples.

### Output ###
1. Sample Input: 1000 Taka
2. Cost:700 Taka
3. Output: 300

*/

// Write your program here.

var totalAmount = 1000;
var oranges = 300;
var apples = 400;

var totalCost = oranges + apples;

var remainingAmount = totalAmount - totalCost;

console.log(remainingAmount);