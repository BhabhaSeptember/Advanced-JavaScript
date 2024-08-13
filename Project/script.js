"use strict";

//*****************************************SIGNUP FORM JS OBJECTS**********************************/
let signupForm = document.getElementById("signupForm");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let signupPassword = document.getElementById("signupPassword");
let address = document.getElementById("address");
let signupButton = document.getElementById("signupButton");
let signLoginButton = document.getElementById("signLoginButton");



//*****************************************LOGIN FORM JS OBJECTS**********************************/
let loginForm = document.getElementById("loginForm");
let userName = document.getElementById("userName");
let loginPassword = document.getElementById("loginPassword");
let loginButton = document.getElementById("loginButton");






// console.log(formData);

// console.log(userName);

// function convertToJSON() {

// }




// window.addEventListener("load", ()=> {
//     loginForm.classList.add("hide");
//     signupForm.classList.add("show");
//     // break;
// });


loginButton.addEventListener("click", () => {
    let tempUserName = JSON.stringify(userName);
    // alert(`Welcome back ${tempUserName}`);
    console.log(tempUserName.textContent)
});

signupButton.addEventListener("click", () => {

});

signLoginButton.addEventListener("click", () => {
    console.log("Logging onto existing account...")
    // loginForm.classList.remove("hide");
    // signupForm.classList.remove("show");
})

console.log("Hello")