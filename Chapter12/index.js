"use strict";

//*************************REGULAR EXPRESSIONS***************/
// let text = "I love JavaScript!";
// console.log(text.match(/javascript/)); //null
// console.log(text.match(/javascript/i)); //i = case insensitive

//*****************SPECIFYING MULTIPLE OPTIONS FOR WORD********/

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));
// console.log(text.match(/javascript|nodejs|react/gi)); //g = finds all matches

//*******************CHARACTER OPTIONS*************************/
// let text = "d";
// console.log(text.match(/[abc]/)); //null
// console.log(text.match(/[abcd]/)); //index: 0; (original string)
// console.log(text.match(/[a-d]/));

// let text = "t";
// console.log(text.match(/[a-zA-Z]/)); //lower and uppercase matches
// console.log(text.match(/[a-z]/i));

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/)); //null (doesnt include special characters)

// let text = "Just some text.";
// console.log(text.match(/./g)); //"." is wildcard. checks for everything

// let text = "Just some text.";
// console.log(text.match(/\./g)); //escape character allows to search for the full stop.takes away special meaning of the full stop wild card

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g)); // "\d" looks for digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g)); //"\s" looks for white spaces

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));  //"\b" looks for matches in the beginning of a word

// let nr = 357;
// console.log(nr.match(/3/g)); //type error (cannot use match method on numbers. Only on strings)

// let nr = "357";
// console.log(nr.match(/3/g)); //will return a match

//*********************************GROUPS********************************/

// let text = "I love JavaScript!";
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi)); //looks for a g character that may or may not be preceded by an n

// let text = "123123123";
// console.log(text.match(/(123)+/)); //"+" looks for occurring once but also optionally repeated multiple times

// let text = "123123123a";
// console.log(text.match(/(123)*/));
// console.log(text.match(/(123)*a/));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));  //{min, max}

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i)); //< name of group >

//*********************************PRACTICAL REGEX********************************/

//***SEARCHING AND REPLACING STRINGS***/

// let text = "That's not the case.";
// console.log(text.search(/Case/i)); //returns index number

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript")); //(arg1=target to replace, arg2=replacement of target words)
// console.log(text.replace(/Coding/g, "JavaScript"));

//*********************************EMAIL VALIDATION********************************/

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "septemberbhabha@gmail.com";
// let invalidEmail = "september.bhabha@gmail@.com";

// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));

//*******************************FUNCTIONS & ARGUMENTS OBJECT********************************/

// function test(a, b, c) {
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");

// //Updating arguments
// function test(a, b, c) {
//   a = "nice";
//   arguments[1] = "JavaScript";

//   console.log("first:", a, arguments[0]);
//   console.log("second:", b, arguments[1]);
//   console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

//*******************************JAVASCRIPT HOISTING********************************/

//VAR BELOW DOESNT THROW ERRORS
// var x;
// x = 5;
// console.log(x);
//VS
// x = 5;
// console.log(x);
// var x;

//LET THROWS ERRORS FOR SECOND EXAMPLE
// let x;
// x = 5;
// console.log(x);
//vs
// x = 5; //cannot access 'x' before it's been initialized
// console.log(x);
// let x;

//*******************************USING STRICT MODE********************************/

// function sayHi() {
//   greeting = "Hello!"; //WITH 'USE STRICT' IT THROWS AN ERROR BECAUSE GREETING IS NOT DEFINED
//   console.log(greeting);
// }
// sayHi();

//*********************************ERROR HANDLING********************************/

// try {
//     trySomething();
//    } catch (e) {
//     console.log("Oh oh");
//    } finally {
//     console.log("Error or no error, I will be logged!");
//    };

//  function trySomething() {
//     alert("Everything Works Now")
//  };

//*********************************USING COOKIES********************************/

// document.cookie = "name=Bhabha;favoriteColor=aqua";
// let cookie = decodeURIComponent(document.cookie);
// let cookieList = cookie.split(";");
// for (let i = 0; i < cookieList.length; i++) {
//   let c = cookieList[i];
//   if (c.charAt(0) === " ") {
//     c = c.trim(); //Removes the leading and trailing white space and line terminator characters from a string.
//   }
//   if (c.startsWith("name")) {
//     alert(c.substring(5, c.length));
//   }
// }

//-----SEE HTML

// function setCookie(e) {
//   document.cookie = "name=" + e.value + ";";
// }
// function sayHi(key) {
//   let name = getCookie(key);
//   document.getElementById("hi").innerHTML = "Hi " + name;
// }
// function getCookie(key) {
//   let cookie = decodeURIComponent(document.cookie);
//   let cookieList = cookie.split(";");
//   for (let i = 0; i < cookieList.length; i++) {
//     let c = cookieList[i];
//     if (c.charAt(0) == " ") {
//       c = c.trim();
//     }
//     if (c.startsWith(key)) {
//       console.log("hi" + c);
//       return c.substring(key.length + 1, c.length);
//     }
//   }
// }

//*********************************LOCAL STORAGE********************************/

// let message = "Hello storage!";
// localStorage.setItem("example", message);
// if (localStorage.getItem("example")) {
//   document.getElementById("stored").innerHTML = localStorage.getItem("example");
// }

// console.log(window.localStorage.key(0));

// console.log(window.localStorage.getItem(window.localStorage.key(0)));

// console.log(window.localStorage.removeItem("example"));
// console.log(window.localStorage.getItem(window.localStorage.key(0)));
// window.localStorage.clear();
// console.log(window.localStorage);

//*********************************JSON********************************/

// let object = {
//   companies: [
//     {
//       name: "JavaScript Code Dojo",
//       addresses: [
//         {
//           street: "123 Main street",
//           zipcode: 12345,
//           city: "Scott",
//         },
//         {
//           street: "123 Side street",
//           zipcode: 35401,
//           city: "Tuscaloosa",
//         },
//       ],
//     },
//     {
//       name: "Python Code Dojo",
//       addresses: [
//         {
//           street: "123 Party street",
//           zipcode: 68863,
//           city: "Nebraska",
//         },
//         {
//           street: "123 Monty street",
//           zipcode: 33306,
//           city: "Florida",
//         },
//       ],
//     },
//   ],
// };

//*********************************PARSING JSON********************************/

// let str = '{"name": "Bhabha", "age": 29}';
// let obj = JSON.parse(str);
// console.log(obj);

// console.log(obj.name, "is", obj.age, "years old.");

// let dog = {
//   name: "Pipa",
//   breed: "Yorkie",
// };
// let strdog = JSON.stringify(dog);
// console.log(typeof strdog);
// console.log(strdog);


//--------------------------------------------------------------------

// // //********PRACTICE EXERCISE 12.1 (SEE HTML)***********
// // // const output = document.getElementById("output");
// // // const searchValue = document.getElementById("sText");
// // // const replaceValue = document.getElementById("rText");
// // // document.querySelector("button").addEventListener("click", lookUp);
// // // function lookUp() {
// // //   const s = output.textContent;
// // //   const rt = replaceValue.value;
// // //   const re = new RegExp(searchValue.value, "gi");
// // //   if (s.match(re)) {
// // //     let newValue = s.replace(re, rt);
// // //     output.textContent = newValue;
// // //   }
// // // }


// // //***********PRACTICE EXERCISE 12.2 (SEE HTML) ***********
// // // const output = document.querySelector(".output");
// // // const emailVal = document.querySelector("input");
// // // const btn = document.querySelector("button");
// // // const emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
// // // btn.addEventListener("click", (e) => {
// // //   const input = emailVal.value;
// // //   let response = "";
// // //   const result = emailExp.test(input);

// // //   if (!result) {
// // //     response = "Invalid Email";
// // //     output.style.color = "red";
// // //   } else {
// // //     response = "Valid Email";
// // //     output.style.color = "green";
// // //   }
// // //   emailVal.value = "";
// // //   output.textContent = response;
// // // });



// // //***********PRACTICE EXERCISE 12.6***********
// // // console.log(document.cookie);
// // //  console.log(rCookie("test1"));
// // //  console.log(rCookie("test"));
// // //  cCookie("test1", "new Cookie", 30);
// // //  dCookie("test2");
// // //  function cCookie(cName, value, days) {
// // //  if (days) {
// // //  const d = new Date();
// // //  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
// // //  let e = "; expires=" + d.toUTCString();
// // //  document.cookie = cName + "=" + value + e + "; path=/";
// // //  }
// // //  }
// // //  function rCookie(cName) {
// // //  let cookieValue = false;
// // //  let arr = document.cookie.split("; ");
// // //  arr.forEach(str => {
// // //  const cookie = str.split("=");
// // //  if (cookie[0] == cName) {
// // //  cookieValue = cookie[1];
// // //  }
// // //  });
// // //  return cookieValue;
// // //  }
// // //  function dCookie(cName) {
// // //  cCookie(cName, "", -1);
// // //  }


// // //***********PRACTICE EXERCISE 12.7 (SEE HTML)***********
// // // const userTask = document.querySelector(".main input");
// // // const addBtn = document.querySelector(".main button");
// // // const output = document.querySelector(".output");
// // // const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];
// // // addBtn.addEventListener("click", createListItem);
// // // if (tasks.length > 0) {
// // //   tasks.forEach((task) => {
// // //     genItem(task.val, task.checked);
// // //   });
// // // }
// // // function saveTasks() {
// // //   localStorage.setItem("tasklist", JSON.stringify(tasks));
// // // }
// // // function buildTasks() {
// // //   tasks.length = 0;
// // //   const curList = output.querySelectorAll("li");
// // //   curList.forEach((el) => {
// // //     const tempTask = {
// // //       val: el.textContent,
// // //       checked: false,
// // //     };
// // //     if (el.classList.contains("ready")) {
// // //       tempTask.checked = true;
// // //     }
// // //     tasks.push(tempTask);
// // //   });
// // //   saveTasks();
// // // }
// // // function genItem(val, complete) {
// // //   const li = document.createElement("li");
// // //   const temp = document.createTextNode(val);
// // //   li.appendChild(temp);
// // //   output.append(li);
// // //   userTask.value = "";
// // //   if (complete) {
// // //     li.classList.add("ready");
// // //   }
// // //   li.addEventListener("click", (e) => {
// // //     li.classList.toggle("ready");
// // //     buildTasks();
// // //   });
// // //   return val;
// // // }
// // // function createListItem() {
// // //   const val = userTask.value;
// // //   if (val.length > 0) {
// // //     const myObj = {
// // //       val: genItem(val, false),
// // //       checked: false,
// // //     };
// // //     tasks.push(myObj);
// // //     saveTasks();
// // //   }
// // // }


// // //***********PRACTICE EXERCISE 12.8***********
// // // let myList = [
// // //   {
// // //     name: "Learn JavaScript",
// // //     status: true,
// // //   },
// // //   {
// // //     name: "Try JSON",
// // //     status: false,
// // //   },
// // // ];
// // // reloader();
// // // function reloader() {
// // //   myList.forEach((el) => {
// // //     console.log(`${el.name} = ${el.status}`);
// // //   });
// // // }


// // //***********PRACTICE EXERCISE 12.9***********
// // // let myList = [
// // //   {
// // //     name: "Learn JavaScript",
// // //     status: true,
// // //   },
// // //   {
// // //     name: "Try JSON",
// // //     status: false,
// // //   },
// // // ];
// // // const newStr = JSON.stringify(myList);
// // // const newObj = JSON.parse(newStr);
// // // newObj.forEach((el) => {
// // //   console.log(el);
// // // });