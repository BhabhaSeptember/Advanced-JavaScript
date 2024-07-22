// // // // // // // //CHAPTER PROJECTS
// // // // // // //1. WORD SCRAMBLER
// // let str = "Prestidigitation";  //Defn = conjuring tricks performed as entertainment
// // function scramble(val) {
// //     let max = val.length;
// //     let temp = "";
// //     for ( let i = 0; i < max ; i++){
// //     console.log("1. Value length = " + val.length);
// //     let index = Math.floor(Math.random() * val.length);
// //     temp += val[index];
// //     console.log("2. Temp Array = " + temp);
// //     val = val.substr(0, index) + val.substr(index + 1);
// //     console.log("3. " + val);
// //     }
// //     return temp;
// // }
// // console.log("4. Final result = " + scramble(str));




// // // // // // //COUNTDOWN TIMER
// const endDate = "Dec 22 2023";
// function countdown() {
//     const total = Date.parse(endDate) - new Date();
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const mins = Math.floor((total / 1000 / 60) % 60);
//     const secs = Math.floor((total / 1000) % 60);
//     return {
//         days, 
//         hrs, 
//         mins, 
//         secs
//     };
// }

// function update() {
//     const temp = countdown();
//     let output = "";
//     for (const property in temp){
//         output += (`${property} : ${temp[property]}`);
//     }
//     console.log(output);
//     setTimeout(update, 1000);
// }

// update();







// // // // // //SELF-CHECK QUIZ
// // // // // //1. Answer = a
// // // // // var c = "http://www.google.com?id=1000&n=500";
// // // // // var e = encodeURIComponent(c);
// // // // // console.log("Original = " + c);
// // // // // console.log("Encoded = " + e);

// // // // // var g = decodeURIComponent(e);
// // // // // console.log("Answer(decode) = " + g);



// // // // //2. 4
// // // // const arr = ["hi","world","hello","hii","hi","hi World","Hi"];
// // // // console.log(arr.lastIndexOf("hi"));


// // // //3. ["Hii", "hi", "hello", "Hii", "hi", "hi world", "Hi"];
// // // // const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
// // // // arr.copyWithin(0, 3, 5);
// // // // console.log(arr);


// // // //4. ["hi", "hi World"]
// // // // const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
// // // // const arr2 = arr.filter((element,index)=>{
// // // // const ele2 = element.substring(0, 2);
// // // // return (ele2 == "hi");
// // // // });
// // // // console.log(arr2);