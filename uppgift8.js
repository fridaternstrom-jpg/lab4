/*Lösning till uppgift 8 av Frida Ternström, 2026
Jag skapar ett objekt med tre egenskaper och låter en funktion skriva ut dem*/

"use strict";

let book = {
    title: "The Magician's Apprentice",
    author: "Trudi Canavan",
    publishYear: "2009",
}

function library(book) {                            //kallar på objektet
console.log(`Titel: ${book.title}`);                //letar upp rätt egenskap inuti objektet och skriver ut det
console.log(`Författare: ${book.author}`);
console.log(`Utgivningsår: ${book.publishYear}`);
}

library(book);                                      //kallar på funktionen som skriver ut samtliga egenskaper