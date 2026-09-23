/*Lösning till uppgift 6 av Frida Ternström, 2026
Jag skapar en 'function' för att räkna ut arean av en triangel
och anropar den 3 gånger*/

"use strict";

/*Här är funktionen. För att räkna ut arean behöver vi multiplicera
bredden med höjden och sedan dela resultatet med 2*/
function calculateArea(width, height) {
    return width * height / 2;
}


//Vi kontrollerar att det fungerar som det ska här
console.log(`Arean är ${calculateArea(20, 25)}`);
console.log(`Arean är ${calculateArea(5, 6)}`);
console.log(`Arean är ${calculateArea(15, 10)}`);
