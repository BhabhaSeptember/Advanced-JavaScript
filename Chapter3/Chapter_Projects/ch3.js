"use strict";

//********************MANIPULATING AN ARRAY**********/

let theList =['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
console.log("Original array: ", theList);

theList.splice(0 , 1, "FIRST");
theList.splice(2, 6, "MIDDLE", "hello World", "LAST");
console.log("Updated List: ", theList);
console.log("");


//****************COMPANY PRODUCT CATALOG***************/

let items = [];

let item1 = {item: "shirt",type: "golf-T", cost: 19.99, quantity: 3};
let item2 = {item: "skirt",type: "pencil skirt", cost: 59.99, quantity: 5};
let item3 = {item: "hat", type: "beanie", cost: 9.99, quantity: 2};

items[0] = item1;
items[1] = item2;
items[2] = item3;

console.log("Product Catalog: ", items);

//quantity element for third item
console.log(items[2].quantity);

//item type for item1
console.log(items[0].type);

//cost of item 2
console.log(items[1].cost);






