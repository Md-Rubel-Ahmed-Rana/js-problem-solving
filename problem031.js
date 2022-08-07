/*
  # Suppose  you are an owner of cinema hall.
  
  * Write a function that will have three type of Ticket Prices.
    1. if a person buy 1-100 tickets. It will cost 100tk per ticket.

    2. if a person buy 1-200 tickets. It will cost 100tk for first 100 tickets.
     and It will cost 90tk for second 100 tickets.

    2. if a person buy 200++ tickets. It will cost 100tk for first 100 tickets, 90tk for second 100 tickets and 70tk for rest tickets.
*/

// Write your program here.

// #### Solution ####
const ticketPrice = (ticketQuantity) => {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const totalPrice = first100Rate * ticketQuantity;
        return totalPrice;
    } else if(ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicket = ticketQuantity - 100;
        const restPrice  = restTicket * second100Rate;
        const totalPrice = first100Price + restPrice;

        return totalPrice;
    } else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate ;
        const rest200PlusTicket = ticketQuantity - 200;
        const rest200PlusPrice = rest200PlusTicket * restRate;
        const totalPrice = first100Price + second100Price + rest200PlusPrice;

        return totalPrice;
    }
};

const totalPrices = ticketPrice(210);
console.log(totalPrices);