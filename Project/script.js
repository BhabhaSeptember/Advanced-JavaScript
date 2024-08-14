"use strict";

//*****************************************LOGIN FORM JS OBJECTS**********************************/

function convertToJson() {
    let form = document.getElementById("loginForm");
    let username = document.getElementById("name");
    let formData = {};
    for (let i = 0; i < form.elements.length - 1; i++) {
        let element = form.elements[i];
        if (element.type !== "button" && element.id !== "password") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    console.log(jsonData);
    console.log(username.value);
    alert(`Welcome back ${username.value} ! \n\nCheck out our new specials!!`);
};
