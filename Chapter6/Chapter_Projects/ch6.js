// // // // //1. CREATE RECURSIVE FUNCTION
// // const countUp = function countingUp(i) {
// //     console.log(i);
// //     if (i < 10) {
// //     return countingUp(i + 1);
// //     }
// //     return;
// //     }

// //     countUp(0);
// //      countUp(5);
// //      countUp(10);


// // // // //2. SET TIMEOUT ORDER
// //
// const one = () => console.log("1. One");
// const two = () => console.log("2. Two");
// one();
// two();
 
// // 
// const three = () => {
//   console.log("3. Three");
//   one();
//   two();
// }
// three();

// //  
// const four = ()=> {
//   console.log("4. Four");
//   one();
//   setTimeout(three, 10000);
  
// }
// four();



