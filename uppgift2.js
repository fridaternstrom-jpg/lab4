/*Lösning till uppgift 2 av Frida Ternström, 2026
Uppgiften innehåller enklare variabler med enkla matematiska
lösningar och en utskrift av dem till konsollen*/

"usestrict";

let productPrice = 150;

let productQuantity = 4;

let totalSum = productPrice * productQuantity;

let includeVAT = totalSum * 1.25;

console.log(`Pris: ${productPrice}kr
Antal: ${productQuantity}
Totalt: ${totalSum}
Totalt inklusive moms: ${includeVAT}`)