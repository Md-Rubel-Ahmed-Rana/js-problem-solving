/*
  1. Write a function that will return those numbers which are dividev by 3 and 5.
  2. Write a loop that will give numbers from 1-100.

*/

// Write your program here.

// #### Solution ####

function getResult() {
    let result = 0;
    for (let i = 1; i < 100; i++) {
       if(i % 3 == 0 && i % 5 == 0){
         result = i;
         console.log(i, "is divied by 3 and 5");
       }
    }
    return result
}

getResult()

