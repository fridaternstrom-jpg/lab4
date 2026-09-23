/*Lösning till uppgift 7 av Frida Ternström, 2026
Uppgiften */

"use strict";

let numbers = [5, 9, 1, 3, 7, 4];


function sumOfNumbers(numbers) {
let sum = 0;                        //Ett standardvärde att utgå ifrån

    numbers.forEach(number => {     //standardsum är lika med varje enskilt värde i arrayen + 0
        sum = number + sum;
    });
    
    return sum * numbers.length;       //summan, var och en från arrayen, gånger längden på arrayen
}

console.log(sumOfNumbers(numbers));     //anropar funktionen


