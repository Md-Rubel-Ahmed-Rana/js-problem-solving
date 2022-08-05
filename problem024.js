/*
 **  1. Write a function that will show what of marks a student have got in 100.
     (result will be shown with percentage(%))

     2. This result also shown with grade.
       
     ######## Grading System #########
             80% to 100% "A+"
             70% to 79 "A"
             60% to 69 "A-"
             50% to 59 "B"
             40% to 49 "C"
             33% to 39 "D"
             less than 33% "F => failed"
*/

// Write your program here.

// #### Solution ####
const getResult = (totalMarks, gotMarks) => {
    const getPercentage = (gotMarks * 100) / totalMarks;
    const getInteger = parseInt(getPercentage);
    if (getPercentage >= 80) {
        console.log("You have got 'A+' and",getInteger, "% of Marks");
    } else if(getPercentage >= 70){
        console.log("You have got 'A' and",getInteger, "% of Marks");
    } else if(getPercentage >= 60){
        console.log("You have got 'A-' and",getInteger, "% of Marks");
    } else if(getPercentage >= 50){
        console.log("You have got 'B' and", getInteger, "% of Marks");
    } else if(getPercentage >= 40){
        console.log("You have got 'C' and", getInteger, "% of Marks");
    } else if(getPercentage >= 33){
        console.log("You have got 'D' and", getInteger, "% of Marks");
    } else{
        console.log("You have got 'F=>Failed' and", getInteger,"% of Marks")
    }

    return getPercentage;
}

getResult(600, 550);
getResult(600, 450);
getResult(600, 400);
getResult(600, 350);
getResult(600, 250);
getResult(600, 200);
getResult(600, 195);