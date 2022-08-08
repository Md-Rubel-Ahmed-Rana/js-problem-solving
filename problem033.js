
/*
    1. Write a function that will tell you how many papers you will need 
       to make books.
    2. Write a function called "paperRequirement".
    3. It will take three parameters.
    4. Parameter-1 for: first  book quantity.
        * It will take 100 Pages per copy book.
    5. Parameter-2 for: second  book quantity.
        * It will take 200 Pages per copy book.
    6. Parameter-3 for: third  book quantity.
        * It will take 300 Pages per copy book.
    7. This function will return Total amount of pages.
*/

function paperRequirment(book1, book2, book3) {
    const firstBookPaper = 100;
    const secondBookPaper = 200;
    const thirdBookPaper = 300;

    const firstBookTotalPages = firstBookPaper * book1;
    const secondBookTotalPages = secondBookPaper * book2;
    const thirdBookTotalPages = thirdBookPaper * book3;

    const totalPages = firstBookTotalPages + secondBookTotalPages + thirdBookTotalPages;

    return totalPages;

};

const PaperRequired = paperRequirment(3,2,1);
console.log(PaperRequired);