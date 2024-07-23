"use strict";

//************WORD SCRAMBLER**************/

//substr(where to start removing, how many to return in new string)
// let theString = "encyclopaedia";

// function scramble(string) {
//     let stringLength = string.length;
//     let tempString = "";

//     for (let i = 0; i < stringLength  ; i++) {
//         let index = Math.floor(Math.random() * string.length);
//         let newLetter = string[index];
//         tempString += newLetter;  
//         string = string.substr(0, index) + string.substr(index +  1);
//         console.log(string);     
//     }
//     return tempString;
// }
// console.log(scramble(theString));



//************COUNTDOWN TIMER**************/

let endDate = "9 August 2024";
console.log(Date.now());
console.log(Date.parse(endDate));

function countdown() {
    let total = Date.parse(endDate) - Date.now();
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((total / (1000 * 60)) % 60);
    let seconds = Math.floor((total / 1000) % 60);

    let remainingTime = {
        days : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
    };

    return console.log(remainingTime);
    // return console.log(`There are ${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes, ${remainingTime.seconds} seconds left before we begin with HTMX!`)
}
countdown();


function update() {
    let tempVar = countdown();
    let output = "";

    for (let property in tempVar) {
        output += (`${property} : ${tempVar[property]}`);
    }
    console.log(output);
    setTimeout(update, 1_000);
}
// update(); 

