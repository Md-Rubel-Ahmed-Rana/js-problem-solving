/*
 1. You are in hurry to go to  your school  on time. But when you are crossing the road, the traffic siganl is red coloured. In this situation, if you try  to cross the road, you may be in the danger. If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So hurry Up.

*/
// Write your program here.

// ###### Solution-1 ########
// I have solved this problem using switch statment
var signal = "";
switch (signal) {
    case "red":
        console.log("Do not cross the road, You may be in the danger");
        break;
    case "yellow":
        console.log("Do not cross the road, you should stop.");
        break;
    case "green":
        console.log("You should cross the road immidiatly");
        break;

    default:
        console.log("There is no signal, Do another activities.");
        break;
}


// =======================================
// ###### Solution-2 ########
// I have solved this problem using function
function traffic(signal) {
    if (signal === "red") {
        return "Do not cross the road, You may be in the danger."
    } else if(signal === "yellow"){
        return "Do not cross the road, you should stop."
    } else if(signal === "green"){
        return "You should cross the road immidiatly"
    } else{
        return "There is no signal, Do another activities."
    }
}

const mySignal = traffic();
console.log(mySignal);