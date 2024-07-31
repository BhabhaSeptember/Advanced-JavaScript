"use strict";

// //INTRO CONCURRENCY
// //Note: Computer performs multiple tasks at the same time

// //CALLBACKS
// //Note: Function calling a function
// // Functions inserted as arguments
// //EXAMPLE 1
// function doSomething(callback) {
//     callback();
//    }
//    function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);

// //EXAMPLE 2
// function judge(grade) {
//   switch (true) {
//     case grade === "A":
//       console.log("You got an", grade, ": Excellent!! Keep up the good work");
//       break;
//     case grade === "B":
//       console.log("You got a", grade, ": Well done!");
//       break;
//     case grade === "C":
//       console.log("You got a", grade, ": Passed! Aim higher next time. You can do it!");
//       break;
//     case grade === "D":
//       console.log("You got a", grade, ": Poor performance, aim higher next time");
//       break;
//     default:
//       console.log("An", grade, ", Please refer to the schedule for extra lessons");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 80:
//       grade = "A";
//       break;
//     case score >= 70:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 60:
//       grade = "C";
//       break;
//     case score >= 50:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   //2. After grade is determined, function stored in callback gets called with grade
//   callback(grade);
// }
// //1. judge function gets stored in callback
// getGrade(85, judge);
// getGrade(45, judge);






//EXAMPLE 3
// setInterval(encourage,3000);
// function encourage() {
//   console.log("You're doing great, keep going!");
// }

//PROMISES
//Note: Organizes sequence of code to make it manageable
// Object that connects code that produces result to that which needs to use the result

//EXAMPLE 1
// // Note: To create a 'promise', we must give it a function
// // function has two params which are callbacks
// // Promise is value sent to 'resolve' func as argument
// //Promises can be: resolved, rejected or pending
// //'then()' is also a promise that can be chained

// let promise = new Promise(function (resolve, reject) {
//   let x = 25;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// //Result of promise above is returned & used as input for 'then' method
// promise.then(
//   function (value) {
//     console.log("Success:", value);
//   },
//   function (error) {
//     console.log("Error:", error);
//   }
// );





//EXAMPLE 2
//Note: resolve func implemented with arrow func
//Return statement is value input for next function
//'catch()' block executed if promises rejected
// const promise = new Promise((resolve, reject) => {
//   resolve("success!");
// });
// promise.then((value) => {
//   console.log(value);
//   return "we";
// })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

//EXAMPLE 3
// const promise = new Promise((resolve, reject) => {
//   reject("oops... ");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });







//ASYNC & AWAIT
//Note: 'async' can make function return a promise
//'await' (an async func) specifies to wait until promise/s are done.

//EXAMPLE 1
// //Note: async func 'talk' is called 3 times in a row with no break
// //Each func call is awaiting 'saySomething' function
// //'saySomething' func contains new promise that is resolved with setTimeout func
// //...waits 2seconds before resolving

// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something: " + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }

// talk(2);
// talk(4);
// talk(8);











//EVENT LOOP
//Note: JS has a single path of execution or event loop
//But JS can outsource some tasks to manage events in a multithreaded manner
//...i.e. concurrency and asynchronous functions

//CALL STACK & CALLBACK QUEUE
//Note: Actions that JS must execute are queued up in a call stack
//Event loop constantly monitors this call stack
//Event loop then executes tasks one by one starting from the top

//EXAMPLE 1
// console.log("Hi there");
// add(4,5);
// function add(x, y) {
//  return x + y;
// }



//EXAMPLE 2 (Multithreading)
//Note: 'setTimeout()' task gets outsourced to browsers web API (callback queue)
//Once call stack is empty, event loop checks callback queue & executes those
//After every action, event loop checks call stack first then goes back callback queue
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }



//EXAMPLE 3
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 0);
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }

// --------------------------------------------------------------------------------------------


//****************PRACTICE EXERCISE 13.1**********
// function greet(fullName) {
//   console.log(`Welcome, ${fullName[0]} ${fullName[1]}`);
// }
// function processCall(userName, callback) {
//   const fullName = userName.split(" ");
//   callback(fullName);
// }
// processCall("Bhabha September", greet);



//************PRACTICE EXERCISE 13.2**********
// const promise = new Promise((resolve, reject) => {
//   resolve("Start Counting");
// });
// function counter(val) {
//   console.log(val);
// }
// promise.then((value) => {
//     counter(value);
//     return "one";
//   })
//   .then((value) => {
//     counter(value);
//     return "two";
//   })
//   .then((value) => {
//     counter(value);
//     return "three";
//   })
//   .then((value) => {
//     counter(value);
//   });



//*****************8PRACTICE EXERCISE 13.3************
// let cnt = 0;
// function outputTime(val) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cnt++;
//       resolve(`x value ${val} counter:${cnt}`);
//     }, 1000);
//   });
// }
// async function aCall(val) {
//   console.log(`ready ${val} counter:${cnt}`);
//   const res = await outputTime(val);
//   console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//   aCall(x);
// }