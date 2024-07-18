"use strict";

//***************************EVALUATING A NUMBER GAME******************/

// let randomNumber = Math.floor(Math.random() * 11);
// let userInput = Number(prompt("Enter a number from 0 to 10"));

// if (userInput < randomNumber) {
//     alert(`Your number '${userInput}' is less than the secret number '${randomNumber}'`);
// } else if (userInput === randomNumber) {
//     alert(`Your number '${userInput}' is equal to the secret number '${randomNumber}'`);
// } else {
//     alert(`Your number '${userInput}' is greater than the secret number '${randomNumber}'`);
// }




//***************************FRIEND CHECKER GAME******************/

// let user = prompt("Please enter your first name: ");

// switch (user) {
//   case "Alex":
//   case "Asanda":
//   case "Bhabha":
//   case "Diego":
//   case "Happy":
//   case "Juan":
//   case "Lucky":
//   case "Michael":
//   case "Vhukhudo":
//   case "Sbahle":
//     alert(`Student Name: ${user}`);
//     break;
//   case "Jada":
//     alert(`Teacher Name: ${user}`);
//     break;
//   default :
//   alert(`User not recognized: ${user}`);
// }



//***********************ROCK PAPER SCISSORS GAME******************/

const array = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);
let player = Number(prompt("ROCK PAPER SCISSORS GAME \n\nChoose a number from 0 - 2. \n\n0 is Rock \n1 is Paper \n2 is Scissors"));


let message = "Player: " + array[player] + " vs Computer: " + array[computer] + " || Result: ";

if (player === computer) {
  message += "it's a tie";
} else if (player > computer) {
  if (computer === 0 && player === 2) {
    message += "Computer Wins";
  } else {
    message += "Player Wins";
  }
} else {
  if (computer === 2 && player === 0) {
    message += "Player Wins";
  } else {
    message += "Computer Wins";
  }
}
console.log(message);
