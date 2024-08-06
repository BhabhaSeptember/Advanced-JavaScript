"use strict";

//********************SYNCHRONOUS PROGRAMMING*********************/

// function firstTask() {
//     console.log("Task 1");
// };

// function secondTask() {
//     console.log("Task 2");
// };

// function thirdTask() {
//     console.log("Task 3");
// };

// firstTask();
// secondTask();
// thirdTask();


// //BLOCKING / FREEZING
// function someLongRunningFunction() {
//     let start = Date.now();
//     while( Date.now() - start < 5000) {
//         //code to execute
//     }
//     return "Hello";
// };

// console.log("Starting..."); //Logged first

// let result = someLongRunningFunction();
// console.log(result); //Waits 5 seconds before logging "Hello"

// console.log("...Finishing"); //Logged only after "Hello" has been logged


//********************ASYNCHRONOUS PROGRAMMING*********************/

// console.log("Start of script");  //Logged first

// setTimeout(function() {
//     console.log("First timeout completed!"); //Waits 2 seconds before loggin to console
// }, 2000);

// console.log("End of script"); //Logged before setTimeout is completed



//********************CALLBACK FUNCTIONS*********************/

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {name: "Bhabha", age: 28};
//         callback(data);
//     }, 3000);
// };

// fetchData(function(data) {
//     console.log(data);
// });

// console.log("Data is being fetched...");


//***********************PROMISES****************************/

//****CREATING A PROMISE*****/
// let myPromise = new Promise(function (resolve, reject){});
// console.log(myPromise);

// let myPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve("The promise says 'Hello!'");
//     }, 2000);
// });
// console.log(myPromise);


//****CONSUMING A PROMISE*****/
// myPromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Fulfilled or rejected, the promise has been settled")
// });


//****CHAINING PROMISES*****/
fetch("https://example.com/data")
.then(response => response.json())
.then(data => processData(data))
.then(processedData => {
    //code to execute with processed data
})
.catch(error => console.log(error));



