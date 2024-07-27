
// // //CHAPTER PROJECTS
// // // 1. EMAIL EXTRACTOR
// let firstArea = document.querySelector("textarea[name='txtarea']");
// let secArea = document.querySelector("textarea[name='txtarea2']");
// let btn = document.querySelector("button");

// btn.addEventListener("click", lookUp);

// function lookUp() {
//   let inputEmail = firstArea.value;
// // // If you want something at least once, but optionally more often, you can use the plus sign: +
//   let validEmail = inputEmail.match(
//     /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi  //'g' - to find all matches
//   );
//   let emailList = [];
//   for (let x = 0; x < validEmail.length; x++) {
//     if (emailList.indexOf(validEmail[x]) === -1) { //if input email is not already defined in email list array
//       emailList.push(validEmail[x]);
//     }
//   }
//   secArea.value = emailList.join(",");
// };


// // // //2. FORM VALIDATOR
// let myForm = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let errors = document.querySelectorAll(".error");
// let required = ["email", "userName", "password"];

// myForm.addEventListener("submit", validation);

// function validation(e) {
//   let data = {};
//   e.preventDefault();


//   errors.forEach(function (item) {
//     item.classList.add("hide");
//   });

//   let error = false;

//   inputs.forEach(function (el) {
//     let tempName = el.getAttribute("name");
//     if (tempName !== null) {
//       el.style.borderColor = "#97d328";
//       if (el.value.length === 0 && required.includes(tempName)) {
//         addError(el, "Required Field", tempName);
//         error = true;
//       }

//       if (tempName === "email") {
//         let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
//         let result = exp.test(el.value);
//         if (!result) {
//           addError(el, "Invalid Email", tempName);
//           error = true;
//         }
//       }

//       if (tempName === "password") {
//         let exp = /[A-Za-z0-9]+$/;
//         let result = exp.test(el.value);
//         if (!result) {
//           addError(el, "Only numbers and Letters", tempName);
//           error = true;
//         }
//         if (!(el.value.length > 6 && el.value.length < 15)) {
//           addError(el, "Needs to be between 7-14 " + "characters", tempName);
//           error = true;
//         }
//       }
//       data[tempName] = el.value;
//     }
//   });
//   if (!error) {
//     myForm.submit();
//   }
// }

// function addError(el, mes, fieldName) {
//   let temp = el.nextElementSibling;
//   temp.classList.remove("hide");
//   temp.textContent = fieldName.toUpperCase() + " " + mes;
//   el.style.borderColor = "red";
//   el.focus();
// }



// //3. SIMPLE MATH QUIZ
// let app = (function () {
//   let val1 = document.querySelector(".val1");
//   let val2 = document.querySelector(".val2");
//   let output = document.querySelector(".output");
//   let answer = document.querySelector("input");
//   let game = {};

//   function init() {
//     document.querySelector("button").addEventListener("click", checker);
//     loadQuestion();
//   }

//   function ranValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   function loadQuestion() {
//     game.val1 = ranValue(1, 100);
//     game.val2 = ranValue(1, 100);
//     game.answer = game.val1 + game.val2;
//     val1.textContent = game.val1;
//     val2.textContent = game.val2;
//   }

//   function checker() {
//     let mark = answer.value === game.answer ? "green" : "red";
//     output.innerHTML += 
//     `<div style="color:${mark}"> 
//     ${game.val1} + ${game.val2} = ${game.answer} (${answer.value})
//      </div>`;
//     answer.value = "";
//     loadQuestion();
//   }
//   return {
//     init: init,
//   };
// })();
// document.addEventListener("DOMContentLoaded", app.init);



