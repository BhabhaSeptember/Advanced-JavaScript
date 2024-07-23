// "use strict";

// //********************BOM********************/
// console.dir(window);
// console.log(window.history.length);
// window.history.go(-1); 
// console.log(history);

// console.dir(window.navigator);
// console.dir(navigator);

// console.dir(location);
// console.log(location.ancestorOrigins.length);


// //********************DOM**********************/
// console.dir(document);


// //**************SELECTING PAGE ELEMENTS********/

// const ele1 = document.querySelector("h1");
// console.dir(ele1);
// console.log(ele1);

// const eles = document.querySelectorAll(".output");
// console.log(eles);


//---------------------------------------------------------------

//*************PRACTICE EXERCISE 9.1*************/

console.dir(window);

console.log("Inner Height = ", window.innerHeight,"px");
console.log("Inner Width  = ", window.innerWidth,"px");

//*************PRACTICE EXERCISE 9.2*************/

console.log("\nPrototcol    =", window.location.protocol);
console.log("href         =", window.location.href);


//*************PRACTICE EXERCISE 9.3*************/

let output = document.querySelector(".output");
output.textContent = "Output Div";

output.classList.add("red");
output.id = "tester";
output.style.backgroundColor = "red";
console.log("Document URL =", document.URL);
// output.textContent = document.URL;




