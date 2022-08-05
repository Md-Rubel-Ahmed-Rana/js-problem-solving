/*
  1. Write an array that will take five strings.
  2. find out the biggest string from  the array.
*/

// Write your program here.

// #### Solution ####

const myFriends = ["Rubel", "Najim", "Bodrul Amin", "Ahad", "Emad"];
let biggestName = myFriends[0];

for (let i = 0; i < myFriends.length; i++) {
    const name = myFriends[i];
    if (name.length > biggestName.length) {
        biggestName = name;
    }
}
console.log(biggestName);