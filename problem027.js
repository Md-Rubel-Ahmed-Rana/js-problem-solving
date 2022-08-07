
/*
  1. Remove the dulicate numbers from the array given below and show the
     unique numbers as output.

  2. var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

  3. find out the largest numbers from the unique numbers. 
*/

// Write your program here.

// #### Solution-1 ####

// Defining necessary variables

var myNumbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 24, 9, 56, 6, 78, 80, 45, 80];
var uniqueNumbers = [];


function removeDuplicate (numbers){
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (uniqueNumbers.indexOf(number) == -1) {
            uniqueNumbers.push(number);
        }
    }
}

removeDuplicate(myNumbers);

// Sorting the numbers from small to large
uniqueNumbers.sort((a,b) => {
    return a - b
})
console.log(uniqueNumbers);


// finding the largest number
let largeNumber = 0;
for (let i = 0; i < uniqueNumbers.length; i++) {
    const number = uniqueNumbers[i];
    if(largeNumber > number);
    largeNumber = number;
}

console.log(largeNumber);



// #### Solution-2 ####

function removeDuplicates(names) {
    const unique = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
       
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }

    return unique;
}

const friendsName = ["bodrul", "amin", "anamul", "kuddus", "najim", "bodrul", "amin", "bodrul", "amin"];

const uniqueNames = removeDuplicates(friendsName);
console.log(uniqueNames);


