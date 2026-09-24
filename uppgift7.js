/*Lösning till uppgift 7 av Frida Ternström, 2026
I uppgiften nedan skapar jag en array av nummer som en funktion sedan
räknar ut summan av. Sist arrangerar jag arrayen i en loop för att gå igenom dess värden*/

"use strict";

let numbers = [5, 9, 1, 3, 7, 4, 7, 3];


function sumOfNumbers(numbers) {
    let sum = 0;                    //ett startvärde att utgå ifrån

    numbers.forEach(number => {     //en loop för att hantera arrayens nummer var för sig
        sum = sum + number;         //startvärde + varje nummer, för att få summan av alla värden i arrayen
    });

    return sum;                     //funktionen ombes returnera resultatet av summan
}

console.log(`Summan är ${sumOfNumbers(numbers)}`);      //anropar funktionen och skriver ut den

for (let i = 0; i < numbers.length; i++) {              //en loop för att skriva ut arrayens innehåll
    console.log(numbers[i]);
}


