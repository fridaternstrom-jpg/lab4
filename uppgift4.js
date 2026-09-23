/*Lösning till uppgift 4 av Frida Ternström, 2026
Här skapar jag en array som jag sedan loopar, en gång i vanlig ordning
och en gång med bara de jämna siffrorna i arrayen*/

"use strict";

//skapar en array med alla tal
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20];

//skapar en for-loop för arrayen där alla tal skrivs ut
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//delar arrayen för varje värde och plockar ut de som är jämna
numbers.forEach (number => {
    if (number % 2 === 0){
    console.log(number);
    }
});


