 // /* CHAPTER PROJECT (MATH MULTIPLICATION TABLE) */
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



