"use strict";

/*************************************GLOBAL METHODS**************************************/

/**********************************DECODING AND ENCODING URIs****************************/

//******decodeUri() & encodeUri()
// let uri = "https://www.example.com/submit?name=bhabha tracy akhona september";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded: ", encoded_uri);

// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded: ", decoded_uri); //Note: Result excludes characters that follow a space...

//******decodeUriComponent() & encodeUriComponent()
// let uri = "https://www.example.com/submit?name=bhabha tracy akhona september";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded: ", encoded_uri);

// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded: ", decoded_uri);



/**********************************PARSING NUMBERS****************************/

//*************PARSEINT()************/
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

//*************PARSEFLOAT()************/
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_version_nr = "2.3.4";
// let float_version_nr = parseFloat(str_version_nr);
// console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

/*********************************ARRAY METHODS****************************/

//************FOREACH()*************/
// let arr = ["grapefruit", 4, "hello", 5.6, true];

//syntax 1:
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// };
// arr.forEach(printStuff);
//syntax 2:
// arr.forEach((e, i) => { console.log("Printing stuff:", e, "on array position:", i);
// });

//************FILTERING AN ARRAY*************/

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//   return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);
// console.log(arr.every(checkString));

//************REPLACING PART OF AN ARRAY WITH ANOTHER PART OF ARRAY*************/

//arguement 1: place we start replacing
//arguement 2: where we start copying for replacing at argument 1
//arguement 3:  end of the sequence that will be copied to the target position; this last index is not included

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr.copyWithin(0, 3, 4));
// console.log(arr.copyWithin(1, 2, 4));

//**************************MAPPING VALUES OF AN ARRAY*****************/

// let array= [1, 2, 3, 4];

// let mapped_array = array.map(x => x + 1);
// console.log(mapped_array);

//**************************FINDING LAST OCCURENCE IN ARRAY*****************/

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye")); //outputs "2"
// console.log(bb.lastIndexOf("hi")); //outputs "-1"


//*********************************STRING METHODS**************************/

//******COMBINING STRINGS****/
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log("s1: ", s1, "\ns2: ", s2, "\nresult: ",  result);

//******CONVERTING STRINGS TO ARRAYS****/

// let result = "Hello JavaScript";
// let array_result = result.split(" "); //splits string into array at point where there is a space
// console.log(array_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let array_fruits = favoriteFruits.split(","); //splits at comma char
// console.log(array_fruits);

//******CONVERTING ARRAYS TO STRINGS ****/

// let letters = ["a", "b", "c"];
// let x = letters.join(); //default separator is a comma
// console.log(x);

// let y = letters.join('-');
// console.log(y);

//*******************INDEX AND POSITIONS**************/

//INDEX OF METHOD
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re"); //Looks for first occurrence
// console.log(index_re);

// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

//SEARCH METHOD
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo"); //Looks for first occurrence
// console.log(pos);

//LAST INDEX OF METHOD
// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

//*****POSITIONS
// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// console.log(poem.length);
// console.log(pos2);

//*******************CREATING SUBSTRINGS**************/
//slice(start, end) //end does not include the last element specified

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// let substr3 = str.slice(9);
// console.log("1:", substr1);
// console.log("2:", substr2);
// console.log("3:", substr3);

//******************REPLACING PARTS OF THE STRINGS**************/
//arg1 = item to replace/target
//arg2 = the new item to add to target

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let hi2 = "Hi buddy, how are you buddy?";
// let new_hi2 = hi2.replaceAll("buddy", "Bhabha");
// console.log(new_hi2);

//******************UPPER & LOWER CASE**************/

// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

/******************START && END OF STRING**************/
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start); //outputs TRUE

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2); //outputs FALSE (case sensitivity)

//************************************NUMBER METHODS**************/

//Checking isNaN method
// let x = 34;
// console.log(isNaN(x)); //FALSE
// console.log(!isNaN(x)); //TRUE
// let str = "hi";
// console.log(isNaN(str)); //TRUE

//Checking isFinite method
// let x = 3;
// let str = "finite";
// console.log(isFinite(x)); //TRUE
// console.log(isFinite(str)); //FALSE
// console.log(isFinite(Infinity)); //FALSE
// console.log(isFinite(10 / 0)); //FALSE

//Checking isInteger method
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x)); //TRUE
// console.log(Number.isInteger(str)); //FALSE
// console.log(Number.isInteger(Infinity)); //FALSE
// console.log(Number.isInteger(2.4)); //FALSE

//Specifying a number of decimals
//toFixed Method
// let x = 1.23456;
// let newX = x.toFixed(2); //specifies two decimal places
// console.log(x);
// console.log(newX);

//Specifying precision
// let x = 1.23456;
// let newX = x.toPrecision(2); //specifies how many digits to have in final reuslt  
// console.log(x); 
// console.log(newX);


//******************************MATH METHODS*****************/

//MIN AND MAX
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords); //OUTPUTS NaN


//Square root and raising to the power of
// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3); //means 5 to the power of 3
// console.log(result2);


//Turning decimals into integers
//ROUND (normal rounding off)
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));


//CEIL (Rounds UP)
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));


//FLOOR (ALWAYS Rounds DOWN)
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));


//TRUNC METHOD (Only drops decimal places even with negative digits)
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));


//******EXPONENT AND LOGARITHM *******/
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);

// let log = Math.log(exp);
// console.log("Log:", log);


//**********************************DATE METHODS***************/
//CREATING DATES
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2); //number of seconds from 1 Jan 1970 til current date and time

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);


//METHODS TO GET AND SET THE ELEMENTS OF A DATE
// let d = new Date();
// console.log("DATE: ", d);
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9); //October
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);


//PARSING DATES
//Below results are unreadable
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);


//CONVERTING DATE TO A STRING
// let d = new Date();
// console.log(d.toDateString());

// console.log(d.toLocaleDateString());

//--------------------------------------------------------------------------------------------

/******************PRACTICE EXERCISE 8.1************/

// let string = "How's%20it%20going%3F";
// console.log("Original String:      ", string);
// let decodedUriComponent = decodeURIComponent(string);
// console.log("Decode URI Component: ", decodedUriComponent);
// console.log("Encode URI Component: ",encodeURIComponent(decodedUriComponent));
// console.log("\n\n");

// let webURI = "http://www.basescripts.com?=Hello World\";";
// console.log("Web URI: ", webURI);

// console.log("Encoded: ", encodeURI(webURI));
// console.log("Encoded URI Component: ", encodeURIComponent(webURI));


/******************PRACTICE EXERCISE 8.2************/

// let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"];

// let newArray = names.filter( (value, index, array) => {
//     console.log("Element = ", value, " | Index nr = ", index, " | ", array.indexOf(value));
//     return array.indexOf(value) === index;
// } );
// console.log(newArray);
// console.log("");

// /******************PRACTICE EXERCISE 8.3************/

//  const myArray = [5, 6, 9, 1, 3, 10];
//  const myMappedArray = myArray.map(function(num) {
//      return num * 2;
//  });

//  console.log(myMappedArray);



// /******************PRACTICE EXERCISE 8.4************/

// const aString = "senTENCE thIs will be capiTalized for EACH WORD into This Will Be Capitalized For Each Word:";
// function stringCaps(string) {
//     string = string.toLowerCase();
//     const tempArray = [];  //4. Will hold our words when we capitilize them
//     let words = string.split(" ");  //5. At every space in the string, a new array item will be  created
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);  
//         //code above: Capitilize 1st letter & return remaining letters as lowercase
//         tempArray.push(temp);
//     });
//     return tempArray.join(" ")  //Converts array into a string with spaces inbetween each array item
// }
// console.log("1. " + aString);
// console.log("2. " + stringCaps(aString));



// /******************PRACTICE EXERCISE 8.5************/

// let string = "We love JavaScript. It  is interesting to code!";
// string = string.toLowerCase();
// let letters = ["o" , "l" , "s" , "e" , "a"];

// letters.forEach((letter, index) => {
//     console.log(letter, index);
//     string = string.replaceAll(letter, index);  //OLDvsNEW (i.e. "letter"=OLD; "index"=NEW)
// });
// console.log(string);


// /******************PRACTICE EXERCISE 8.6***************/

// console.log(Math.PI);

// console.log("Ceil 5.7: ",Math.ceil(5.7));
// console.log("Floor 5.7: ",Math.floor(5.7));
// console.log("Round 5.7: ",Math.round(5.7));

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11)); //0 - 10
// console.log(Math.floor(Math.random() * 10) + 1); //1 - 10
// console.log(Math.floor(Math.random() * 100) + 1); // 1- 100

// function randomNumber(min, max) {
//     return console.log(Math.floor(Math.random() * max) + min);
// };

// for (let i = 0; i < 99; i++) {
//     randomNumber(10, 50);
// };


// /******************PRACTICE EXERCISE 8.7****************/

// let d = new Date();
// console.log(d);

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log("Day: ", d.getDate());
// console.log("Year: ", d.getFullYear());
// console.log("Month: ", d.getMonth());
// console.log("Month: ", months[d.getMonth()]);





