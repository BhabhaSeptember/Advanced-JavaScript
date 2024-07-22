"use strict";

//********************BOM********************/
console.dir(window);
console.log(window.history.length);
window.history.go(-1); 
console.log(history);

console.dir(window.navigator);
console.dir(navigator);

console.dir(location);
console.log(location.ancestorOrigins.length);


//********************DOM**********************/
console.dir(document);


//**************SELECTING PAGE ELEMENTS********/

const ele1 = document.querySelector("h1");
console.dir(ele1);
console.log(ele1);

const eles = document.querySelectorAll(".output");
console.log(eles);