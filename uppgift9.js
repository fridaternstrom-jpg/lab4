/*Lösning till uppgift 9 av Frida Ternström, 2026
*/

"use strict";

const people = [                      //Här är min array med 3 objekt
    {
        name: "Filippa",
        age: 19,
        city: "Lund"
    },
    {
        name: "Hugo",
        age: 60,
        city: "Simrishamn"
    },
    {
        name: "Julle",
        age: 13,
        city: "Norrköping"
    },
];

for (let i = 0; i < people.length; i++) {     //Här loopar jag igenom arrayen
    console.log(people[i]);
}

function personalInfo(people) {
    
        for (let i = 0; i < people.length; i++) {
            if (people[i].age >= 18) {
                console.log(`${people[i].name} bor i ${people[i].city} och är myndig.`);
            } else {
                console.log(`${people[i].name} bor i ${people[i].city} och är inte myndig.`);
            }
        }
    
}

personalInfo(people);





