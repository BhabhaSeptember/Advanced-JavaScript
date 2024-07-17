"use strict";

//**********************IF & IF ELSE STATEMENTS**************** */

// // let rain = true;
// let rain = false;

// if (rain) {
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// let age = Number(prompt("Please enter your current age: "));

// if( age <= 12 ) {
//     console.log(`Your age: ${age}. Ticket price is R5.00 for 12 and under`);
//     alert("Ticket price is R5.00");

// } else if (age > 12 && age < 21 ) {
//     console.log(`Your age: ${age}. Ticket price is R30.00 for between 13 & 12`);
//     alert("Ticket price is R30.00");

// } else {
//     console.log(`Your age: ${age}. Ticket price is R100.00 for adults`);
//     alert("Ticket price is R100");
// };

//*****PRACTICE EXERCISE 4.1*******/

// let isOpen = false;
// console.log(isOpen);

// //version 1
// // if (isOpen === true) {
// //     console.log("Let's go shopping");
// // };

// // if (isOpen !== true) {
// //     console.log("Let's just go cycling");
// // };

// //version 2 (best practice)
// if (isOpen === true) {
//     console.log("Let's go shopping!");
// } else {
//     console.log("Let's just go cycling...");
// };

//**********************ELSE IF STATEMENTS**************** */

// let age = Number(prompt("What is your current age? "));
// let cost = 0;
// let message;

// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is R5";
// } else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs R10.";
// } else {
//   cost = 7;
//   message = "A VIP ticket is R7.";
// }
// alert(message);
// console.log(message);

// alert("Your Total cost = R" + cost)
// console.log("Your Total cost = R" + cost);

//*****PRACTICE EXERCISE 4.2*******/

// let age = Number(prompt("What is your age? "));
// let message;

// if( age >= 21) {
//     message = "Entry : GRANTED \nAlcohol : ALLOWED.";
// } else if (age >= 19) {
//     message = "Entry : GRANTED \nAlcohol : DENIED";
// } else {
//     message = "Entry : DENIED!";
// };

// alert(message);
// console.log(message);

//********************************CONDITIONAL TERNARY OPERATORS*********************************/

// let age = Number(prompt("What is your age? "));

// let access = age < 18 ? "Access Denied" : "Welcome back";
// alert(access);

//***************PRACTICE EXERCISE 4.3*************************/

// // let validID = true;
// let validID = false;

// let entry = (validID === true) ? "Valid ID \n[Entry Allowed]" : "Invalid ID \n[Entry Denied]";
// alert(entry);

//********************************SWITCH STATEMENTS*********************************/

// let activity;
// activity = "Breakfast";
// activity = "Lunch";
// activity = "Dinner";

// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// };

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//   default:
//     console.log("Sleepy Time");
//     break;
// };

//**************************PRACTICE EXERCISE 4.4************************/

// let randomNumber = Math.floor(Math.random() * 6);
// let input = prompt("Hello there! Ask me anything: ");
// let response = input;

// switch(randomNumber) {
//     case 0 :
//         response += "?\nAnswer: More info can be found on google.com";
//         break;
//     case 1 :
//         response += "?\nAnswer: I've never heard of that before...";
//         break;
//     case 2 :
//         response += "?\nAnswer: Sorry, I don't know.";
//         break;
//     case 3 :
//         response += "?\nAnswer: Phone 012 345 6789.";
//         break;
//     case 4 :
//         response += "?\nAnswer: I will get back to you tomorrow.";
//         break;
//     case 5 :
//         response += "?\nAnswer: Mhm let me think about it.";
//         break;
// }
// console.log("You asked: ", response);

//********************************COMBINING CASES*********************************/

// let grade = prompt("Enter students grade: ").toUpperCase();

// switch (grade) {
//   case "F":
//     console.log("Fail")
//     break;   
//   case "D":
//     console.log("Supplementary Exam granted");
//     break;
//   case "C":
//   case "B":
//     console.log("Pass");
//     break;
//   case "A":
//     console.log("Cum Laude");
//     break;
//   default:
//     console.log("Invalid grade");
// };




//*****PRACTICE EXERCISE 4.5*******/

let prize = Number(prompt("Choose a number between 0 and 10"));
let outputMessage = "My selection: ";

switch(prize) {
    case 1 :
    case 2 :
    case 3 :    
        outputMessage += "iPad";
        break;
    case 4 :    
    case 5 :
    case 6 :
        outputMessage += "Crotchet set";
        break;
    case 7 :  
    case 8 :
    case 9 :      
        outputMessage += "Audi vehicle";
        break;
    case 10 :
        outputMessage += "Trip to Miami";
        break;
    default :
        outputMessage = "Invalid input. Number must be between 0 and 10 to win!";               
}
console.log(outputMessage);

