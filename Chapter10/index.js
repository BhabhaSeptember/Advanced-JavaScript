"use strict";

//*********************BASIC DOM TRAVERSING***************/

//From Parent to Child (Moving Down DOM Tree)
// console.dir(document.body);
// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]); //[i] indicates indices

//From Child to Parent (Moving Up DOM Tree)
// console.dir(document.body.children.forest.children.tree2.parentElement);

//From Sibling to Sibling (Moving Sideways in DOM Tree)
// console.dir(document.body.children.forest.children.tree2);
// console.dir(document.body.children.forest.children.tree2.previousElementSibling);
// console.dir(document.body.children.forest.children.tree1.nextElementSibling);


//**********************SELECTING ELEMENTS AS OBJECTS**********/

// console.dir(document.body.children.greeting);


//CHANGING INNER TEXT

// document.body.children.greeting.innerText = "Bye!";


//CHANGING INNER HTML

// document.body.children.greeting.innerHTML = "<b>Bye!</b>";



//**********************ACCESSING ELEMENTS IN DOM**********/

//ACCESSING ELEMENTS BY ID
// let div2 = document.getElementById("two");
// div2.innerHTML = "<i><b>Hey!</b></i>";
// console.log(div2);


//ACCESSING ELEMENTS BY TAGNAME
// let divs = document.getElementsByTagName("div");
// console.log(divs);

// let item1 = document.getElementsByTagName("div").item(1); //second item in array (index 1)
// console.log(item1);

// let heading = document.getElementsByTagName("h1");
// console.log(heading);


//ACCESSING ELEMENTS BY CLASSNAME
// let theClass = document.getElementsByClassName("example");
// console.log(theClass);


//ACCESSING ELEMENTS WITH CSS SELECTOR
//QUERY SELECTOR()
// let div1 = document.querySelector("div");
// console.log(div1);

// let aClass = document.querySelector(".something");
// console.log(aClass);

// //QUERY SELECTOR ALL()
// let p = document.querySelectorAll("p");
// console.log(p);

// let divs = document.querySelectorAll("div");
// console.log(divs);


//*****************************ELEMENT CLICK HANDLER***************/

// function stop() {
//     alert("Ouch! Stop it!");
// };

// document.getElementById("one").onclick = function () {
//     alert("Ouch! Please Stop!");
// };


//*******************************THIS AND THE DOM******************/

// function reveal(e) {
//     console.log(e);
//     console.log(e.parentElement);
// }


//****************************MANIPULATING ELEMENT STYLE******************/

// function toggleDisplay() {
//     let p = document.getElementById("magic");
//     if (p.style.display ===  "none") {
//         p.style.display = "block";
//         console.log("Displayed!");
//     } else {
//         p.style.display = "none";
//         console.log("Disappeared!")
//     };
// };


// function rainbowify() {
//     let divs = document.getElementsByTagName("div");
//     for(let i = 0; i < divs.length; i++) {
//         divs[i].style.backgroundColor = divs[i].id;
//     };
// };


//****************************CHANGING CLASSES OF AN ELEMENT******************/
//ADDING CLASSES TO ELEMENTS

// function disappear() {
//     document.getElementById("shape").classList.add("hide");
// };

// //REMOVING CLASSES FROM ELEMENTS

// function change() {
//     document.getElementById("shape").classList.remove("blue");
// };


// //TOGGLING CLASSES
// function changeVisibility() {
//     document.getElementById("shape").classList.toggle("hide");
// };


//****************************MANIPULATING ATTRIBUTES**********************/

// function changeAttr() {
//     let e = document.getElementById("shape");
//     e.setAttribute("style", "background-color:red;border:1px solid black");
//     e.setAttribute("id", "new");
//     e.setAttribute("class", "circle");
// };


//***************************EVENT LISTENERS ON ELEMENTS**********************/

// window.onload = function () {
//     document.getElementById("square").addEventListener("click", changeColor);
// };

// function changeColor() {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// };


//***************************CREATING NEW ELEMENTS**********************/

function addRandomNumber() {
    let element = document.createElement("p");
    element.innerText = Math.floor(Math.random() * 100);
    document.body.appendChild(element); 
};