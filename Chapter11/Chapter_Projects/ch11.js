
//CHAPTER PROJECTS
//1. BUILDING ANALYTICS

// const trackingArray = [];
// const mainContainer = document.querySelector(".container");
// mainContainer.addEventListener("click", tracker);

// function tracker(e) {
//   const el = e.target;
//   if (el.id) {
//     const temp = {};
//     temp.content = el.textContent;
//     temp.id = el.id;
//     temp.tagName = el.tagName;
//     temp.class = el.className;
//     console.dir(el);
//     trackingArray.push(temp);
//     console.log(trackingArray);
//   }
// }






//2. STAR RATING SYSTEM
// const starsUL = document.querySelector(".stars");
// const output = document.querySelector(".output");
// const stars = document.querySelectorAll(".star");

// stars.forEach((star, index) => {
//   star.starValue = index + 1;
//   star.addEventListener("click", starRate);
// });

// function starRate(e) {
//   output.innerHTML = `You Rated this ${e.target.starValue} stars`;
//   stars.forEach((star, index) => {
//     if (index < e.target.starValue) {
//       star.classList.add("orange");
//     } else {
//       star.classList.remove("orange");
//     }
//   });
// }





//3. MOUSE POSITION TRACKER
// const ele = document.querySelector(".holder");
// ele.addEventListener("mouseover", (e) => {
//   e.target.classList.add("active");
// });
// ele.addEventListener("mouseout", (e) => {
//   e.target.classList.remove("active");
// });
// ele.addEventListener("mousemove", coordin);

// function coordin() {
//   let html = "X:" + event.clientX + " | Y:" + event.clientY;
//   document.getElementById("output").innerHTML = html;
// }







//4. BOX CLICKER SPEED TEST GAME
const output = document.querySelector(".output");
const message = document.querySelector(".message");

const box = document.createElement("div");
box.classList.add("box");
output.append(box);

message.textContent = "Press Box to Start";

const game = {
  timer: 0,
  start: null,
};

function ranNum(max) {
    return Math.floor(Math.random() * max);
  }

box.addEventListener("click", (e) => {
    box.style.display = "none";
  game.timer = setTimeout(addBox, ranNum(5000));
  if (!game.start) {
    message.textContent = "Loading....";
  } else {
    const cur = new Date().getTime();
    const dur = (cur - game.start) / 1000;
    message.textContent = `It took ${dur} seconds to click`;
  }
});

function addBox() {
  message.textContent = "Click it...";
  game.start = new Date().getTime();
  box.style.display = "block";
  box.style.left = ranNum(450) + "px";
  box.style.top = ranNum(450) + "px";
}