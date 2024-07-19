
                          /*  READY TO REVIEW!!! */

                          
// // /* CHAPTER PROJECT (MATH MULTIPLICATION TABLE) */
const multTable = [];
const numOfTimes = 5; //# of columns
for (let x = 0; x < numOfTimes; x++) {
    const tempArray = [];
    for (let y = 0; y < numOfTimes; y++) {
        tempArray.push(x*y);
    }
    multTable.push(tempArray);
}
console.log(multTable);
console.table(multTable);



// /*  SELF CHECK QUIZ */
// //1.
// let step = 3;
// for (let i = 0; i < 1000; i += step) {
// if (i > 10) {
// break;
// }
// console.log(i);
// }

//2.
// const myArray = [1,5,7];
// for(el in myArray){
// console.log("1. "+ Number(el)); //outputs index numbers
// el = Number(el) + 5;
// console.log("2. " + el);
// }
// console.log(myArray);