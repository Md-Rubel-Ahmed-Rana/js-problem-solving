/*
    1. Write a function named "bestFriends".
    2. It will take an Array as parameter.
    3. This array has all of your friends names.
    4. This function will return the largest name from this Array.
    5. Returned name must be a String.
*/

// Write your program here.

// #### Solution ####
const bestFriends = (friends) => {
    let largestName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const name = friends[i];
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
};

const friends = ["Amin", "Rubel", "Bodrul", "Jakariya", "Najim", "Emad" ,"Ahad"];
const largeName = bestFriends(friends);
console.log("Largest Name is: ",largeName);