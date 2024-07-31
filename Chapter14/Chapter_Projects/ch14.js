
//CHAPTER PROJECTS
//1. MATRIX EFFECT
// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "400");
// document.body.prepend(canvas);

// const colVal = [];
// for (let x = 0; x < 50; x++) { // # of value 0 items to be added to array (10px between each column)
//   colVal.push(0);
// }

// function matrix() {
//   ctx.fillStyle = "rgba(0,0,0,.05)"; //opacity produces fading effect when layered ontop of existing elements
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = "green"; //canvas font color

//   colVal.map((posY, index) => { //array holds vertical color position for output text
//     let output = Math.random() < 0.5 ? 0 : 1;
//     let posX = index * 10 + 10; //setting separated columns for each new character
//     //below fills canvas
//     ctx.fillText(output, posX, posY); //zero's in array are starting vertical position for content

//     //below: larger numbers fall further down y-axis
//     //random number creates staggered effect
//     if (posY > 100 + Math.random() * 300) {
//       colVal[index] = 0;
//     } else {
//       //below moves letter down 10px on canvas within next draw round
//       colVal[index] = posY + 10;
//     }
//   });
// }
// setInterval(matrix, 50); //matrix to run at 50ms intervals

//2. COUNTDOWN CLOCK
// const endDate = document.querySelector("input");
// const clock = document.querySelector(".clock");
// let timeInterval;
// let timeStop = true;

// //below: check if item for countdown already set,
// const savedValue = localStorage.getItem("countdown") || false;
// // if there is saved item --> use that value
// if (savedValue) {
//   startClock(savedValue);
//   let inputValue = new Date(savedValue);
//   endDate.valueAsDate = inputValue; //input field date value set to local storage saved val
// }

// endDate.addEventListener("change", function (e) { //if input field is changed
//   e.preventDefault();
//   clearInterval(timeInterval);
//   const temp = new Date(endDate.value);
//   localStorage.setItem("countdown", temp); //set new endDate value in local storage
//   startClock(temp); //start clock function from new endDate value
//   timeStop = true;
// });

// function startClock(d) { //function starts clock that is used to start counter
//   //below function updates counter
//   function updateCounter() {
//     let tl = timeLeft(d);
//     if (tl.total <= 0) {
//       timeStop = false; //stops the timer
//     }
//     for (let pro in tl) {
//       let el = clock.querySelector("." + pro);
//       if (el) {
//         el.innerHTML = tl[pro];
//       }
//     }
//   }
//   //below: if timeStop is true we continue updating counter every second otherwise we stop
//   updateCounter();
//   if (timeStop) {  //timeStop = true i.e. continue counting down
//     timeInterval = setInterval(updateCounter, 1000);
//   } else {
//     clearInterval(timeInterval);
//   }
// }

// function timeLeft(d) {
//   let currentDate = new Date();
//   let t = Date.parse(d) - Date.parse(currentDate);
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// //3. ONLINE PAINT APP
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
const btnSave = document.querySelector(".save");
const btnClear = document.querySelector(".clear");
const output = document.querySelector(".output");

const mLoc = { //tracks location of pen
  draw: false,
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0,
};

canvas.style.border = "1px solid black";
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);

canvas.addEventListener("mousemove", (e) => {
  mLoc.lastX = mLoc.x; //updates pen position to lastX position
  mLoc.lastY = mLoc.y;
  //console.log(e);
  mLoc.x = e.clientX; //sets location position to clientX
  mLoc.y = e.clientY;
  draw();
});

canvas.addEventListener("mousedown", (e) => {
  mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
  mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
  mLoc.draw = false;
});

function draw() {
  if (mLoc.draw) {
    ctx.beginPath();
    ctx.moveTo(mLoc.lastX, mLoc.lastY);
    ctx.lineTo(mLoc.x, mLoc.y);
    ctx.strokeStyle = penColor.value;
    ctx.lineWidth = penWidth.value;
    ctx.stroke();
    ctx.closePath();
  }
}

function saveImg() {
  const dataURL = canvas.toDataURL();
  console.log(dataURL);
  const img = document.createElement("img");
  output.prepend(img);
  img.setAttribute("src", dataURL);
  const link = document.createElement("a"); //to set download must create an anchor tag
  output.append(link);
  let fileName = Math.random().toString(16).substr(-8) + ".png";
  link.setAttribute("download", fileName); //hyperlink set to download attribute
  link.href = dataURL;
  link.click();
  output.removeChild(link);
}


function clearCanvas() {
  let temp = confirm("Are you sure you want to clear the canvas? Changes will not be saved.");
  if (temp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}