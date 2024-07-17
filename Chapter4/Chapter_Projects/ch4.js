"use strict";

//***************************EVALUATING A NUMBER GAME******************/

// let randomNumber = Math.floor(Math.random() * 11);
// let userInput = Number(prompt("Enter a number from 0 to 10"));

// if (userInput < randomNumber) {11
//     alert(`Your number '${userInput}' is less than the secret number '${randomNumber}'`);
// } else if (userInput === randomNumber) {
//     alert(`Your number '${userInput}' is equal to the secret number '${randomNumber}'`);
// } else {
//     alert(`Your number '${userInput}' is greater than the secret number '${randomNumber}'`);
// }

//***************************FRIEND CHECKER GAME******************/

let users = [
  "Alex",
  "Asanda",
  "Bhabha",
  "Diego",
  "Happy",
  "Juan",
  "Jada",
  "Lucky",
  "Michael",
  "Vhukhudo",
  "Sbahle",
];

let user = prompt("Please enter your first name: ");


switch (users) {
  case "Alex":
  case "Asanda":
  case "Bhabha":
  case "Diego":
  case "Happy":
  case "Juan":
  case "Lucky":
  case "Michael":
  case "Vhukhudo":
  case "Sbahle":
    alert(`Student Name: ${user}`);
    break;
  case "Jada":
    alert(`Teacher Name: ${user}`);
    break;
  default :
  alert(`User not recognized: ${user}`);  
}


//***********************ROCK PAPER SCISSORS GAME******************/
