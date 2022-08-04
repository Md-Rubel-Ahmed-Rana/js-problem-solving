/*
 1. Write a function which will show the multiplication table of 13 
    as output.
*/

// Write you program here.

//##### Solution #####

function multplication(a) {
    for (let i = 1; i <= 10; i++) {
       var result =  a * i
       console.log(result);
    }
}

multplication(13);
