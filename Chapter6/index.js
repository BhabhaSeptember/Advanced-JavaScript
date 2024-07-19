//  // // // // // // // "use strict";  //NB: For EVERY JS Program

//  // // // // //INVOKING FUNCTIONS
//  // // // // // // nameOfTheFunction();
//  // // // // // // functionThatTakesInput("the input", 5, true);



//  // // // // //WRITING FUNCTIONS (syntax) 
//  // // // // // function nameOfTheFunction() {
//  // // // // //     //content of the function
//  // // // // //     }
//  // // // // // nameOfTheFunction();  

// // // // //EXAMPLE 1: 
//  function sayHello() {
//      let user = prompt("What's your name? ");
//      console.log("Hello" + user + "!");
//      }

//      sayHello();


// // // //EXAMPLE 2: (function-variable)
//  // // // let varContainingFunction = function() {
//  // // //     let varInFunction = "I'm a variable inside of a function.";
//  // // //     console.log("hi there!", varInFunction);
//  // // //     };
//  // // //     varContainingFunction();


//  // // //NOTE:
//  // // /*
//  // // Variables : ARE something & contain certain val
//  // // Functions : Are ACTIONS & bundle of statements executed when called
//  // // */


//  // // /* Practice exercise 6.1 ( DEMO!!! ) */
// //  function addNumbers(x, y) {
// //     return x + y;
// //  }
// //  let x = 2;
// //  let y = 5;
// //  console.log(addNumbers(x, y));
// //  console.log(addNumbers(1, 9));



//  // /* Practice exercise 6.2  ( DEMO!!! ) */   
//  let adjectives = ["Cheerful", "Bloated", "Greasy", "Warm"];
//  function theFunction() {
//      let userInput = prompt("Please enter your name below: ")
//      let randomAdjective = Math.floor(Math.random() * adjectives.length);
//      console.log(adjectives[randomAdjective] + " " + userInput);
//  }
//  theFunction();




//  //PARAMETERS & ARGUMENTS
//  //SYNTAX:
//  // function myFunc(param1, param2) {
//  //     // code of the function;
//  //     }
   

//  //EXAMPLE 1:     
// //  function addTwoNumbers(x, y) {
// //      console.log(x + y);
// //      }
// //      addTwoNumbers(3, 4);
// //      addTwoNumbers(12,-90);



//  /* Practice exercise 6.3     ( DEMO!!! )   */
// //  const val1 = 2;
// //  const val2 = 3;
// //  let operator = "-";
// //  function calc(x, y, op) {
// //      if (op === "-") {
// //          console.log(a - b);
// //      } else {
// //          console.log(a + b);
// //      }
// //  }
// //  calc(val1, val2, operator);







//  //DEFAULT or UNSUITABLE PARAMETERS
//  //EXAMPLE 1: 
//  // addTwoNumbers(); //this means ( 'undefined' + 'undefined' = NaN)

// //EXAMPLE 2: 
//  // function addTwoNumbers(x = 2, y = 3) {
//  //     console.log(x + y);
//  //     }
//  //     addTwoNumbers();
//  //     addTwoNumbers(6, 6); //LOGS: 6 + 6


//  // addTwoNumbers(10); // LOGS: 10 + 3  || x = 10 ; y = 3 (default)


//  // addTwoNumbers(1,2,3,4); //LOGS: only the first, two arguments are considered







 
//  //SPECIAL FUNCTIONS & OPERATORS
// //1. ARROW FUNCTIONS
//  /*
//  Different possible layouts
//  a) (param1, param2) => body of the function;
//  b) () => body of the function; 
//  c) param => body of the function;

//  d) (param1, param2) => {
//  // line 1;
//  // any number of lines;
//  };
//  */

// //EXAMPLE 1: (one param)
//  // let x = ["Driving"]
//  // function doingStuff(x) {
//  //     console.log(x);
//  //     }
//  // doingStuff(x);

//  // let doingStuffArrow = (x) => console.log(x); 
//  // doingStuffArrow("Jogging");



 

//  //EXAMPLE 2: (two param)
//  // let addTwoNumbers = (x, y) => console.log(x + y); 
//  // addTwoNumbers(5, 3); 





//  //EXAMPLE 3: (no param)
//  // let sayHi = () => console.log("hi"); 




//  //EXAMPLE 4: (arrays)
//  // const arr = ["squirrel", "alpaca", "buddy"];
//  // arr.forEach(e => console.log(e));


 

//  //2. SPREAD OPERATOR
//  /* 
//  - Number of dots before a referenced expression/string
//  - Spreads out arguments/elements of an array 
//  */
// //EXAMPLE 1: 
//  let spread = ["so", "much", "fun"];
//  let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
//  console.log(message);




//  //EXAMPLE 2: 
//  // function addTwoNumbers(x, y) {
//  //     console.log(x + y);
//  //     }
//  //     let arr = [5, 9];
//  //     addTwoNumbers(...arr); //instead of "addTwoNumbers(5, 9);"


//  //EXAMPLE 3:
//  // function addFourNumbers(x, y, z, a) {
//  //     console.log(x + y + z + a);
//  //     }
//  //     let arr = [5, 9];
//  //     let arr2 = [6, 7];
//  //     addFourNumbers(...arr, ...arr2); //instead of "addFourNumbers(5, 9, 6, 7);"






// //REST PARAMETER
// /* 
// - Same as 'Spread Operator' above
// - Symbol (...) is used inside function parameter list NOT in the function call statement 
// */
// //EXAMPLE 1: 
// //   function someFunction(param1, param2) {
// //     console.log(param1, param2);
// //     }
// //     someFunction("hi", "there!", "How are you?"); 



// //EXAMPLE 2: '...param2' leaves room for more arguments which are converted into an array under 'param2'
// //  function someFunction(param1, ...param2) {
// //      console.log(param1, param2);
// //      }
// //      someFunction("hi", "there!", "How are you?"); //

//  //   function someFunction(param1,...param2) {
//  //        console.log(param1, param2);
//  //    }
//  //    someFunction("Hi", "there!", "How are you?", "I am well", "Let's go out", "Where do we go to");



//  /* RETURNING FUNCTION VALUES */ 
//  //EXAMPLE 1: 
// //  let favoriteSubject = prompt("What is your favorite subject?"); //i.e. storing result of 'prompt' function in 'favoriteSubject' variable
// // console.log("Favorite Subject = " + favoriteSubject);


// //EXAMPLE 2: 
// // function addTwoNumbers(x, y) {
// // console.log(x + y);
// // }
//     //      }
//     //      let z = testAvailability();
//     //      console.log("Outside the function:", z);
//     //      console.log("Not available here:", y);



//  // /* LET vs VAR variables */
//  // /*
//  // LET = Block-based
//  // VAR = Function-based
//  // */

//  // // function doingStuff() {
//  // //     if (true) {
//  // //         var x = "local"; //makes variable 'function-scoped' so will be accessible after 'if' statement
//  // // }
//  // // console.log("1. " + x);
//  // // }
// //    console.log("I can access outer variables: " + nr);
// //  }
// //  }
// //  doOuterFunctionStuff(2);


// //EXAMPLE 2:
// //  function doOuterFunctionStuff(nr) {
// //    doInnerFunctionStuff(nr);
// //    function doInnerFunctionStuff(x) {
// //    let z = 10;
// //    console.log("Accessible here: " + z);
// //      }
// //    console.log("Not accessible: " + z);  //Outputs ERROR (Inner function can only deal with variables inside itself VS Parent functions)
// //    }
// //    doOuterFunctionStuff(2);


// // //EXAMPLE 3:
// //  function doOuterFunctionStuff(nr) {
// //    doInnerFunctionStuff(nr);   //Also outputs ERROR (Inner function is defined outside of inner function therefore out of sscope)
// //    function doInnerFunctionStuff(x) {
// //    let z = 10;
// //     console.log(z);
// //    }
// //    }
// //    doInnerFunctionStuff(3);



// // // // // // // // // /* PRACTICE EXERCISE 6.7 */
// // // // // // // // // let start = 10;
// // // // // // // // // function loop1(val) {
// // // // // // // // //   console.log(val);
// // // // // // // // // if ( val < 1) {
// // // // // // // // //   return;
// // // // // // // // // }
// // // // // // // // // return loop1(val - 1);
// // // // // // // // // }
// // // // // // // // // loop1(start);
// // // // // // // // // function loop2(val) {
// // // // // // // // //   console.log(val);
// // // // // // // // //   if (val > 0) {
// // // // // // // // //     val--;
// // // // // // // // //     return loop2(val);
// // // // // // // // //   }
// // // // // // // // //   return;
// // // // // // // // // }
// // // // // // // // // loop2(start);




//  // //ANONYMOUS FUNCTIONS
// //EXAMPLE 1:
//  // function doingStuffAnonymously() {
//  //   console.log("Not so secret though.");
//  //   }
//  //   doingStuffAnonymously();

// //EXAMPLE 2:
//  //   let functionVariable = function () {  //Invoke anon functions by assigning variable name
//  //     console.log("Anon Func: Not so secret though.");
//  //     }; 
//  //     functionVariable(); 


// // // // // // // /* PRACTICE 6.8 */
// // // // // // // let theFunction = function(username) {
// // // // // // //     console.log(username);
// // // // // // // }
// // // // // // // theFunction("Tracy");

// // // // // // // function theFunction2(password) {
// // // // // // //   console.log(password);
// // // // // // // }
// // // // // // // theFunction2("4PPR0V3D");




//  //FUNCTION CALLBACKS
//  //EXAMPLE 1: 
// //    let functionVariable = function () {  
// //      console.log("1. Anon Func(Func Var): Not so secret though.");
// //      }; 
// //      functionVariable(); 


// // //
// //  function doFlexibleStuff(executeStuff) {
// //    executeStuff();
// //    console.log("2. Inside doFlexibleStuffFunction.");
// //    }
// //    doFlexibleStuff(functionVariable);


// // //
// //    let anotherFunctionVariable = function() {
// //      console.log("3. Another anonymous function implementation.");
// //      }
// //      doFlexibleStuff(anotherFunctionVariable);



//  //PRACTICAL EXAMPLE: (Built-in function-->setTimeout())
// //  let youGotThis = function () {
// //    console.log("You're doing really well, keep coding!");
// //    };
// //  setTimeout(youGotThis, 5000); //(PRINTS ONCE) Waits 5secs before it prints (Units = ms therefore "5000ms"
// //  setInterval(youGotThis, 1000);  //(Built-in function-->setInterval()) (Prints message every 1second)










