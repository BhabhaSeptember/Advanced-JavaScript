// /* WHILE Loop */
// // while (condition) {
// //     // code that gets executed as long as the condition is true
// //     }
 
// // // // /* CONVERTING CODE BELOW INTO A 'FOR' LOOP */
// // let i = 0;
// // while (i < 10) {
// // console.log(i);
// // i++;
// // }


// //  for (i = 0; i < 10; i++) {   // Can have more than one initializer & ending conditional (NB: separate with commas)
// //      console.log(i);
// //  }



// // // /* FINDING A VALUE FROM AN ARRAY USING 'WHILE' LOOP */
// // // let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// // // let notFound = true;
// // // while (notFound && someArray.length > 0) {
// // // if (someArray[0] === "Louiza") {
// // // console.log("Found her!");
// // // notFound = false;
// // // } else {
// // // someArray.shift();  //'shift()' method deletes the specified value from array
// // // }
// // // }


// // // // // /* FILLING AN ARRAY WITH THE FIBONACCI SEQUENCE */
// // // // // let nr1 = 0;
// // // // // let nr2 = 1;
// // // // // let temp;

// // fibonacciArray = [];
// // while (fibonacciArray.length < 25) {
// // fibonacciArray.push(nr1);
// // temp = nr1 + nr2;
// // nr1 = nr2;
// // nr2 = temp;
// // }
// // console.log("The Fibonacci Sequence: " + fibonacciArray);





// // /* PRACTICE EXERCISE 5.1 - Number Guessing Game */

// // const max = 5;
// // const ranNumber = Math.floor(Math.random()* max) +1;
// // console.log(ranNumber)
// // let correct = false;
// //  while (!correct) {
// //      let guess = prompt("Guess any number between 1 - " + max + ":");
// //      guess = Number(guess);
// //      if (guess === ranNumber){
// //          correct = true;
// //          alert("CORRECT! The secret number is: " + ranNumber);
// //         } else if (guess > ranNumber){
// //          alert("Oooops, INCORRECT: TOO HIGH!");
// //      } else {
// //         alert("Oooops, INCORRECT: TOO LOW!");
// //      }
// // }


// // // //4.
// // // let playersGuess 



// /* DO WHILE */
// do { //executes DO block-->evaluates WHILE condition-->if TRUE, executes DO block again until condition becomes FALSE
//     // code to be executed if the condition is true
//     } while (condition);

// let number;
// do {
// number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));
// console.log(number);



/* PRACTICE EXERCISE 5.2 */
// let counter = 0
// let step = 2;
// do {
// console.log(counter);
// counter += step;
// }
// while(counter <= 100);



/* FOR Loops */
// for (initialize variable; condition; statement) { 
//     // code to be executed
//     } //condition evaluated first before statement executed then move back to check condition until it becomes false

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     }

// // let arr = [];
// // for (let i = 0; i < 100; i++) {
// // arr.push(i);
// // }
// // console.log(arr);


// // let arr = [];
// // for (let i = 0; i < 100; i = i + 10) {
// // arr.push(i);
// // }
// // console.log(arr);



// /* PRACTICE EXERCISE 5.3 */
// const myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         theName: "Lesson $(x)", status: stat
//     };
//     myWork.push(temp);
// }
// console.log(myWork);



/* NESTED LOOPS */
//Loop inside a loop
// while (condition 1) {
// // code that gets executed as long as condition 1 is true
// // this loop depends on condition 1 being true
// while (condition 2) {
// // code that gets executed as long as condition 2 is true
// }
// }

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
// arrOfArrays.push([]);
// for (let j = 0; j < 7; j++) {
// arrOfArrays[i].push(j);
// }
// }
// console.log(arrOfArrays);  //log printout
// console.table(arrOfArrays); //table display
 

// /* Practice exercise 5.4 */ //REVISIT!!!!!
// const myTable = [];
// const rows = 5;
// const columns = 5;
//  let counter = 0;
//  for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < columns; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
//  }
//  console.table(myTable);



/* Loops and arrays */
// let arr = [some array];
// for (initialize variable; variable smaller than arr.length; statement) //combining 'condition part' & 'length property' 
// {
// // code to be executed
// }


//below logs every value in array
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
// console.log(names[i]);
// }


//below changes values of array in a loop
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
// names[i] = "Hello " + names[i];
// }
// console.log(names);

//can modify or filter data. Example:
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
// if(names[i].startsWith("M")){
// delete names[i];
// continue;
// }
// names[i] = "hello " + names[i];
// }
// console.log(names);

//below gets stuck in infinite loop as "..." is added each time meaning .length keeps incrementing 
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++){
// names.push("...")
// }
// console.log(names);


/* Practice exercise 5.5 */  
// const gridArray = [];
// const numOfCells = 64;
// // let counter = 0; 
// // let row;
// // for (let i = 0; i < numOfCells + 1; i++) {
// //     if (counter % 8 === 0) { //ASSISTANCE!!!!!!!
// //     if ( row !== undefined) {
// //         gridArray.push(row);
// //     }
// //     row = [];
// // }
// // counter++
// // let tempVariable = counter;
// // row.push(tempVariable);
// // }
// // console.table(gridArray);



// // /* for of loop */
// // //For every value of the array-->Call it variableName-->And do the following: ...
// // // let arr = [some array];
// // // FOR (let variableName OF arr) {
// // // // code to be executed
// // // // value of variableName gets updated every iteration
// // // // all values of the array will be variableName once
// // // }

// // //Advantage: Wont accidentally create infinite loops 
// // //Disadvantages: Cannot modify data. Can only print out elements of array
// // let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// // for (let theName of names){  //'theName' is specified temporary variable
// // console.log( theName);
// // }



// /* Practice exercise 5.6 */
// const emptyArray = [];
// for ( let i = 0; i < 10; i++) {
//     emptyArray.push(i + 1);
// }
// console.log("First Array (i): " + emptyArray);

// for (let j = 0; j < emptyArray.length; j++) {
//     console.log("Second Array (j): " + emptyArray[j]);
// }

// for(let val of emptyArray) {
// // //     console.log("Third Array (for of loop): " + val);
// // // }


// // /* Loops and objects */
// // /* 'FOR IN' loop */
// // let car = {
// //     model: "Golf",
// //     make: "Volkswagen",
// //     year: 1999,
// //     color: "black",
// //     }; //Below gives us the VALUES from the "key-value" pair of the object
// //     for (let prop in car){
// //     console.log("Values:" + car[prop]);
// //     } //Below gives us the KEYS from the "key-value" pair of the object
// //     for (let prop in car){
// //         console.log("Keys: " + prop);
// //         }



// /* Practice exercise 5.7 */
// // const myObject = {
// //     a : - 1,
// //     b : - 2,
// //     c : - 3
// // };
// // // for (let prop in myObject) {
// // //     console.log(prop, myObject[prop]);
// // // }


// // // const anArray = ["a", "b", "c"];
// // // for (let l = 0; l < anArray.length; l++) {
// // //     console.log(l, anArray[l]);
// // // }


// // const anArray = ["a", "b", "c"];
// // for (item in anArray) {
// //     console.log(item, anArray[item]);
// // }



// /* Looping over objects by converting to an array */
// /* 
// // • Convert the keys of the object to an array
// // • Convert the values of the object to an array
// // • Convert the key-value entries to an array (containing arrays with two elements: object key and object value) 
// // */

// // let car = {
// //     model: "Golf",
// //     make: "Volkswagen",
// //     year: 1999,
// //     color: "black",
// //     };

// // let arrKeys1 = Object.keys(car);
// // console.log(arrKeys1);

// // for(let key of arrKeys1) {
// //     console.log("Object Keys: " + key);
// //     }


// //     for(let key of Object.values(car)) {
// //         console.log("Object Values: " + key);
// //         }


// //         let arrKeys2 = Object.keys(car);
// //         for(let i = 0; i < arrKeys2.length; i++) {
// //         console.log("Key/Val Pair = " + arrKeys2[i] + ": " + car[arrKeys2[i]]);
// //         }



// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };


// let arrEntries = Object.entries(car);
// console.log(arrEntries);

// // // // // //Below looping over the above
// // // // // for (const [key, value] of arrEntries) {
// // // // //     console.log(key, ":", value);
// // // // //     }



// // // // /* BREAK AND CONTINUE */
// // // // /*
// // // // Break: Stops loop (Even if condition is True)-->Moves to code below loop
// // // // Continue: Stops current iteration-->Moves back to TOP of loop-->Checks condition/Performs statement then checks condition
// // // // */
// // let cars = [
// //     {
// //     model: "Golf",
// //     make: "Volkswagen",
// //     year: 1999,
// //     color: "black",
// //     },
// //     {
// //     model: "Picanto",
// //     make: "Kia",
// //     year: 2020,
// //     color: "red",
// //     },
// //     {
// //     model: "Peugeot",
// //     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
//     ];

// // //     //DEMONSTRATING BREAK:
// // //     // for (let i = 0; i < 10; i++) {
// // //     //     console.log(i);
// // //     //     if (i === 4) {
// // //     //     break;
// // //     //     }
// // //     //     }


// // //         for (let i = 0; i < cars.length; i++) {
// // //             if (cars[i].year >= 2020) {
// // //             if (cars[i].color === "black") {
// // //             console.log("I have found my new car:", cars[i]);
// // //             break;
// // //             }
// // //             }
// // //             }




// // // // // // // // //Example 1:
// // // // // // // // while (true) {
// // // // // // // //     if (superLongArray[0] != 42 && superLongArray.length > 0) {
// // // // // // // //     superLongArray.shift();
// // // // // // // //     } else {
// // // // // // // //     console.log("Found 42!");
// // // // // // // //     break;
// // // // // // // //     }
// // // // // // // //     }

// // // // // // // // //Example 2:    
// // // // // // // // while (superLongArray.length > 0 && notFound) {
// // // // // // // //     if (superLongArray[0] != 42) {
// // // // // // // //     superLongArray.shift();
// // // // // // // //     } else {
// // // // // // // //     console.log("Found 42!");
// // // // // // // //     notFound = false;
// // // // // // // //     }
// // // // // // // //     }
  


// // // // // // // /* CONTINUE */
// // // // // // // for (let car of cars){
// // // // // // //     if(car.color !== "black"){
// // // // // // //         continue;
// // // // // // // }
// // // // // // // if (car.year >= 2020) {
// // // // // // // console.log("we could get this one:", car);
// // // // // // // }
// // // // // // // }


// // // // // // // let's only log the odd numbers to the console
// // // // // // // // code below logs '1' then is stuck in infinite loop. Does not increment because loop never reaches 'i++'
// // // // // // // //1.
// // // // // // // let i = 1;
// // // // // // // while (i < 50) {
// // // // // // // if (i % 2 === 0){
// // // // // // // continue;
// // // // // // // }
// // // // // // // console.log(i);
// // // // // // // i++;
// // // // // // // }

// // // // // // // //2.
// // // // // // // let y = 1;
// // // // // // // while (y < 50) {
// // // // // // // y++;
// // // // // // // if ((y-1) % 2 === 0){
// // // // // // // continue;
// // // // // // // }
// // // // // // // console.log(y-1);
// // // // // // // }

// // // // // // //3.
// // // // // // for (let i = 1; i < 50; i = i + 2) {
// // // // // //     console.log(i);
// // // // // //     }



// // // // // /* Practice exercise 5.8 */
// // // // // let outputString = "";
// // // // // let skipNum = 6;
// // // // // for (i = 1; i <= 10; i++) {
// // // // //     if (i === skipNum) {
// // // // //         continue;
// // // // //     }
// // // // //     outputString += i + " ";
// // // // // }
// // // // // console.log(outputString);


// // // // /*  break, continue, and nested loops */
// // // // //NOTE: 'break' or 'continue' inside a NESTED loop will NOT affect the OUTER loop
// // // // let groups = [
// // // //     ["Martin", "Daniel", "Keith"],
// // // //     ["Margot", "Marina", "Ali"],
// // // //     ["Helen", "Jonah", "Sambikos"],
// // // //     ];

// // // //     for (let i = 0; i < groups.length; i++) {
// // // //         let matches = 0;
        
// // // //         for (let j = 0; j < groups[i].length; j++) {
// // // //         if(groups[i][j].startsWith("M")){
// // // //         matches++;
// // // //         } else {
// // // //         continue;
// // // //         }
// // // //         if (matches === 2){
// // // //         console.log("Found a group with two names starting with an M:");
// // // //         console.log(groups[i]);
// // // //         break;
// // // //         }
// // // //         }
// // // //         }



// // // /* break and continue and labeled blocks */
// // // //Breaking out of OUTER loop from INNER loop
// // // let groups = [
// // //     ["Martin", "Daniel", "Keith"],
// // //     ["Margot", "Marina", "Ali"],
// // //     ["Helen", "Jonah", "Sambikos"],
// // //     ];

// // // outer:
// // // for (let group of groups) {
// // // inner:
// // // for (let member of group) {
// // // if (member.startsWith("M")) {
// // // console.log("found one starting with M:", member);
// // // continue outer;
// // // }
// // // }
// // // }



