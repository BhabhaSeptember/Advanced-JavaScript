"use strict";

//**************************COLLAPSING ACCORDION**************/

// const titles = document.querySelectorAll(".title");
// const myTexts = document.querySelectorAll(".myText");

// titles.forEach((title) => {
//     title.addEventListener("click", (t) => {
//         console.log(title.nextElementSibling);
//         remover();
//         title.nextElementSibling.classList.toggle("active");

//     } );
// });
// function remover() {
//     myTexts.forEach((text) => {
//         text.classList.remove("active");
//     })
// }

//**************************INTERACTIVE VOTING SYSTEM**************/

// let myArray = ["Paul", "Steve", "Jabu", "Pravesh", "Niniola"];

// let input = document.getElementById("addFriend");
// let addButton = document.getElementById("addNew");
// let output = document.getElementById("output");

// addButton.addEventListener("click", () => {
//     let newFriend = input.value;
//     myArray.push(newFriend);
//     adder(newFriend, myArray.length, 0);
// });

// function build() {
//     myArray.forEach((friend, index) => {
//         adder(friend, index, 0);
//     });
// };
// window.onload = build();

// function adder(friendName, index, counter) {
//     const tr = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     const td3 = document.createElement("td");

//     td1.textContent = index + 1;
//     td2.textContent = friendName;
//     td3.textContent = counter;

//     tr.append(td1);
//     tr.append(td2);
//     tr.append(td3);

//     tr.addEventListener("click", () => {
//         console.log(tr.lastChild);
//         let value = Number(tr.lastChild.textContent);
//         value++;
//         tr.lastChild.textContent = value;
//     })
//     output.appendChild(tr);
// };

//**************************HANGMAN GAME*******************/


const game = { cur: "", solution: "", puzz: [], total: 0 };
const myWords = ["Butter", "Salt", "Chutney"];
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const btn = document.querySelector("button");
btn.addEventListener("click", startGame);

function startGame() {
  if (myWords.length > 0) {
    btn.style.display = "none";
    game.puzz = [];
    game.total = 0;
    game.cur = myWords.shift();
    game.solution = game.cur.split(""); //turns array to string with spaces separating the words
    builder();
  } else {
    score.textContent = "No More Words.";
  }
}
function createElements(elType, parentEle, output) {
  const temp = document.createElement(elType);
  temp.classList.add("boxE");
  parentEle.append(temp);
  temp.textContent = output;
  return temp;
}

function updateScore() {
  score.textContent = `Total Letters Left : ${game.total}`;
  if (game.total <= 0) {
    console.log("game over");
    score.textContent = "Game Over";
    btn.style.display = "block";
}
}



function builder() {
  letters.innerHTML = "";
  puzzle.innerHTML = "";
  game.solution.forEach((lett) => {
    let div = createElements("div", puzzle, "-", "boxE");
    if (lett === " ") {
      div.style.borderColor = "white";
      div.textContent = " ";
    } else {
      game.total++;
    }
    game.puzz.push(div);
    updateScore();
  });
  for (let i = 0; i < 26; i++) {
    let temp = String.fromCharCode(65 + i); //universal alphabet ASCII
    let div = createElements("div", letters, temp, "box");
    let checker = function (e) {
      div.style.backgroundColor = "#ddd";
      div.classList.remove("box");
      div.classList.add("boxD");
      div.removeEventListener("click", checker);
      checkLetter(temp);
    };
    div.addEventListener("click", checker);
  }
}



function checkLetter(letter) {
  console.log(letter);
  game.solution.forEach((ele, index) => {
    if (ele.toUpperCase() === letter) {
      game.puzz[index].textContent = letter;
      game.total--;
      updateScore();
    }
  });
}
