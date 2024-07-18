// //1. EVALUATING A NUMBER 
// let val = prompt("Type a number below: ");
// val = Number(val);
// let num = 100;
// let message;
// if (val > num) {
//  message = val + " is greater than " + num;
// } else if (val === num) {
//     message = val + " is equal to " + num;
// } else {
//  message = val + " is less than " + num;
// }
// console.log(message);



// //2. FRIEND CHECKER 
// let person = prompt("Enter a name below: ");
// let message;
// switch (person) {
//  case "John" :
//  case "Larry" :
//  case "Jane" :
//  case "Laurence" :
//  message = person + " is my friend";
//  break;
//  default :
//  message = "I don't know " + person;
// }
// console.log(message);

// //3. ROCK PAPER SCISSORS
// const myArr = ["Rock", "Paper", "Scissors"]; 
// let computer = Math.floor(Math.random() * 3); 
// let player = Math.floor(Math.random() * 3); 
// let message = "player " + myArr[player] + " vs computer " + 
// myArr[computer] + " "; 
// if (player === computer) { 
//  message += "it's a tie"; 
// } else if (player > computer) { 
//  if (computer == 0 && player == 2) { 
//  message += "Computer Wins"; 
//  } else { 
//  message += "Player Wins"; 
//  } 
// } else { 
//  if (computer == 2 && player == 0) { 
//  message += "Player Wins"; 
//  } else {
//     message += "Computer Wins"; 
//  } 
// } 
// console.log(message);