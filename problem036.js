/*
  1. Write an arrow function where it will do the  following:
  a) It will take an array where the array  elements will be name of your friends.
  b) Check if the length of the each element is even. push elements with even length
     to a new array and return the result
*/

// Write your program here;

// #### Solution ####
const getEvenLength = (friends) => {
    let EvenLengthName = [];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length % 2 == 0) {
            EvenLengthName.push(element);
        }
    }

    return EvenLengthName;
}

const friendsName = ["Kuddus", "Bodrul", "Bodruzaman", "Rubel", "Jhankar", "Babula"];
const result = getEvenLength(friendsName);
console.log(result);