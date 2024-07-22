// INTRO: (Applying methods to variables)
// let s = "Hello";
// console.log(
//     s.concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You're amazing!")
// );




// //GLOBAL METHODS
// //Can be used without referring to the built-in object that they are part of
// //example: object included infront of method
// let x = 7;
// console.log(Number.isNaN(x));  //LOGS: false

// //Above can also be written as:
// console.log(isNaN(x));  //LOGS: False

// //NOTE: There are also pre-determined Local Methods in JS





// //DECODING & ENCODING URIs (Uniform Resource Identifier)
// /* 
// NB** URI Cannot contain spaces therefore Encode & Decode methods used
// -Encode = Converting from one shape to another e.g. (% encoding aka URL encoding (Uniform Resource Locator)
// 1. Spaces in URL will be DECODED or converted to %-starting format
// 2. Can also encode. Example below:
// a) https://www.example.com/submit?name=maaike van putten  (Before encoding  i.e. decoded )
// b) https://www.example.com/submit?name=maaike%20van%20putten  (After encoding)
// */


// //EXAMPLE 1: (  decodeURI()  &  encodeURI()  )
// Fixing broken URIs but skip some special characters
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);




 //EXAMPLE 2: (  decodeUriComponent()   &    encodeUriComponent()  )
 //All special characters also become encoded so as not to change meaning or break URI
//  let uri = "https://www.example.com/submit?name=maaike van putten";
//  let encoded_uri = encodeURIComponent(uri);  
//  console.log("Encoded:", encoded_uri);
//  let decoded_uri = decodeURIComponent(encoded_uri);
//  console.log("Decoded:", decoded_uri);



   // //EXAMPLE 3: (  ENCODING WITH escape()   &   unescape()  )
   // //Similar to Encode & Decode but use thereof DISCOURAGED




   // /*  PRACTICE EXERCISE 8.1   */
//    const theString = "How's%20it%20going%3F";
//    const decodedUriStringComp = decodeURIComponent(theString);
//    console.log("Decode: " + decodedUriStringComp);

//    const theString2 = "How's it going?";
//    const encodedUriStringComp = encodeURIComponent(theString2);
//    console.log("Encode: " + encodedUriStringComp);


//    const newUri = "http://www.basescripts.com?=Hello World";
//    encodedNewUri = encodeURI(newUri);
//    console.log("New URI encoded: " + encodedNewUri);







 // //PARSING NUMBERS
 // /*
 // - Mostly translates strings to numbers
 // - e.g. Reading input boxes from HTML web page (we cannot calculate with strings)
 // - Perform calculations
 // */

 //EXAMPLE 1: (  MAKING INTERGERS WITH parseInt()  )
//  let str_int = "6";
//  let int_int = parseInt(str_int);
//  console.log("1. The value: " + int_int + ", is a '" + typeof int_int + "' data type.");
//above logs 'number'
//  console.log("2. The original value: " + str_int + ", was a '" + typeof str_int + "' data type.")
//above logs 'string'



 // //EXAMPLE 2: (float numbers)
 // //Stops reading when it reaches non-numerical value
 // let str_float = "7.6";
 // let int_float = parseInt(str_float);   //Reads "7"
 // console.log("3. The value: " + int_float + ", is a '" + typeof int_float + "' data type.");


 // EXAMPLE 3: (binary numbers)
 // let str_binary = "0b101";
 // let int_binary = parseInt(str_binary); //Reads "0"
 // console.log("4. The value: " + int_binary + ", is a '" + typeof int_binary + "' data type.");



  //EXAMPLE 4: (strings)
//    let str_nan = "hello!";
//    let int_nan = parseInt(str_nan);  //No numbers to read therefore LOGS "NaN"
//    console.log("Type of", int_nan, "is a", typeof int_nan);







 // //MAKING FLOATS WITH parseFloat()
 // parse a string to a float
 //understands decimal numbers i.e. continues parsing after dot
 // let str_float = "7.6";
 // let float_float = parseFloat(str_float);  //Reads "7.6"
 // console.log("1. Type of", float_float, "is", typeof float_float);


 // //Below demonstrates: Can read after ONE dot only
 // let str_version_nr = "2.3.4";
 // let float_version_nr = parseFloat(str_version_nr);  //Reads "2.3"
 // console.log("2. Type of", float_version_nr, "is", typeof float_version_nr);



 // //Below shows: ".0" won't be appended
 // let str_int = "6";
 // let float_int = parseFloat(str_int);  //Reade "6"
 // console.log("3. Type of", float_int, "is", typeof float_int);



 // //Dealing with Binary numbers & strings
 // let str_binary = "0b101";
 // let float_binary = parseFloat(str_binary); //Reads "0"
 // console.log("4. Type of", float_binary, "is", typeof float_binary);

 // let str_nan = "hello!";
 // let float_nan = parseFloat(str_nan);  //No number to read therefore LOGS "NaN" 
 // console.log("5. Type of", float_nan, "is", typeof float_nan);






 //EXECUTING JS WITH eval()
 //see html page
 







 //ARRAY METHODS
 //PERFORMING A CERTAIN ACTION FOR EVERY ITEM USING THE 'forEach()' METHOD
 //Takes function to be executed for every element as input
 //i.e. calls function for every element in array
 // let arr = ["grapefruit", 4, "hello", 5.6, true];
 // function printStuff(element, index) {
 // console.log("Array element: '" + element + "' is on array position: " + index);
 // }
 // arr.forEach(printStuff);







 //FILTERING AN ARRAY USING BUILT-IN    "filter()"    METHOD
 /* 
 - Alter values that are put into final array
 - Takes function as argument--> Function returns boolean...
 - ...If TRUE : Element is pushed into filtered array...
 - ELSE : ...Element is left out
 */

 //Example (filter())
 // let arr = ["squirrel", 5, "Tjed", new Date(), true];
 // function checkString(element, index) {
 // return typeof element === "string";
 // }
 // let filterArr = arr.filter(checkString);
 // console.log(filterArr);  //LOGS "squirrel" && "Tjed"





 // //CHECKING A CONDITION FOR ALL ELEMENTS USING THE    "every()"    METHOD
 // /* 
 // - Checks if something is true for all elements in an array
 // - If so, retuns 'TRUE' ; Else returns 'FALSE'
 // */

 // //Example:
 // let arr = ["squirrel", 5, "Tjed", new Date(), true];
 // function checkString(element, index) {
 // return typeof element === "string";
 // }
 // console.log(arr.every(checkString));  //LOGS "false" --> Not all elements are strings





  // //REPLACING PART OF AN ARRAY WITH ANOTHER PART OF THE ARRAY USING     'copyWithin()'   METHOD
  // /*
  // - Replaces one part of the array with another part of the same array
  // - Arguments are specifed:
  // 1. Target Position (The position who's value will be replaced with the element being copied)
  // 2. The START position of what will be pasted onto the target position
  // // 3. The END of the sequence that will be added from the target position (NOT INCLUDED)
  // // */
  // // //Example 1
  // // arr = ["grapefruit", 4, "hello", 5.6, true];
  // // console.log("Original Array: " + arr)
  // // arr.copyWithin(0, 3, 4);
  // // console.log("Copied Array: " + arr);
  // // //Above LOGS " [5.6 , 4 , hello , 5.6 , true] "



  // //Example 2:
  // /*
  // -If more than one value to be copied & pasted then the same number of copied values will be...
  // ...replaced/overridden from the Target Position
  // */
  // // arr = ["grapefruit", 4, "hello", 5.6, true];
  // // console.log("1. " + arr);
  // // arr.copyWithin(0, 3, 5);
  // // console.log("2. " + arr);


  // //Example 3 (Not specifying a range)
  // let arr = ["grapefruit", 4, "hello", 5.6, true, false];
  // arr.copyWithin(0, 3);
  // console.log(arr);  //TRY TO RUN CODE
  // //Function/method above, changes CONTENT not LENGTH of array






 





 //MAPPING THE VALUES OF AN ARRAY USING    "map()"      METHOD
  /*
  - Changes all values in an array--> Returns new array with new values
  - New values created using arrow function
  - Arrow function executed for every element in array
  */
  // let arr = [1, 2, 3, 4];
  // let mapped_arr = arr.map(x => x + 1);
  // console.log(mapped_arr);









  //FINDING LAST OCCURENCE IN ARRAY USING     "LastIndexOf()"       METHOD
  //FOR LAST OCCURENCE, USE: "lastIndexOf()" --> Returns index of last element
  // let bb = ["so", "bye", "bye", "love"];
  // console.log(bb.lastIndexOf("bye"));   //LOGS "2"


 // let bb = ["so", "bye", "bye", "love"];
 // console.log(bb.lastIndexOf("hi"));   //LOGS   " -1 "







 // /*  PRACTICE EXERCISE 8.2   */
 // const theArray = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike","Laurence", "Mike", "Laurence", "Mike"]
 // const newArray = theArray.filter( (value, index, array) => {
 //     console.log("Array Item Value = " + value + " || Index # = " + index + " || " + array.indexOf(value));
 //     return array.indexOf(value) === index;  //Does current item match original index value
 // }); 
 // console.log(newArray);






// // //  // /*    PRACTICE EXERCISE 8.3    */
// // //  // // const myArray = [5, 6, 9, 1, 3, 10];
// // //  // // const myMappedArray = myArray.map(function(num) {
// // //  // //     return num * 2;
// // //  // // });
// // //  // // console.log(myMappedArray);





 //STRING METHODS
 //COMBINING STRINGS USING   "concat()"   METHOD  
 /*
 - Returns combined result as string 
 - Must create variable to hold that result array
 */
 // let s1 = "Hello ";
 // let s2 = "JavaScript";
 // let result = s1.concat(s2);
 // console.log(result);   //LOGS "Hello JavaScript"






 // //CONVERTING STRING TO ARRAY USING    "split()"    METHOD
 // /*
 // - Must create variable to capture result
 // - Specify what string the method must split
 // - When that string is encountered a new array item is created
 // */
 // //Example 1:
 // let result = "Hello JavaScript";
 // let arr_result = result.split(" ");
 // console.log(arr_result);   //LOGS "  'Hello', 'JavaScript'  "


 // //Example 2: (can split with any character e.g. ",")
 // let favoriteFruits = "strawberry,watermelon,grapefruit";
 // let arr_fruits = favoriteFruits.split(",");
 // console.log(arr_fruits);









  //CONVERTING ARRAY TO STRING USING    "join()"   METHOD
  //Example 1: (Default joining character is a comma)
  // let letters = ["a", "b", "c"];
  // let x = letters.join();   
  // console.log(x);   //LOGS "a,b,c"---->A String

  // //Example 2: (Can specify any character to join the items of your string)
  // let letters = ["a", "b", "c"];
  // let x = letters.join('-');
  // console.log(x);   //LOGS "a-b-c"






  //WORKING WITH INDEX & POSITIONS

//   let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
//   // let index_re = poem.indexOf("re");
//   // console.log(index_re);  //LOGS "7" || NOTE: If nothing found, LOGS " -1 "

//   let indexNotFound = poem.indexOf("python");
//   console.log(indexNotFound); //LOGS "-1"

  //Below checks if result is '-1' before dealing with result
  // if(poem.indexOf("python") != -1) {
  //     // do stuff
  //     }









//ALTERNATIVE TO USING   'indexOf()'    is      "search()"   METHOD
  //Example 1:
  // let searchStr = "When I see my fellow, I say hello";
  // let indexPosition = searchStr.search("lo");
  // console.log(indexPosition);

  // //Example 2:
  // let notFound = searchStr.search("JavaScript");
  // console.log(notFound);      //Also LOGS " -1 "   if cannot find


  /*
  NOTE: 
  - 'search()'  also accepts regex format VS 'indexOf()' which takes only string
  - 'indexOf()'  much faster (use if looking for a string)
  - 'search()'   can be used when looking for a string pattern
  */


  /*  NOTE:
  - 'indexOf()'   returns first occurrence
  - 'lastIndexOf()'   returns last occurrence

  */
  //Example 1: Finding index position of specified characters
  // let poem2 = "Roses are red, violets are blue, if I can do JS, then you can too!";
  // let lastIndex_re = poem2.lastIndexOf("re");
  // console.log(lastIndexOf_re);


  // //Example 2: Finding characters at specified index positions using  "charAt(index)"  Method
  // let poem3 = "Roses are red, violets are blue, if I can do JS, then you can too!";
  // let pos1 = poem3.charAt(10);
  // console.log(pos1);

  // //Example 3: Trying to find a non-existent index position in an array
  // let pos2 = poem3.charAt(1000);
  // console.log(pos2);   //LOGS "   " 
 










  //CREATING SUBSTRINGS USING    "slice(start, end)"   METHOD
  /*
  - Returns new string 
  - Param1 = Index at which we start creating a new array from some array
  - Param2 = Index at which we stop i.e. will not be included in substring...
  - ...(if no end is specified, splice continues to end of original string)
  */
  //Example 1:
  // let str = "Create a substring";
  // let substr1 = str.slice(5);
  // let substr2 = str.slice(0,3);
  // console.log("1:", substr1);  //LOGS "e a substring"
  // console.log("2:", substr2);  //LOGS "Cre"










 //REPLACING PARTS OF THE STRING USING   "replace(old, new)"   METHOD
 /*
 - Argument 1 = String to be replaced from original
 - Argument 2 = The value to be inserted into previously targeted argument
 */
 //Example 1 :
//  let hi = "Hi buddy";
//  let new_hi = hi.replace("buddy", "Pascal");
//  console.log(new_hi);  //LOGS "Hi Pascal"  (Must capture result otherwise it disappears)


 //Example 2 : Trying to replace a word that isn't in original string 
//  let new_hi2 = hi.replace("not there", "never there");
//  console.log(new_hi2); //LOGS Original String = Hi buddy"


 //Example 3 : Replaces first instance of target
 // let s3 = "hello hello";
 // let new_s3 = s3.replace("hello", "oh");
 // console.log(new_s3);   //LOGS "oh hello"


 //Exampl 4 : To replace ALL instances in target string
//  let s3 = "hello hello";
//  let new_s3 = s3.replaceAll("hello", "oh");
//  console.log(new_s3);   //LOGS "oh oh"










  //UPPERCASE & LOWERCASE
  /*
  - Must capture result because we're not changing original string but making a new one
  */
  //Example 1: (uppercase)
  // let low_bye = "bye!";
  // let up_bye = low_bye.toUpperCase();
  // console.log(up_bye);


  // //Example 2: (lowercase)
  // let caps = "HI HOW ARE YOU?";
  // let fixed_caps = caps.toLowerCase();
  // console.log(fixed_caps);


  //Example 3: Specifying the letter you wish to change the case for (to lower/upper)
  // let caps = "HI HOW ARE YOU?";
  // let fixed_caps = caps.toLowerCase();
  // let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
  // console.log(first_capital);












 // //START & END OF A STRING
 // //Example 1: 
 // let encouragement = "You are doing great, keep up the good work!";
 // let bool_start = encouragement.startsWith("You");   //Checks if the first word in string is "You"
 // console.log(bool_start);   //LOGS "true"

 // //Example 2: (method is case sensitive)
 // let bool_start2 = encouragement.startsWith("you");
 // console.log(bool_start2);   //LOGS "false" because of case sensitivity


 // //Example 3: (fix problem above if case sensitivity is not important)
 // let bool_start3 = encouragement.toLowerCase().startsWith("you");  
 // console.log(bool_start3); //Above line can affect performance for large strings


 //Example 1: Checking if string ends with cetain string
 // let encouragement2 = "You are doing really great Bhabha! Keep up the good work!";
 // let bool_end = encouragement2.endsWith("Something else");
 // console.log(bool_end);  //LOGS "false"









// // // // // // // /*    PRACTICE EXERCISE 8.4    */
// // // // // // // const aString = "senTENCE thIs will be capiTalized for EACH WORD into This Will Be Capitalized For Each Word:";
// // // // // // // function stringCaps(string) {
// // // // // // //     string = string.toLowerCase();
// // // // // // //     const tempArray = [];  //4. Will hold our words when we capitilize them
// // // // // // //     let words = string.split(" ");  //5. At every space in the string, a new array item will be  created
// // // // // // //     words.forEach(word => {
// // // // // // //         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);  
// // // // // // //         //code above: Capitilize 1st letter & return remaining letters as lowercase
// // // // // // //         tempArray.push(temp);
// // // // // // //     });
// // // // // // //     return tempArray.join(" ")  //Converts array into a string with spaces inbetween each array item
// // // // // // // }
// // // // // // // console.log("1. " + aString);
// // // // // // // console.log("2. " + stringCaps(aString));











// // // // // // /*  PRACTICE EXERCISE 8.5  */
// // // // // // let val = "We love JS. It  is interesting to code!";
// // // // // // val = val.toLowerCase();
// // // // // // let vowels = ["o" , "l" , "s" , "e"];
// // // // // // vowels.forEach((letter, index) => {
// // // // // //     console.log(letter);
// // // // // //     val = val.replaceAll(letter, index);  //OLDvsNEW (i.e. "letter"=OLD; "index"=NEW)
// // // // // // });
// // // // // // console.log(val);










 // //NUMBER METHODS
 // //CHECKING IF NaN USING    "isNaN()"    METHOD
 // // let x = 34;
 // // console.log(isNaN(x));   //LOGS "false"
 // // console.log(!isNaN(x));  //LOGS "true"
 // // let str = "hi";
 // // console.log(isNaN(str));  //LOGS "true"

 // let str1 = "5";   //JS reads it as number even though it's in quotation marks
 // console.log(isNaN(str1));    //i.e. LOGS "false"










 // //CHECKING IF SOMETHING IS FINITE USING     "isFinite()"    METHOD
 // /*
 // - Returns 'false' for "NaN, Infinity, Undefined"
 // - Returns 'true' for every other value
 // */
 // //EXAMPLE 1:
 // let x = 3;
 // let str = "finite";
 // console.log(isFinite(x));  //LOGS "true"
 // console.log(isFinite(str));  //LOGS "false"
 // console.log(isFinite(Infinity));  //LOGS "false"
 // console.log(isFinite(10 / 0));   //LOGS "false"  










 //CHECKING IF SOMETHING IS AN INTEGER USING    "isInteger()"   METHOD
 /*
 - A local method therefore must refer to Number object to use it
 - Returns 'true' if value is integer ELSE returns 'false'
 */
 //EXAMPLE 1:
 // let x = 3;
 // let str = "integer";
 // console.log(Number.isInteger(x));  //true
 // console.log(Number.isInteger(str));  //false
 // console.log(Number.isInteger(Infinity));  //false
 // console.log(Number.isInteger(2.4));  //false









 //SPECIFYING NUMBER OF DECIMALS USING    "toFixed()"   METHOD
 //Must store results because we're not changing original value but creating new one
 //EXAMPLE 1:
// // let num = 1.23456;
// // let newNum = num.toFixed(2);  //Rounds off but LEAVES two decimal places
// // console.log("1. to fixed method: " + num + " = " + newNum);


// // // // //EXAMPLE 2:
// // // // let num2 = 1.23456;
// // // // let newNum2 = num2.toFixed(3);
// // // // console.log("2. " + num2 + " = " + newNum2);







 //SPECIFYING PRECISION
 //You state the number of digits to be in the final value
 //EXAMPLE 1:
 // let x = 1.23456;
 // let newX = x.toPrecision(2);  
 // console.log(newX);  //LOGS "1.2"

 // //EXAMPLE 2: (NOTE: also rounds up)
 // let x2 = 1.23456;
 // let newX2 = x2.toPrecision(4);
 // console.log(newX2);  //LOGS: 1.235  (NOTE: also rounds up)






 //MATH METHODS
 //FINDING HIGHEST & LOWEST NUMBER USING       "max()" && "min()"   METHOD
 //EXAMPLE 1: (max)
 // let highest = Math.max(2, 56, 12, 1, 233, 4);
 // console.log("Max = " + highest);

 // //EXAMPLE 2: (min)
 // let lowest = Math.min(2, 56, 12, 1, 233, 4);
 // console.log("Min = " + lowest);

 //EXAMPLE 3: (Non-numeric)
 //Below does not ignore strings so it cannot determine which is highest
 // let highestOfWords = Math.max("hi", 3, "bye");
 // console.log(highestOfWords);  //LOGS "NaN"









 //SQUARE ROOT & RAISING TO THE POWER OF USING    "sqrt()" && "pow(base, exponent)"  METHOD
 //EXAMPLE 1: (square root)
 // let result = Math.sqrt(64);
 // console.log("Sqrt(64) = " + result);

 //EXAMPLE 2: (exponent/power of)
//  let result2 = Math.pow(5, 3);
//  console.log("5*5*5 = " + result2);













 //TURNING DECIMALS INTO INTEGERS USING   "round()" && "ceil()"   METHOD
 //EXAMPLE 1: (rounding off)
 // let x = 6.78;
 // let y = 5.34;
 // console.log("X:", x, "becomes", Math.round(x));
 // console.log("Y:", y, "becomes", Math.round(y));


 //EXAMPLE 2: (always rounds up)
// // let x2 = 6.78;
// // let y2 = 5.34;
// // console.log("X:", x2, "becomes", Math.ceil(x2));
// // console.log("Y:", y2, "becomes", Math.ceil(y2));


//EXAMPLE 3: (always rounds down)
// // let x3 = 6.78;
// // let y3 = 5.34;
// // console.log("X:", x3, "becomes", Math.floor(x3));
// // console.log("Y:", y3, "becomes", Math.floor(y3));


 // //EXAMPLE 4: (negative numbers)
 // let x3 = 6.78;
 // let y3 = 5.34;
 // let negativeX = -x3;
 // let negativeY = -y3;
 // console.log("negativeX: " + negativeX +  " becomes " +  Math.ceil(negativeX));
 // console.log("negativeY: " +  negativeY +  " becomes " +  Math.ceil(negativeY));
// consider above using Math.floor (it would be counterintuitive)






  // //EXPONENTS & LOGARITHMS USING     "exp()" && "log()"    METHOD
  // /*
  // -Euler's number is used (e)
  // - Returns number to which 'e' must be raised to get the input
  // - 'log()' method calculates the Natural Logarithm
  // */
  // //EXAMPLE 1: 
  // // let x = 2;
  // // let exp = Math.exp(x);
  // // console.log("Exp: " + exp);
  // // let log = Math.log(exp);
  // // console.log("Log: " + log);










// // //  // /*  PRACTICE EXERCISE 8.6  */
// // //  // //1. Output the value of PI into the console using Math.
// // //  // console.log("1. ceiling/rounding up 5.7 = " + Math.ceil(5.7));
// // //  // console.log("2. flooring 5.7 = " + Math.floor(5.7));
// // //  // console.log("3. rounding off 5.7 = " + Math.round(5.7));


// // //  // console.log("1. RanNum between 0 - 10 : " + Math.floor(Math.random() * 11)); // 0 - 10
// // //  // console.log("2. RanNum between 1 - 10 : " + Math.floor(Math.random() * 10 + 1)); // 1 - 10
// // //  // console.log("3. RanNum between 1 - 100 : " + Math.floor(Math.random() * 100 + 1)); // 1 - 100


// // //  // function ranNum(min,  max) {
// // //  //     return Math.floor(Math.random() * (max - min + 1)) + min; //?
// // //  // }


// // //  // for (let x = 0; x < 100; x++) {
// // //  //     console.log(ranNum(1, 100));
// // //  // }












  //DATE METHODS
  //CREATING DATES
  //EXAMPLE 1: (using CONSTRUCTOR not Built-in method)
//   let currentDateTime = new Date();
//   console.log(currentDateTime);

  // //EXAMPLE 2: BUILT-IN method "now()"
//  let now2 = Date.now();
//  console.log("Current number of seconds since 01/01/1970 = " + now2);    //LOGS currnt time in 'seconds since 1 january 1970'-->Represents Unix Epoch

//  let milliDate = new Date(1000);  //Adds 1 000 milliseconds to Unix epoch time
//  console.log("Adding 1000milliseconds : " + milliDate);



  // //EXAMPLE 3: (converting string to Date)
//   let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
//   console.log(stringDate);


  // //EXAMPLE 4: (specifying certain date using Constructor)
  // /*
  // new Date(year, month(Jan=0 && Dec=11), Day, Hour, Minute, Second, Millisecond)
  // */
  // let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
  // console.log(specificDate);




  //METHODS TO GET & SET THE ELEMENTS OF A DATE
  //EXAMPLE 1: (getter)
  // let d = new Date();
  // console.log("Day of week:" + d.getDay());  //Day 1 = Sunday
  // console.log("Day of month:" + d.getDate());
  // console.log("Month:" + d.getMonth()); //Remember Jan = 0 && Dec = 11
  // console.log("Year:" + d.getFullYear());
  // console.log("Seconds:" + d.getSeconds());
  // console.log("Milliseconds:" + d.getMilliseconds());
  // console.log("Time:" + d.getTime());



  // //EXAMPLE 2: (setter)
  // let d = new Date();
  // d.setFullYear(2010);   //changing year
  // console.log("1. " + d);

  // d.setMonth(9);  //changing month
  // console.log("2. " + d);

  // d.setDate(10);  //changing day by altering date
  // console.log("3. " + d);

  // d.setHours(10);  //changing hours (number higher than 24hrs will roll over into the next date/s)...
  // console.log("4. " + d);   //...applies to min, secs & milli-secs

  // d.setTime(1622889770682);   //setting time will override the whole date
  // console.log("5. " + d);






 // //PARSING DATES USING    "parse()"     METHOD
 // /*
 // - Can parse Epoch dates from strings
 // - Accepts any format but must note order of days & months
 // */
 // //EXAMPLE 1:
//  let d1 = Date.parse("June 5, 2021");   //LOGS epoch date
//  console.log(d1);

 // //EXAMPLE 2:
 // // let d2 = Date.parse("6/5/2021");
 // // console.log(d2);






 // //CONVERTING DATE TO STRING USING   "toDateString()"    METHOD
 // //EXAMPLE 1:
// // let d = new Date();
// // console.log("1. " + d.toDateString());

// // //EXAMPLE 2:
// // let d2 = new Date();
// // console.log("2. " + d2.toLocaleDateString());






 /*   PRACTICE EXERCISE 8.7   */   
// // let theDateObject = new Date(2013, 11, 1);   // (year, month, date)
// // console.log("1. The date object = " + theDateObject);
// // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // let day = theDateObject.getDate();
// // let year = theDateObject.getFullYear();
// // let month = theDateObject.getMonth();
// // let dateObjectVariable = `${months[month]}  ${day} ${year}`;
// // console.log("2. Date = " + dateObjectVariable);



























