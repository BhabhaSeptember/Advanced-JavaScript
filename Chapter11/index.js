// <!-- INTRO SPECIFYING EVENTS -->



// //SPECIFYING EVENTS WITH JS
// document.getElementById("unique").onclick = function() { magic(); };

// //PRACTICE EXERCISE 11.1
// let darkMode = false;
// window.onclick = () => {
//   console.log(darkMode);
//   if (!darkMode) {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     darkMode = true;
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     darkMode = false;
//   }
// };

//SPECIFYING EVENTS WITH EVENT LISTENERS
//document.getElementById("unique").addEventListener("click", magic);

//USE BELOW SYNTAX IF YOU NEED TO ADD PARAMETERS WITH THE FUNCTION
//document.getElementById("unique").addEventListener("click", function() { magic(arg1, arg2) });

//PRACTICE EXERCISE 11.2
// const divs = document.querySelectorAll("div");
// divs.forEach((el) => {
//   el.addEventListener("click", () => {
//     document.body.style.backgroundColor = el.textContent;
//   });
// });

//THE ONLOAD EVENT HANDLER
//window.onload = function() {
// whatever needs to happen after the page loads goes here}

//  document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
//    });

// <!-- <body onload="unique()"></body> -->

//PRACTICE EXERCISE 11.3
// document.addEventListener("DOMContentLoaded", (e) => {
//   message("Document ready", e);
// });
// window.onload = (e) => {
//   message("Window ready", e);
// };
// function message(val, event) {
//   console.log(event);
//   console.log(val);
// }

//MOUSE EVENT HANDLERS
//EXAMPLE 1 (SEE HTML)
// function changeColor() {
//   document.getElementById("divvy").style.backgroundColor = "blue";
// }

//EXAMPLE 2
// window.onload = function donenow() {
//   console.log("hi");
//   document.getElementById("divvy").addEventListener("mousedown", function () {
//     changeColor(this, "green");
//   });
//   document.getElementById("divvy").addEventListener("mouseup", function () {
//     changeColor(this, "yellow");
//   });
//   document.getElementById("divvy").addEventListener("dblclick", function () {
//     changeColor(this, "black");
//   });
//   document.getElementById("divvy").addEventListener("mouseout", function () {
//     changeColor(this, "blue");
//   });
// };

// console.log("hi2");

// function changeColor(el, color) {
//   el.style.backgroundColor = color;
// }

//PRACTICE EXERCISE 11.4 (SEE HTML)
// const output = document.querySelector(".output");
// output.textContent = "hello world";
// output.style.height = "200px";
// output.style.width = "400px";
// output.style.backgroundColor = "red";
// output.addEventListener("mousedown", function (e) {
//   message("green", e);
// });
// output.addEventListener("mouseover", function (e) {
//   message("red", e);
// });
// output.addEventListener("mouseout", function (e) {
//   message("yellow", e);
// });
// output.addEventListener("mouseup", function (e) {
//   message("blue", e);
// });
// function message(elColor, event) {
//   console.log(event.type);
//   output.style.backgroundColor = elColor;
// }

//THE EVENT TARGET PROPERTY
// console.dir(event);
//
//EXAMPLE 1 (SEE HTML)
// function triggerSomething() {
//     console.dir(event.target);
//     }

//EXAMPLE 2 (SEE HTML)
// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.
//    value);
//     }
//     function message(m) {
//     document.getElementById("welcome").innerHTML = m;
//     }

//PRACTICE EXERCISE 11.5
// const myInput = document.querySelector("input[name='message']");
// const output = document.querySelector(".output");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const log = [];
// btn1.addEventListener("click", tracker);
// btn2.addEventListener("click", tracker);
// btn3.addEventListener("click", (e) => {
//   console.log(log);
// });
// function tracker(e) {
//   output.textContent = myInput.value;
//   const ev = e.target;
//   console.dir(ev);
//   const temp = {
//     message: myInput.value,
//     type: ev.type,
//     class: ev.className,
//     tag: ev.tagName,
//   };
//   log.push(temp);
//   myInput.value = "";
// }

// //DOM EVENT FLOW (SEE CSS & HTML)
// function bubble() {
//   console.log(this.innerText);
// }
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", bubble, true);
// }

//PRACTICE EXERCISE 11.6 (SEE CSS & HTML)
// const main = document.querySelector(".container");
// const boxes = document.querySelectorAll(".box");

// main.addEventListener(
//   "click",
//   (e) => {
//     console.log("4");
//   },
//   false
// );

// main.addEventListener(
//   "click",
//   (e) => {
//     console.log("1");
//   },
//   true
// );

// boxes.forEach((ele) => {
//   ele.addEventListener(
//     "click",
//     (e) => {
//       console.log("3");
//       console.log(e.target.textContent);
//     },
//     false
//   );

//   ele.addEventListener(
//     "click",
//     (e) => {
//       console.log("2");
//       console.log(e.target.textContent);
//     },
//     true
//   );
// });

//ONCHANGE && ONBLUR (SEE HTML)
// function logEvent() {
//   let p = event.target;
//   if (p.name === "firstname") {
//     message("First Name Changed to " + p.value);
//   } else {
//     message("Last Name Changed to " + p.value);
//   }
// }
// function sendInfo() {
//   let p = event.target.parentElement;
//   message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
// function message(m) {
//   document.getElementById("welcome").innerHTML = m;
// }

//PRACTICE EXERCISE 11.7 (SEE HTML)

// const output = document.querySelector(".output1");

// const in1 = document.querySelector("input[name='first']");
// const in2 = document.querySelector("input[name='last']");

// in1.addEventListener("change", (e) => {
//   console.log("change");
//   updater(in1.value);
// });

// in1.addEventListener("blur", (e) => {
//   console.log("blur");
// });

// in1.addEventListener("focus", (e) => {
//   console.log("focus");
// });

// in2.addEventListener("change", (e) => {
//   console.log("change");
//   updater(in2.value);
// });

// in2.addEventListener("blur", (e) => {
//   console.log("blur");
// });

// in2.addEventListener("focus", (e) => {
//   console.log("focus");
// });

// function updater(str) {
//   output.textContent = str;
// }

//KEY EVENT HANDLER
//event.key;

//EXAMPLE 1(SEE HTML)
// function numCheck() {
//   message("Number: " + !isNaN(event.key));
//   return !isNaN(event.key);
// }
// function numCheck2() {
//   message("Not a number: " + isNaN(event.key));
//   return isNaN(event.key);
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

// onkeypress="return numCheck2()";

//EXAMPLE 2 (SEE HTML)
// function numCheck() {
//   message(!isNaN(event.key));
//   return !isNaN(event.key);
// }
// function numCheck2() {
//   message(isNaN(event.key));
//   return isNaN(event.key);
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

//PRACTICE EXERCISE 11.8 (SEE HTML)
// const output = document.querySelector(".output");
// const eles = document.querySelectorAll("input");

// eles.forEach((el) => {
//   el.addEventListener("keydown", (e) => {
//     if (!isNaN(e.key)) {
//       output.textContent += e.key;
//     }
//   });
//   el.addEventListener("keyup", (e) => {
//     console.log(e.key);
//   });
//   el.addEventListener("paste", (e) => {
//     console.log("pasted");
//   });
// });

//DRAG AND DROP ELEMENTS (SEE HTML & CSS)
// let holderItem;
// function dStart() {
//   holderItem = event.target;
// }
// function nDrop() {
//   event.preventDefault();
// }
// function dDrop() {
//   event.preventDefault();
//   if (event.target.className === "box") {
//     event.target.appendChild(holderItem);
//   }
// }

//PRACTICE EXERCISE 11.9 (SEE HTML & CSS)
// const dragme = document.querySelector("#dragme");
// dragme.addEventListener("dragstart", (e) => {
//   dragme.style.opacity = 0.5;
// });
// dragme.addEventListener("dragend", (e) => {
//   dragme.style.opacity = "";
// });

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.addEventListener("dragenter", (e) => {
//     console.log("dragenter");
//     e.target.classList.add("red");
//   });
//   box.addEventListener("dragover", (e) => {
//     console.log("dragover");
//     e.preventDefault();
//   });
//   box.addEventListener("dragleave", (e) => {
//     console.log("dragleave");
//     e.target.classList.remove("red");
//   });
//   box.addEventListener("drop", (e) => {
//     e.preventDefault();
//     console.log("dropped");
//     e.target.appendChild(dragme);
//   });
// });
// function dragStart(e) {
//   console.log("Started");
// }

//FORM SUBMISSION
//EXAMPLE 1 (SEE HTML)
// let q = window.location.search;
// let params = new URLSearchParams(q);
// let name = params.get("name");
// console.log(name);

//EXAMPLE 2 (SEE HTML)
// function valForm() {
//   var p = event.target.children;
//   if (p.firstName.value === "") {
//     message("First name required!!");
//     return false;
//   }
//   if (p.lastName.value === "") {
//     message("Last name required!!");
//     return false;
//   }
//   if (p.age.value === "") {
//     message("Age required!!");
//     return false;
//   }
//   return true;
// }
// function message(m) {
//   document.getElementById("wrapper").innerHTML = m;
// }

//PRACTICE EXERCISE 11.10 (SEE HTML)
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   let error = false;
//   if (checker(form.first.value)) {
//     console.log("First Name required");
//     error = true;
//   }
//   if (checker(form.last.value)) {
//     console.log("Last Name required");
//     error = true;
//   }
//   if (form.age.value < 19) {
//     console.log("Only above 18 allowed");
//     error = true;
//   }
//   if (error) {
//     e.preventDefault();
//     console.log("please review the form");
//   }
// });

// function checker(val) {
//   console.log(val.length);
//   if (val.length === 0 ) {
//     return true;
//   }
//   return false;
// }

//ANIMATING ELEMENTS (SEE HTML & CSS)
// function toTheRight() {
//   let b = document.getElementById("block");
//   let x = 0;
//   setInterval(function () {
//     if (x === 600) {
//       clearInterval();
//     } else {
//       x++;
//       b.style.left = x + "px";
//     }
//   }, 2);
// }

//PRACTICE EXERCISE 11.11 (SEE HTML & CSS)
// const main = document.querySelector("#block");
// let mover = { speed: 50, dir: 1, pos: 0 };
// main.addEventListener("click", moveBlock);
// function moveBlock() {
//   let x = 30;
//   setInterval(function () {
//     if (x < 1) {
//       clearInterval();
//     } else {
//       if (mover.pos > 800 || mover.pos < 0) {
//         mover.dir *= -1;
//       }
//       x--;
//       mover.pos += x * mover.dir;
//       main.style.left = mover.pos + "px";
//       console.log(mover.pos);
//     }
//   }, 2);
// }



