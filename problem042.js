/*

  1. const people = [
    {name: "Meean", age: 20},
    {name: "Rina", age: 15},
    {name: "Deena", age: 22},
  ]
  2. Follow above array of objects. So, you have 3 objects as
     array element. Can you find out the total sum from here?
     20 + 15 + 22 = 57 . The output will be 57
     What are you thinking? Yeah! Do it with for loop. I know you can do it.
     But! Wait !! Wait !!! Do the same task using array.reduce() method. 
*/

// Write your program here.

// #### Solution-1 ####
// Using for loop;
const people = [
    {name: "Meean", age: 20},
    {name: "Rina", age: 15},
    {name: "Deena", age: 22},
]

let sumOfAge = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    const getAge = element.age;
    sumOfAge += getAge;
}
console.log(sumOfAge);

// #### Solution-2 ####
// Using reduce();
const getAllAge = people.map(ages => ages.age);
const getSumOfAge = getAllAge.reduce((prev, curr) => prev + curr,0)
console.log(getSumOfAge);