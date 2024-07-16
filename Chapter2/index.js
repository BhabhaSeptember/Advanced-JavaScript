"use strict";
//*************************STRINGS********************/
/*
let singleString = 'Hi there!';
let doubleString = "How are you?";
//using single & double quotes example
console.log(singleString);
console.log(doubleString);

//single quote inside of double quotes
let funActivity = "Let's learn JavaScript";
console.log(funActivity);

//using back ticks
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);

//escape characters
let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

let str3 = "New \nline."; //new line
let str4 = "I'm containing a backslash: \\!"; //prints one backslash
console.log(str3);
console.log(str4);

let str5 = "Using the \ttab";
console.log(str5);
*/

//***************************************NUMBER*******************************/

// //The limits of the number data type are between (2^53)- 1 and -((2^53)-1)
// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5

// console.log(intNr);
// console.log(decNr);
// console.log(expNr);
// console.log(octNr);
// console.log(hexNr);
// console.log(binNr);

// let intNr2 = 3434;
// let intNr3 = -111;
// let decNr2 = 45.78;
// let binNr2 = 0b100; //decimal version would be 4

// console.log("")
// console.log(intNr2);
// console.log(intNr3);
// console.log(decNr2);
// console.log(binNr2);

//**********************************BIGINT******************************/

// let bigNr = 90071992547409920n;
// console.log("");
// console.log(bigNr);

// let result = bigNr + intNr;
// console.log(result); //ERROR: cannot mix bigInt with other types

//*********************************BOOLEAN*******************************/

// let bool1 = false;
// let bool2 = true;

// // let lightIsOn = true;
// let lightIsOn = false;
// if(lightIsOn) {
//     console.log("Yes, the light is on");
// } else {
//     console.log("No, the light is off");
// };

//**********************************SYMBOL*******************************/

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// //TRUE
// console.log("These two strings are the same:", str1 === str2);

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// //FALSE (symbols are unique regardless of value and data type)
// console.log("These two Symbols are the same:", sym1 === sym2);

//***********************************UNDEFINED********************************/

// let terribleThingToDo = undefined;
// let lastName;
// //TRUE
// console.log("Same undefined:", lastName === terribleThingToDo);

//*************************************NULL*****************************/

// let betterOption = null;
// //FALSE
// console.log("Same null:", lastName === betterOption);

//**********************************TYPE OF A VARIABLE**************************/

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str: ", typeof(str));
// console.log("nr: ", typeof(nr));
// console.log("bigNr: ", typeof(bigNr));
// console.log("bool: ", typeof(bool));
// console.log("sym: ", typeof(sym));
// console.log("undef: ", typeof(undef));
// console.log("unknown: ", typeof(unknown)); //result: 'object' because it is default data type

//**********************************CONVERTING DATA TYPES**************************/

// let nr1 = 2;
// // let nr2 = "2";
// let nr2 = Number("2"); //conversion
// console.log(nr1 + nr2); 

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(`nrToStr (${nrToStr}) is a:  ${typeof (nrToStr)}`);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(`strToNr (${strToNr}) is a: ${typeof (strToNr)}`);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(`strToBool (${strToBool}) is a: ${typeof (strToBool)}`);


// //PRACTICE EXERCISE 2.1
// let str1 = 'Laurence'; 
// let str2 = "Svekis"; 
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// let myName = "Bhabha";

// console.log(`str1 (${str1}) is a: ${typeof (str1)}`);
// console.log(`str2 (${str2}) is a: ${typeof (str2)}`);
// console.log(`val1 (${val1}) is a: ${typeof (val1)}`);
// console.log(`val2 (${val2}) is a: ${typeof (val2)}`);
// console.log(`myNum (${myNum}) is a: ${typeof (myNum)}`);
// console.log(`myName (${myName}) is a: ${typeof (myName)}`);

//**************************************ARITHMETIC OPERATORS**************************/

//PRACTICE EXERCISE 2.2

// let myName = "Bhabha";
// let age = "29";
// let canCodeJS = true;
// console.log("Hello, my name is " + myName + ", I am " + age + " years old and I can code JavaScript: " + canCodeJS);


// let nr1 = 2;
// let nr2 = 3;
// let string = "string";
// console.log(nr1 + nr2);
// console.log(nr1 - string); //NaN
// console.log(nr1 * nr2);
// console.log(nr1 ** nr2); //exponentiation
// console.log(nr1 % nr2) //modulus (remainder)


//**************************************UNARY OPERATORS**************************/

//!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^


//POST & PRE INCREMENT & DECREMENT



//PRACTICE EXERCISE 2.3
// let a = Number(prompt("Type value for side a: "));
// let b = Number(prompt("Type value for side b: "));

// let c = Math.sqrt((a**2) + (b**2));
// console.log("Hypotenuse = " + c);


//**************************************ASSIGNMENT OPERATORS**************************/

//PRACTICE EXERCISE 2.4

// let a = 1;
// let b = 2;
// let c = 3;

// a + b; // 1 + 2 = 3
// a / c; // 3 / 3 = 1
// c = c % b; // remainder of (3/2) = 1

// console.log(`a = ${a} \nb = ${b} \nc = ${c}`); // ANS = 1, 2, 1

//**************************************COMPARISON OPERATORS**************************/

// let x = 5;
// let y = "5";
// console.log(`x == y is ${x == y}`); //TRUE
// console.log(`x === y is ${x === y}`); //FALSE

// console.log(`x != y is ${x != y}`); //FALSE
// console.log(`x !== y is ${x !== y}`); //TRUE

// let x = 5;
// let y = 6;
// console.log(y > x); //TRUE
// console.log(x > y); //FALSE
// console.log(y > y); //FALSE
// console.log(y >= y); //TRUE
// console.log("");
// console.log(y < x); //FALSE
// console.log(x < y); //TRUE
// console.log(y < y); //FALSE
// console.log(y <= y); //TRUE

//**************************************LOGICAL OPERATORS**************************/

let x = 1;
let y = 2;
let z = 3;
//**********AND*************/
console.log(x < y && y < z); //TRUE
console.log(x > y && y < z); //FALSE
console.log("");
//*********OR*************/
console.log(x > y || y < z); //TRUE
console.log(x > y || y > z); //FALSE
console.log("");
//**********NOT*************/
x = false;
console.log(!x); //TRUE
x = 1;
console.log(!(x < y)); //FALSE
