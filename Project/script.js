"use strict";

//*****************************************LOGIN FORM JS OBJECTS**********************************/
let form = document.getElementById("loginForm");
let username = document.getElementById("name");
let loginButton = document.getElementById("loginButton");

function convertToJson() {
    let formData = {};
    for (let i = 0; i < form.elements.length - 1; i++) {
        let element = form.elements[i];
        if (element.type !== "button" && element.id !== "password") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    console.log(jsonData);
    console.log(`Welcome back ${username.value} ! Check out or new specials!!`);
    
};

loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let rememberMe = document.getElementById("rememberMe").checked;


    if (username === "Bhabha" && password === "September") {
        if (rememberMe) {
            localStorage.setItem("username", username);
        } else {
            sessionStorage.setItem("username", username);
        }
        alert(`Welcome back ${username}!!`);
    } else {
        alert("Invalid username or password");
    }
});


// Check for saved username on page load
window.addEventListener("load", function() {
    let savedUsername = localStorage.getItem("username") || sessionStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("name").value = savedUsername;
        document.getElementById("rememberMe").checked = !localStorage.getItem("username");
    }
});



// localStorage.clear();
// sessionStorage.clear();