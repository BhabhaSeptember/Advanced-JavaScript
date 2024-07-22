"use strict";

//************WORD SCRAMBLER**************/

let theString = "encyclopaedia";

function scrambler(string) {
    let stringLength = string.length;
    let tempString = "";
    for (let i = 0; i < stringLength - 1 ; i++) {
        let index = Math.floor(Math.random() * string.length);
        let newLetter = string[index];
        tempString += newLetter;  
        string = string.substr(0, index) + string.substr(index +  1);
        console.log(string);     
    }
    return tempString;
}
console.log(scrambler(theString));



//************COUNTDOWN TIMER**************/



