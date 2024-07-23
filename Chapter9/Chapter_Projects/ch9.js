"use strict";

let output = document.querySelector(".output");
let mainList = document.querySelector("ul");
mainList.id = "mainList";

let divs = document.querySelectorAll("div");

let divsArray = [];

for (let i = 0; i < divs.length; i++) {
    console.log(divsArray.push(divs[i]));
    
    // console.log(divs[i].tagName);

 divs[i].id = "id" + (i + 1);
 if (i % 2) {
 divs[i].style.color = "red"; //even numbers
 } else {
 divs[i].style.color = "blue"; //odd numbers
 }
}