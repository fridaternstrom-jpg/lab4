/*Lösning till uppgift 3 av Frida Ternström, 2026
I uppgiften har jag skapat en variabel med ålder som jag
sedan låter ge feedback till en fiktiv användare beroende på
vad deras ålder är*/

"use strict";

let age = 65;

if (age <= 17) {
    console.log(`Barn`);
} else if (age <= 64) {
    console.log(`Vuxen`);
} else {
    console.log(`Pensionär`);
}