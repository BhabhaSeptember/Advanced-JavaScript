"use strict";
// //*********************ACCESSING ELEMENTS */
// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]); //undefined (doesnt exist)
// console.log(cars[-1]); //undefined

// //**********OVERWRITING ELEMENTS****** */
// cars[0] = "Tesla";
// console.log(`Overwritten element is ${cars[0]}`);
// console.log(cars);

// cars[3] = "Kia";
// cars[-1] = "Fiat";
// console.log(cars);

//************BUILT-IN LENGTH PROPERTY****** */

// let colors = ["black", "orange", "pink"]
// let booleans = [true, false, false, true];
// let emptyArray = [];

// console.log(`Length of colors: ${colors.length} `);
// console.log(`Length of booleans: ${booleans.length} `);
// console.log(`Length of emptyArray: ${emptyArray.length} `);

// let lastElement = colors[colors.length -1];
// console.log(colors);
// console.log(lastElement);

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers);
// console.log(`Length of numbers: ${numbers.length}`);

//**********PRACTICE EXERCISE 3.1** */

// let shopList = ["Milk", " Bread", " Apples"];
// console.log("Shopping list: ");
// console.log(shopList);
// console.log(`List length: ${shopList.length}`);

// shopList[1] = " Bananas";
// console.log("Updated shopping list: ");
// console.log(shopList);

//*****************ARRAY METHODS*********** */

//********************PUSH**************** */
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// console.log(favoriteFruits);

// favoriteFruits.push("tangerine");   //adds element to end of array
// console.log(favoriteFruits);

// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);
// console.log(favoriteFruits.length);

//********************SPLICE******************* */

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 1, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.splice(1, 1, "square", "trapezoid");
// console.log(arrOfShapes);

// arrOfShapes.unshift("oval"); //adds element to front of array
// console.log(arrOfShapes);

//*************CONCAT************** */

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);

// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);

// //*************DELETING ELEMENTS******* */

// arr8.pop();    //removes element from back of array
// console.log(arr8);

// arr8.shift();   //removes element from front of array
// console.log(arr8);

// arr8.splice(1, 3);
// console.log(arr8);

// // arr8.splice(2, 4);
// console.log(arr8);

// delete arr8[0];
// console.log(arr8);

//***************FINDING ELEMENTS****************/
//*********FIND METHOD********/
// let arr8 = [2, 6, 7, 8];
// let findValue = arr8.find(e => {return e === 6}); //finds value/element at specified index
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, "|", findValue2);

// //*********INDEX OF METHOD**********************/
// let findValue3 = arr8.indexOf(6); //find index of specified value
// let findValue4 = arr8.indexOf(10); //value does not exist in array
// console.log(findValue3, "|",findValue4);

//****************SORTING ELEMENTS******************/

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log("Names: ");
// console.log(names);
// names.sort(); //arranges in ascending (alphabetical) order
// console.log("Ascending (Alphabetical) Order: ");
// console.log(names);
// names.reverse();  //arranges in descending order
// console.log("Descending Order: ");
// console.log(names);

// //PRACTICE EXERCISE 3.2
// //initialize empty array
// let shopList = [];

// //adding items to array
// shopList[0] = "Milk";
// shopList[1] = "Bread";
// shopList[2] = "Apples";
// console.log("Shopping List: ");
// console.log(shopList);

// //updating array
// shopList.splice(1, 1, "Bananas", "Eggs");
// console.log("Update Bread: ");
// console.log(shopList);

// //remove last item
// shopList.pop();
// console.log("Remove last item: ")
// console.log(shopList);

// //sorting alphabetically
// shopList.sort();
// console.log("Sort Alphabetically: ")
// console.log(shopList);

// //index of Milk
// console.log("Index of Milk: ")
// console.log(shopList.indexOf("Milk"));

// //updating array
// shopList.splice(1, 0, "Carrots", "Lettuce");
// console.log("Add Carrots & Lettuce: ")
// console.log(shopList);

// //new list
// let shopList2 = ["Juice", "Pop"];
// console.log("New Shopping List: ")
// console.log(shopList2);

// //concat shopping lists
// let combo = shopList.concat(shopList2).concat(shopList2);
// console.log("Combined Shopping Lists: ")
// console.log(combo);

// //last index calue of item "Pop"
// console.log("Last index of element 'Pop': ")
// console.log(combo.lastIndexOf("Pop"));

// //final list
// console.log("FINAL LIST: ");
// console.log(combo);

//**********************MULTI-DIMENSIONAL ARRAYS**********/
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];

// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log("Array of Arrays: ", arrOfArrays);

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //2-dimensional array
// console.log("Array of Arrays2: ", arrOfArrays2);

// console.log("Output '6': ", arrOfArrays[1][2])

// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays ];
// console.log("Multi-Dimensional Array: ", arrOfArraysOfArrays);
// console.log("")

//PRACTICE EXERCISE 3.3
// let values = [1, 2, 3];
// let newArray = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// console.log("Inner Array 1 - Value 2: ", newArray[0][1]);
// console.log("Inner Array 2 - Value 2: ", newArray[1][1]);
// console.log("Inner Array 3 - Value 2: ", newArray[2][1]);

//*************************OBJECTS********************/

//  let dog = { dogName: "Buffels",
//  weight: 2.4,
//  color: "brown",
//  breed: "Yorkie",
//  age: 3,
//  burglarBiter: true
//  };

//  console.log(dog);

//  //ACCESSING PROPERTIES
//  let dogColor1 = dog["color"];
//  console.log(dogColor1);

//  let dogColor2 = dog.color; //dot notation
//  console.log(dogColor2);

//UPDATING OBJECTS
//  dog.color = "pink";
//  dog.weight = 2.3;
//  console.log("Updated Object: ", dog);

//  dog.age = "three";

//  let variable = "age";
//  console.log(dog[variable]);

//  variable = "breed";
//  console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

//PRACTICE EXERCISE 3.4
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let car = {
//     make : "Audi",
//     model : "x4",
//     year : 2035,
//     color : "Blue",
//     brandNew : true,
//     price : 150_000
// };

// let variable = "color";
// console.log(car[variable]);

// car[variable] = "Grey";
// console.log(car.color);

// variable = "forSale";
// car[variable] = true;
// console.log(car)

// console.log(car.make);
// console.log(car.model);
// console.log(car.price);

//***************************OBJECTS && ARRAYS****************************/

//***************OBJECTS IN OBJECTS**********/
// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// console.log(company);

//***************ARRAYS IN OBJECTS**********/

// company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// console.log(company);

//***************OBJECTCS IN ARRAYS**********/

// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];
// console.log(addresses);

// let streetName = addresses[0].street;

//***************OBJECTCS IN ARRAYS**********/

// let company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };
// console.log(company);


//PRACTICE EXERCISE 3.5

// let people = {
//     friends : []
// };


// let friend1 = {
//     firstName : "Lucy",
//     lastName : "Shange",
//     id: 1
// };

// let friend2 = {
//     firstName : "Mbali",
//     lastName : "Zulu",
//     id: 2
// };

// let friend3 = {
//     firstName : "Amy",
//     lastName : "Lewis",
//     id: 3
// };


// people.friends[0] = friend1;
// people.friends[1] = friend2;
// people.friends[2] = friend3;

// console.log(people);


const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3))

